import {Text, View, Pressable} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import {Shadows, Colors} from '../Stylesheets/Stylesheets';

export const EntryContainer = styled(Pressable)`
  margin-bottom: 2px;

  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-left: 5px;
  padding-right: 5px;

  border-style: solid;
  border: 1px solid ${Colors.Accent};
  border-radius: 10px;
`;

export const TextContainer = styled(View)`
  flex: 5;
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
`;

export const PrimaryText = styled(Text)`
  flex: 2;
  font-size: 28px;
  font-weight: 600;
  /* border: 1px solid black; */
  padding-top: 6px;
  color: ${Colors.Font};
  /* text-shadow: ${Shadows.AccentSmaller}; */
`;

export const SecondaryText = styled(Text)`
  flex: 2;
  font-size: 22px;
  padding-bottom: 12px;
  /* border: 1px solid black; */
  color: ${Colors.Font};
  /* text-shadow: ${Shadows.AccentSmaller}; */
`;

export const RangeIcon = styled(Icon)`
  font-size: 42px;
  /* border: 1px solid black; */
  align-self: center;
`;

export const CheckIcon = styled(Icon)`
  flex: 1;
  font-size: 32px;
  align-self: center;
`;
