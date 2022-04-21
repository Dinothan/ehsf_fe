import React from 'react';
import {Button as NativeBaseButton, Box} from 'native-base';
import {Pressable, StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import Text from '../typography/Text';

const Button = props => {
  const {children, type, style, fontSize, iconProps} = props;
  const buttonProps = {...props};
  delete buttonProps.type;
  const {dark, primary} = colors;
  const {defaultStyle, secondaryStyle, infoStyle, iconStyle} = styles;

  switch (type) {
    case 'primary':
    default:
      return (
        <Box
          bg={{
            linearGradient: {
              colors: [primary[700], primary[800]],
              start: [0, 0],
              end: [1, 0],
            },
          }}
          rounded="full">
          <NativeBaseButton
            {...buttonProps}
            style={style ? [defaultStyle, style] : defaultStyle}
            _text={{
              style: {
                fontSize: fontSize ? fontSize : 12,
                fontFamily: 'LexendDeca-Regular',
                fontWeight: '500',
              },
            }}>
            {children}
          </NativeBaseButton>
        </Box>
      );

    case 'secondary':
      return (
        <NativeBaseButton
          {...buttonProps}
          _text={{
            style: {
              color: dark[700],
              fontSize: 12,
              fontFamily: 'LexendDeca-Regular',
            },
          }}
          style={style ? [secondaryStyle, style] : secondaryStyle}>
          {children}
        </NativeBaseButton>
      );
    case 'info':
      return (
        <Pressable
          {...buttonProps}
          style={style ? [infoStyle, style] : infoStyle}>
          <Text style={styles.pressableTextStyle}>{children}</Text>
        </Pressable>
      );
    case 'icon':
      return (
        <Pressable
          {...buttonProps}
          style={style ? [iconStyle, style] : iconStyle}>
          <Icon
            name={children ?? 'hearto'}
            size={16}
            color={colors.dark[700]}
            {...iconProps}
          />
        </Pressable>
      );
  }
};
export default Button;

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: 'transparent',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    fontFamily: 'Lexend Deca',
    fontSize: 10,
    paddingHorizontal: 15,
  },
  secondaryStyle: {
    backgroundColor: colors.neutral[700],
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    fontFamily: 'Lexend Deca',
    fontSize: 10,
    borderWidth: 1,
    borderColor: colors.dark[700],
  },
  infoStyle: {
    backgroundColor: colors.neutral[700],
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    fontFamily: 'Lexend Deca',
    borderWidth: 1,
    borderColor: colors.primary.teal,
    height: 25,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    borderWidth: 0,
    padding: 5,
    width: 39,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressableTextStyle: {
    color: colors.dark[900],
    fontSize: 10,
    fontFamily: 'LexendDeca-Regular',
  },
});
