import React, {FC, ReactNode} from 'react';
import {ITextProps, Text as NativeBaseText} from 'native-base';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {colors} from '../../config/colors';
interface IText extends ITextProps {
  children: ReactNode;
  type?: 'primary' | 'subHeading' | 'info';
}

const Text: FC<IText> = (props) => {
  const {children, style, type} = props;
  const textProps = {...props};
  const getDefaultStyle = () => {
    switch (type) {
      case 'primary':
      default:
        return styles.defaultStyle;
      case 'subHeading':
        return styles.subHeading;
      case 'info':
        return styles.info;
    }
  };
  const getDefaultFont = () => {
    switch (type) {
      case 'primary':
        default:
          return'LexendDeca-Regular';
      case 'subHeading': return 'LexendDeca-Medium';
      case 'info': return 'LexendDeca-Regular';
    }
  };
  return (
    <NativeBaseText
    {...textProps}
    fontFamily={getDefaultFont()}
      style={style ? [getDefaultStyle(), style, { fontFamily: 'LexendDeca-Regular'}] : [getDefaultStyle()]}
      >
      {children}
    </NativeBaseText>
  );
};
export default Text;

const styles = StyleSheet.create({
  defaultStyle: {
    fontSize: 10,
    fontFamily: 'LexendDeca-Regular',
    color: colors.dark[800],
  },
  subHeading: {
    fontSize: 14,
    fontFamily: 'LexendDeca-Medium',
    color: colors.dark[900],
    fontWeight: '500',
  },
  info: {
    fontSize: 10,
    fontFamily: 'LexendDeca-Regular',
    color: colors.dark[700],
    fontWeight: '600',
    lineHeight: 12
  }
});
