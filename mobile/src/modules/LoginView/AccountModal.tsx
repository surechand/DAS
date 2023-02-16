import React from 'react';
import {Text, View, Modal, Button} from 'react-native';
import {Colors} from './Stylesheets/Stylesheets';

interface ModalProps {
  visible: boolean;
  handleClose: () => void;
}
const AccountModal: React.FC<ModalProps> = ({
  visible,
  handleClose,
}: ModalProps) => (
  <Modal
    animationType="fade"
    visible={visible}
    onRequestClose={handleClose}
    transparent>
    <View
      style={{
        height: '20%',
        backgroundColor: 'white',
        marginHorizontal: 30,
        marginVertical: 320,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      }}>
      <Text style={{fontSize: 20}}>
        Contact with your system administrator at{'\n'}+48 123 456 789
      </Text>
      <Button color={Colors.PurpleAccent} onPress={handleClose} title="Ok" />
    </View>
  </Modal>
);

export default AccountModal;
