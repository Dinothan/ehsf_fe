import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {Icon, Radio, Stack} from 'native-base';
import Text from '../../components/typography/Text';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import * as actions from '../../store/actions/index';
import {colors} from '../../config/colors';
import {useForm, Controller} from 'react-hook-form';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FormControl from '../../components/formController/FormController';

const {width: screenWidth} = Dimensions.get('window');
const Signup = props => {
  const {onSignup} = props;
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
      onSignup(data, () => {});
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  const Logo = () => <View style={logoContainer}></View>;

  const HeadingText = () => (
    <View style={headingContainer}>
      <Text style={heading}>Sign In</Text>
      <Text style={subHeading}>
        Please sign in with the provided email and password
      </Text>
    </View>
  );

  const LoginForm = ({country, onSelect}) => (
    <View style={formContainer}>
      <View style={inputContainer}>
        <Controller
          rules={{
            required: 'First name is required',
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
                placeholder="Enter your firstname"
              />
            </FormControl>
          )}
          name="firstname"
        />
        <Controller
          rules={{
            required: 'Last name is required',
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
                placeholder="Enter your lastname"
              />
            </FormControl>
          )}
          name="lastname"
        />
        <Controller
          rules={{
            required: 'Phone number is required',
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
                placeholder="Enter your phone number"
              />
            </FormControl>
          )}
          name="phone"
        />
        <Controller
          rules={{
            required: 'City is required',
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
                placeholder="Enter your city"
              />
            </FormControl>
          )}
          name="city"
        />
        <Controller
          rules={{
            required: 'State is required',
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
                placeholder="Enter your state"
              />
            </FormControl>
          )}
          name="state"
        />
        <Controller
          rules={{
            required: 'Country is required',
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
                placeholder="Enter your country"
              />
            </FormControl>
          )}
          name="country"
        />
        <Controller
          rules={{
            required: 'Gender is required',
          }}
          control={control}
          render={({field: {onChange, value}}) => (
            <FormControl
              style={styles.formControl}
              label="Gender*"
              error={errors.offerPlaced}>
              <Radio.Group
                color={colors.primary.teal}
                name="gender"
                value={value}
                onChange={onChange}>
                <Stack
                  direction={{
                    base: 'row',
                  }}
                  space={4}
                  w="100%">
                  <Radio value={'male'} size="sm" my={1}>
                    <Text style={styles.radioText}>male</Text>
                  </Radio>
                  <Radio value={'female'} size="sm" my={1}>
                    <Text style={styles.radioText}>female</Text>
                  </Radio>
                </Stack>
              </Radio.Group>
            </FormControl>
          )}
          name="gender"
        />
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
        <Controller
          rules={{
            required: 'Confirm password is required',
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
                placeholder="Enter confirm password"
              />
            </FormControl>
          )}
          name="confirmpassword"
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
          {'Signup'}
        </Button>
      </View>
      {/* <Modal
        setOpen={setOpen}
        open={open}
        heading={'Forgot your username or password?'}
        text={
          'Please contact IMPACC at the number given above to reset your username or password'
        }
      />
      <Modal
        setOpen={setNetworkOpen}
        open={networkOpen}
        heading={'No Internet Connection'}
        text={'You need internet connection to login into the app.'}
      /> */}
    </View>
  );

  const Contact = () => (
    <View style={contactContainer}>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>or</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );

  const renderLogin = () => {
    const [country, setCountry] = useState(null);
    const onSelect = country => {
      setCountry(country.name);
    };
    return (
      <View style={styles.container}>
        <Logo />
        <HeadingText />
        <LoginForm country={country} onSelect={onSelect} />
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
    onSignup: (user, callBack) => dispatch(actions.signup(user, callBack)),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
