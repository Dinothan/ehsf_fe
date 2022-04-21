import React, {FC, ReactElement, ReactNode} from 'react';
import {Heading as NativeBaseHeading, IHeadingProps} from 'native-base';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {colors} from '../../config/colors';
import {fonts} from '../../config/fonts';
interface IHeading extends IHeadingProps {
  type?: 'one' | 'two';
}

const Heading: FC<IHeading> = (props) => {
  const {type, style} = props;
  const headingProps = {...props};
  delete headingProps.type;
  const {darkStyle, lightStyle} = styles;
  const renderInput = (inputStyle: any) => {
    return (
      <NativeBaseHeading
        {...headingProps}
        style={style ? [inputStyle, style] : inputStyle}
      />
    );
  };
  switch (type) {
    case 'one':
      return renderInput(darkStyle, colors.dark[800]);
    case 'two':
    default:
      return renderInput(lightStyle, colors.dark[700]);
  }
};
export default Heading;

const styles = StyleSheet.create({
  darkStyle: {
    backgroundColor: colors.neutral[700],
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    fontFamily: 'Lexend Deca',
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
    fontFamily: 'Lexend Deca',
    fontSize: 15,
    color: colors.dark[800],
    borderColor: colors.neutral[900],
  },
});
