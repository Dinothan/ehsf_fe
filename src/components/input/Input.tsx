import React, {FC} from 'react';
import {Input as NativeBaseInput, IInputProps, View} from 'native-base';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {colors} from '../../config/colors';
interface IInput extends IInputProps {
  type?: 'dark' | 'light';
  containerStyle?: StyleProp<ViewStyle>;
}

const Input: FC<IInput> = (props) => {
  const {type, style, containerStyle} = props;
  const inputProps = {...props};
  delete inputProps.type;
  delete inputProps.containerStyle;

  const {darkStyle, lightStyle} = styles;

  const renderInput = (inputStyle: any, placeholderTextColor: string) => {
    return (
      <View style={containerStyle ?? {borderRadius: 10}}>
        <NativeBaseInput
          {...inputProps}
          style={style ? [inputStyle, style] : inputStyle}
          placeholderTextColor={placeholderTextColor}
        />
      </View>
    );
  };
  switch (type) {
    case 'dark':
      return renderInput(darkStyle, colors.dark[800]);
    case 'light':
    default:
      return renderInput(lightStyle, colors.dark[700]);
  }
};
export default Input;

const styles = StyleSheet.create({
  darkStyle: {
    backgroundColor: colors.neutral[700],
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    fontFamily: 'LexendDeca-Regular',
    fontSize: 15,
    color: colors.dark[800],
    borderColor: colors.dark[800],
  },
  lightStyle: {
    backgroundColor: colors.neutral[700],
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    fontFamily: 'LexendDeca-Regular',
    fontSize: 15,
    color: colors.dark[800],
    borderColor: colors.neutral[900],
  },
  errorTextStyle: {color: 'red'},
});
