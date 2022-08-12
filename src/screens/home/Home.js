import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import * as actions from '../../store/actions/index';
import GoogleFit, {Scopes} from 'react-native-google-fit';

const Home = ({setBMI, user}) => {
  const {weight, height} = user;

  useEffect(() => {
    // health();
    calculateBMI();
  }, []);

  const calculateBMI = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    if (val < 18.5) {
      setBMI(val + ' (Under Weight)');
    } else if (val > 18.5 && val <= 24.9) {
      setBMI(val + ' (Healthy)');
    } else if (val > 24.9 && val < 30) {
      setBMI(val + ' (Overweight)');
    } else {
      setBMI(val + ' (Obese)');
    }
  };

  const health = async () => {
    const options = {
      scopes: [
        Scopes.FITNESS_ACTIVITY_READ,
        Scopes.FITNESS_ACTIVITY_WRITE,
        Scopes.FITNESS_BODY_READ,
        Scopes.FITNESS_BODY_WRITE,
        Scopes.FITNESS_BLOOD_PRESSURE_READ,
        Scopes.FITNESS_BLOOD_PRESSURE_WRITE,
        Scopes.FITNESS_BLOOD_GLUCOSE_READ,
        Scopes.FITNESS_BLOOD_GLUCOSE_WRITE,
        Scopes.FITNESS_NUTRITION_WRITE,
        Scopes.FITNESS_SLEEP_READ,
      ],
    };
    await GoogleFit.checkIsAuthorized().then(() => {
      var authorized = GoogleFit.isAuthorized;
      console.log('check: ', authorized);
      if (authorized) {
        // if already authorized, fetch data
      } else {
        // Authentication if already not authorized for a particular device
        GoogleFit.authorize(options)
          .then(authResult => {
            if (authResult.success) {
              console.log('AUTH_SUCCESS');
              // GoogleFit.getWeightSamples(new Date()).then(res => {
              //   console.log('weight: ', res);
              //   // props.SET_BMI();
              // });
              // if successfully authorized, fetch data
            } else {
              console.log('AUTH_DENIED ' + authResult.message);
            }
          })
          .catch(() => {
            dispatch('AUTH_ERROR');
          });
      }
    });

    var today = new Date();
    var lastWeekDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 8,
    );
    // const opt = {
    //   startDate: '2017-01-01T00:00:17.971Z', // required ISO8601Timestamp
    //   endDate: new Date().toISOString(), // required ISO8601Timestamp
    //   // bucketUnit: BucketUnit.DAY, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
    //   bucketInterval: 1, // optional - default 1.
    // };

    // GoogleFit.getDailyStepCountSamples(opt)
    //  .then((res) => {
    //      console.log('Daily steps >>> ', res)
    //  })
    //  .catch((err) => {console.warn(err)});

    // or with async/await syntax
    // async function fetchData() {
    //   const res = await GoogleFit.getDailyStepCountSamples(opt)；
    //   console.log(res);
    // }

    // shortcut functions,
    // return weekly or daily steps of given date
    // all params are optional, using new Date() without given date,
    // adjustment is 0 by default, determine the first day of week, 0 == Sunday, 1==Monday, etc.
    // GoogleFit.getDailySteps(date).then().catch()

    //  GoogleFit.getWeightSamples(new Date(2022,7,31)).then(weight => {
    //   GoogleFit.getHeightSamples(new Date()).then(height => {
    //     console.log('weight: ', weight.value);
    //     console.log('height: ', height.value);
    //     let val = (
    //       [Number(weight.value) / Number(height.value) / Number(height.value)] *
    //       10000
    //     ).toFixed(1);
    //     // props.SET_BMI(val);
    //   });
    // });

    // await GoogleFit.getWeeklySteps(new Date())
    //   .then(res => console.log('Daily steps >>> ', res))
    //   .catch(err => console.log('Error >>> ', err));
  };

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: callBack => dispatch(actions.logout(callBack)),
    setBMI: data => dispatch(actions.saveBMI(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
