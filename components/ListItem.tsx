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
        <View style={styles.leftContentContainer}>
          {leftIcon ? <Icon name={leftIcon} /> : null}
          <View style={styles.leftLabelContainer}>
            <Text style={styles.leftLabelText}>{leftLabel}</Text>
            {description ? (
              <Text style={styles.descriptionText}>{description}</Text>
            ) : null}
          </View>
        </View>
        <View style={styles.rightContentContainer}>
          {rightLabel ? (
            <Text style={styles.rightLabelText}>{rightLabel}</Text>
          ) : null}
          {rightIcon ? <Icon name={rightIcon} size={18} color="grey" /> : null}
        </View>
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
  leftContentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  leftLabelContainer: {
    marginLeft: 10,
  },
  leftLabelText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  descriptionText: {
    fontSize: 14,
    color: 'grey',
  },
  rightContentContainer: {
    flexDirection: 'row',
  },
  rightLabelText: {
    fontSize: 16,
    color: '#000',
    marginRight: 10,
  },
});
