import React from 'react';
import {Text, Pressable, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from './Stylesheets/Stylesheets';

export const loginStates = {
  enabled: 0,
  disabled: 1,
  loading: 2,
  loginSuccess: 3,
  loginFailed: 4,
};

interface LoginButtonProps {
  state: number;
  onPress: () => void;
}

export const LoginButton: React.FC<LoginButtonProps> = ({
  state,
  onPress,
}: LoginButtonProps) => {
  return (
    <Pressable
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.PurpleAccent,
        borderRadius: 20,
        height: 40,
      }}
      onPress={onPress}
      disabled={state === 1 ? true : false}>
      {state < 2 && (
        <Text
          style={{
            fontSize: 28,
            fontWeight: '600',
            color: state < 1 ? Colors.Background : Colors.Gray,
          }}>
          Log in
        </Text>
      )}
      {state === 2 && <ActivityIndicator size="large" color={Colors.Accent} />}
      {state === 3 && (
        <Icon name="check" style={{fontSize: 48, color: Colors.Green}} />
      )}
      {state === 4 && (
        <Icon name="close" style={{fontSize: 48, color: Colors.Red}} />
      )}
    </Pressable>
  );
};
