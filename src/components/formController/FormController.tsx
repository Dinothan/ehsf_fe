import React, {FC, ReactNode} from 'react';
import {FormControl as NativeBaseFormControll, IFormControlProps, View} from 'native-base';
import {StyleProp, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors} from '../../config/colors';
import Text from '../typography/Text';
import { FieldErrors } from 'react-hook-form';
interface IFormControl extends IFormControlProps {
    children: ReactNode;
    error?:  FieldErrors;
    // error?: {message: string};
    label?: string;
    labelStyle?: StyleProp<TextStyle>;
    errorStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
}

const FormControl: FC<IFormControl> = (props) => {
  const { children, error, label, labelStyle, errorStyle, containerStyle} = props;
  const formControlProps = {...props};

  const {defaultErrorStyle, defaultLabelStyle} = styles;
    return (
        <View style={containerStyle}>
             <NativeBaseFormControll {...formControlProps}>
         {label && <Text style={labelStyle ? [defaultLabelStyle, labelStyle] : defaultLabelStyle}>{label}</Text>}
         {children}
         {error && (
                    <Text style={errorStyle ? [defaultErrorStyle, errorStyle] : defaultErrorStyle}>
                      {error.message}
                    </Text>
                )}
     </NativeBaseFormControll>
        </View>
    );
};
export default FormControl;

const styles = StyleSheet.create({
    defaultLabelStyle: {
        color: colors.dark[800],
        fontFamily: 'LexendDeca-Regular',
        fontSize: 12,
        lineHeight: 15,
        marginBottom: 4
    },
    defaultErrorStyle: {
        color: colors.primary.error,
        fontFamily: 'LexendDeca-Regular',
        fontSize: 12,
        lineHeight: 15,
        marginTop: 8,
        alignSelf: 'flex-end'
        }

});
