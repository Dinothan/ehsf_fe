import React, {useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {Icon} from 'native-base';
import Text from '../../components/typography/Text';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import * as actions from '../../store/actions/index';
import {colors} from '../../config/colors';
import {useForm, Controller} from 'react-hook-form';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FormControl from '../../components/formController/FormController';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width: screenWidth} = Dimensions.get('window');
const Login = props => {
  const {onLogin} = props;
  const [loading, setLoading] = useState(false);
  const {
    logo,
    button,
    heading,
    subHeading,
    formContainer,
    logoContainer,
    headingContainer,
    contactContainer,
    buttonContainer,
    inputContainer,
  } = styles;

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = async data => {
    delete data.confirmpassword;
    console.log('ddata: ', data);
    setLoading(true);
    try {
      onLogin(data, () => {
        props.navigation.navigate('MainStack');
      });
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  const Logo = () => <View style={logoContainer}></View>;

  const HeadingText = () => (
    <View style={headingContainer}>
      <Text style={heading}>Sign In</Text>
      <Text style={subHeading}>Please sign in with the email and password</Text>
    </View>
  );

  const LoginForm = ({country, onSelect}) => (
    <View style={formContainer}>
      <View style={inputContainer}>
        <Controller
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email',
            },
          }}
          control={control}
          render={({field: {onChange, value}}) => (
            <FormControl style={{marginBottom: 8}} error={errors.email}>
              <Input
                value={value}
                onChangeText={onChange}
                type={'dark'}
                containerStyle={{width: '100%'}}
                w={{
                  base: screenWidth - 64,
                }}
                style={{fontSize: 12}}
                autoCapitalize={'none'}
                keyboardType={'email-address'}
                InputLeftElement={
                  <View
                    style={{
                      height: '100%',
                      backgroundColor: colors.neutral[700],
                      paddingTop: 10,
                    }}>
                    <Icon
                      as={<MaterialIcons name="person" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  </View>
                }
                placeholder="Enter your email"
              />
            </FormControl>
          )}
          name="email"
        />
        <Controller
          rules={{
            required: 'Password is required',
          }}
          control={control}
          render={({field: {onChange, value}}) => (
            <FormControl style={{marginBottom: 8}} error={errors.password}>
              <Input
                value={value}
                onChangeText={onChange}
                type="dark"
                containerStyle={{width: '100%'}}
                w={{
                  base: screenWidth - 64,
                }}
                secureTextEntry
                style={{fontSize: 12}}
                InputLeftElement={
                  <View
                    style={{
                      height: '100%',
                      backgroundColor: colors.neutral[700],
                      paddingTop: 10,
                    }}>
                    <Icon
                      as={<MaterialIcons name="vpn-key" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  </View>
                }
                placeholder="Enter password"
              />
            </FormControl>
          )}
          name="password"
        />
      </View>
      <View style={buttonContainer}>
        <Button
          _loading={{
            _text: {
              color: 'white',
            },
          }}
          isLoading={loading}
          style={button}
          onPress={handleSubmit(onSubmit)}>
          {'Login'}
        </Button>
      </View>
    </View>
  );

  const Contact = () => (
    <View style={contactContainer}>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>or</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );

  const renderLogin = () => {
    return (
      <View style={styles.container}>
        <Logo />
        <HeadingText />
        <LoginForm />
        <Contact />
      </View>
    );
  };
  return renderLogin();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[700],
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoContainer: {
    paddingTop: 40,
  },
  headingContainer: {
    paddingTop: 24,
    alignItems: 'center',
  },
  formContainer: {
    paddingTop: 40,
    alignItems: 'center',
  },
  contactContainer: {
    alignItems: 'center',
    paddingTop: 40,
  },
  logo: {
    width: 40,
    height: 49,
  },
  heading: {
    width: 63,
    height: 23,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subHeading: {
    width: '100%',
    fontSize: 10,
    paddingTop: 8,
  },
  inputContainer: {
    width: '100%',
  },
  button: {
    backgroundColor: colors.primary[800],
    borderRadius: 5,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  buttonContainer: {
    width: screenWidth - 64,
    paddingTop: 40,
  },
});

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (user, callBack) => dispatch(actions.auth(user, callBack)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
