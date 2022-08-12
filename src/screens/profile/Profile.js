import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, Image} from 'react-native';
import * as actions from '../../store/actions/index';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

const Profile = ({user, bmi}) => {
  const {
    city,
    firstname,
    lastname,
    weight,
    height,
    country,
    state,
    gender,
    email,
    phone,
    age,
  } = user;

  const [bmr, setBMR] = useState(null);
  const [bmrInfo, setBMRinfo] = useState(null);

  useEffect(() => {
    calculateBMR();
  }, []);

  const calculateBMR = () => {
    let bmrCalc = '';

    if (gender == 'male') {
      bmrCalc = 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age;
    } else if (gender == 'female') {
      bmrCalc = 655 + 9.563 * weight + 1.85 * height - 4.676 * age;
    }

    setBMR(bmrCalc);

    let activitySug = ';';
    if (bmrCalc <= 1926) {
      activitySug = 'Suggestion: little or no exercise.';
    } else if (bmrCalc > 1926 && bmrCalc <= 2207) {
      activitySug = 'Suggestion: Exercise 1-3 times/week.';
    } else if (bmrCalc > 2207 && bmrCalc <= 2351) {
      activitySug = 'Suggestion: Exercise 4-5 times/week.';
    } else if (bmrCalc > 2351 && bmrCalc <= 2488) {
      activitySug =
        'Suggestion: Daily exercise or intense exercise 3-4 times/week.';
    } else if (bmrCalc > 2488 && bmrCalc <= 2796) {
      activitySug = 'Suggestion: Intense exercise 6-7 times/week.';
    } else if (bmrCalc > 2796) {
      activitySug = 'Very intense exercise daily, or physical job.';
    }
    setBMRinfo(activitySug);
  };

  const FieldRow = ({field, value}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 15,
          paddingBottom: 10,
        }}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>{field}</Text>
        <Text style={{color: 'black'}}>{value}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
          />

          <Text style={styles.name}>{firstname + ' ' + lastname} </Text>
          {/* <Text style={styles.userInfo}>{auth}</Text> */}
          <Text style={styles.userInfo}>{city} </Text>
          <TouchableOpacity>
            <Text style={{color: 'blue'}}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <View style={{paddingBottom: 10}}>
          <Collapse isExpanded={true}>
            <CollapseHeader
              style={{
                flexDirection: 'row',
                padding: 10,
                backgroundColor: '#E6E6E6',
                borderBottomWidth: 1,
                borderTopWidth: 1,
              }}>
              {/* <View style={{width: '25%'}}></View> */}
              <View style={{}}>
                <Text style={{color: 'black'}}>Health Information</Text>
              </View>
            </CollapseHeader>
            <CollapseBody
              style={{
                padding: 10,
                backgroundColor: '#EDEDED',
                color: 'black',
              }}>
              <FieldRow field={'Height: '} value={height + ' cm'} />
              <FieldRow field={'Weight: '} value={weight + ' kg'} />
              <FieldRow field={'BMI: '} value={bmi} />
              <FieldRow field={'BMR: '} value={bmr + '(' + bmrInfo + ')'} />
            </CollapseBody>
          </Collapse>
        </View>
        <View>
          <Collapse isExpanded={true}>
            <CollapseHeader
              style={{
                flexDirection: 'row',
                padding: 10,
                backgroundColor: '#E6E6E6',
                borderBottomWidth: 1,
                borderTopWidth: 1,
              }}>
              {/* <View style={{width: '25%'}}></View> */}
              <View style={{}}>
                <Text style={{color: 'black'}}>Personal Information</Text>
              </View>
            </CollapseHeader>
            <CollapseBody
              style={{
                padding: 10,
                backgroundColor: '#EDEDED',
                color: 'black',
              }}>
              <FieldRow field={'Email: '} value={email} />
              <FieldRow field={'Age: '} value={age} />
              <FieldRow field={'gender: '} value={gender} />
              <FieldRow field={'phone: '} value={phone} />
              <FieldRow field={'City: '} value={city} />
              <FieldRow field={'State: '} value={state} />
              <FieldRow field={'Country: '} value={country} />
            </CollapseBody>
          </Collapse>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    bmi: state.user.bmi,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: callBack => dispatch(actions.logout(callBack)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#DCDCDC',
  },
  headerContent: {
    padding: 5,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: '#778899',
    fontWeight: '600',
    paddingBottom: 5,
  },
  body: {
    paddingTop: 10,
  },
  item: {
    flexDirection: 'row',
  },
  infoContent: {
    flex: 1,
    color: '#ffffff',
    paddingLeft: 5,
  },
  iconContent: {
    flex: 0.4,
    backgroundColor: '#708090',
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: '#FFFFFF',
  },
});
