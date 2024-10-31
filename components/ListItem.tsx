import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Divider} from './Divider';
import {useListGroupContext} from '../helpers/ListGroupContext';
import {Icon} from './Icon';

interface ListItemProps {
  leftLabel: string;
  description?: string;
  rightLabel?: string;
  leftIcon?: string;
  rightIcon?: string;
  onPress?: () => void;
  divider?: boolean;
}

export const ListItem = ({
  leftLabel,
  description,
  rightLabel,
  leftIcon,
  rightIcon,
  onPress,
  divider = false,
}: ListItemProps) => {
  const {inListGroup, listGroupItemStyle} = useListGroupContext();
  const {height: screenHeight} = Dimensions.get('screen');
  const floatStyle = {
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 1, height: 1},
    marginTop: 10,
    backgroundColor: '#fff',
  };

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.container,
          {
            height: screenHeight / 12,
          },
          inListGroup ? listGroupItemStyle : floatStyle,
        ]}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          {leftIcon ? <Icon name={leftIcon} /> : null}
          <View style={{marginLeft: 10}}>
            <Text style={[styles.body1Text, {color: '#000'}]}>{leftLabel}</Text>
            {description ? (
              <Text style={[styles.captionText, {color: 'grey'}]}>
                {description}
              </Text>
            ) : null}
          </View>
        </View>
        {rightLabel ? (
          <View>
            <Text style={[styles.body2Text, {color: '#000'}]}>
              {rightLabel}
            </Text>
          </View>
        ) : null}
        {rightIcon ? <Icon name={rightIcon} size={18} color="grey" /> : null}
      </TouchableOpacity>
      {divider ? <Divider /> : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  // text styles
  body1Text: {
    fontSize: 16,
    fontWeight: '500',
  },
  body2Text: {
    fontSize: 16,
  },
  captionText: {
    fontSize: 14,
  },
});
