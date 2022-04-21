import React, {FC} from 'react';
import {Modal as NativeBaseModal, IModalProps, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import Button from '../button/Button';

interface IModal extends IModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  closeButton?: boolean;
  heading: string;
  text: string;
}

const Modal: FC<IModal> = (props) => {
  const {open, setOpen, closeButton, heading, text} = props;

  const renderModal = () => {
    return (
      <NativeBaseModal
        isOpen={open}
        onClose={() => setOpen(false)}
        mt={12}
        size="full">
        <NativeBaseModal.Content width="100%" {...styles['bottom']}>
          {closeButton && <NativeBaseModal.CloseButton />}
          <NativeBaseModal.Header style={styles.headerLayoutStyle}>
            <Text style={styles.headerTextStyle}>{heading}</Text>
          </NativeBaseModal.Header>
          <NativeBaseModal.Body style={styles.bodyLayoutStyle}>
            <Text style={styles.bodyTextStyle}>{text}</Text>
          </NativeBaseModal.Body>
          <NativeBaseModal.Footer style={styles.footerStyle}>
            <Button
              // style={button}
              type="secondary"
              onPress={() => {
                setOpen(false);
              }}>
              Dismiss
            </Button>
          </NativeBaseModal.Footer>
        </NativeBaseModal.Content>
      </NativeBaseModal>
    );
  };
  return renderModal();
};
export default Modal;

const styles = StyleSheet.create({
  top: {
    marginBottom: 'auto',
    marginTop: 0,
  },
  bottom: {
    marginBottom: 50,
    marginTop: 'auto',
  },
  left: {
    marginLeft: 0,
    marginRight: 'auto',
  },
  right: {
    marginLeft: 'auto',
    marginRight: 0,
  },
  center: {},
  headerLayoutStyle: {
    borderBottomWidth: 0,
    backgroundColor: colors.neutral[700],
  },
  headerTextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  bodyLayoutStyle: {backgroundColor: colors.neutral[700]},
  bodyTextStyle: {fontSize: 13},
  footerStyle: {
    borderBottomWidth: 0,
    backgroundColor: colors.neutral[700],
  },
});
