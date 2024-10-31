import {StyleSheet, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {ListGroupContext} from '../helpers/ListGroupContext';

interface ListGroupProps {
  children: ReactNode;
}

export const ListGroup = ({children}: ListGroupProps) => {
  const listGroupItemStyle: ViewStyle = {
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 0,
  };
  return (
    <ListGroupContext.Provider value={{inListGroup: true, listGroupItemStyle}}>
      <View style={styles.container}>{children}</View>
    </ListGroupContext.Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 1, height: 1},
  },
});
