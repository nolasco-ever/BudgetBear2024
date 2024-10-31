import {createContext, useContext} from 'react';
import {ViewStyle} from 'react-native';

interface ListGroupContextType {
  inListGroup: boolean;
  listGroupItemStyle?: ViewStyle;
}

// Create the context with a default value
export const ListGroupContext = createContext<ListGroupContextType>({
  inListGroup: false,
});

// A custom hook to use the context
export const useListGroupContext = () => useContext(ListGroupContext);
