import {StyleSheet} from 'react-native';
import {Colors} from '../../AppGlobalStyles/GlobalStylesheets';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 0,
    backgroundColor: Colors.Background,
  },
  isOpenColor: {
    backgroundColor: Colors.GreenAccent,
  },
  isNotOpenColor: {
    backgroundColor: Colors.Background,
  },
  headerRow: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
  },
  headerText: {
    flexGrow: 1,
    fontSize: 38,
    paddingTop: 4,
    paddingBottom: 10,
    textAlign: 'center',
    color: Colors.PurpleAccent,
  },
  headerButton: {
    flexGrow: 1,
    fontSize: 32,
    justifyContent: 'center',
    textAlign: 'center',
    color: Colors.PurpleAccent,
    paddingTop: 14,
    paddingLeft: 14,
    paddingRight: 14,
  },
  accordionHeaderItem: {
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 32,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.Accent,
  },
  accordionHeaderText: {
    fontSize: 24,
    textAlign: 'left',
  },
  accordionListElement: {
    padding: 2,
    paddingLeft: 50,
    paddingRight: 50,
  },
  accordionListElementText: {
    fontSize: 24,
    borderRadius: 8,
    backgroundColor: Colors.Purpleshade,
    padding: 10,
    textAlign: 'center',
    color: Colors.Font,
  },
});
