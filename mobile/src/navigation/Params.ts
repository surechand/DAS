import {StackScreenProps} from '@react-navigation/stack';

export type MainStackParams = {
  Login: undefined;
  Doors: {
    email: string;
  };
};

export type DoorsScreenRouteProp = StackScreenProps<MainStackParams, 'Login'>;
