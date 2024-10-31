import {
  Dimensions,
  LayoutChangeEvent,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {ReactNode, RefObject, useRef, useState} from 'react';
//   import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
//   import { icons } from '../icons/iconLibrary';

interface CarouselProps {
  children: ReactNode[];
  titles?: string[];
  titleFontSize?: number;
  paginationBulletColor?: string;
}

export const Carousel = ({
  children,
  titles,
  titleFontSize = 16,
  paginationBulletColor = '#177AD5',
}: CarouselProps) => {
  const childrenArray = React.Children.toArray(children);
  const {width, height: screenHeight} = Dimensions.get('screen');
  const scrollRef = useRef() as RefObject<ScrollView>;
  const [currentView, setCurrentView] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;
    setCarouselWidth(width);
  };

  const handleScroll = (currPosition: number) => {
    const index = Math.round(currPosition / width);

    setCurrentView(index);
    setCurrentTitleIndex(index);
  };

  const pressPaginationBullet = (index: number) => {
    scrollRef.current?.scrollTo({
      x: width * index,
      animated: true,
    });
  };

  return (
    <View onLayout={onLayout}>
      {titles ? (
        <View style={{paddingLeft: 10, paddingRight: 10, paddingTop: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: titleFontSize}}>
            {titles[currentTitleIndex]}
          </Text>
        </View>
      ) : null}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToOffsets={[width]}
        decelerationRate="fast"
        ref={scrollRef}
        onScroll={e => {
          const currPosition = e.nativeEvent.contentOffset.x;
          handleScroll(currPosition);
        }}>
        {childrenArray.map((child, index) => (
          <View
            key={index}
            style={{
              flex: 1,
              width: carouselWidth,
            }}>
            {child}
          </View>
        ))}
      </ScrollView>
      {/* <View style={styles.dotsContainer}>
          {childrenArray.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dot}
              onPress={() => pressPaginationBullet(index)}
            >
              <FontAwesomeIcon
                icon={icons.circle}
                size={8}
                color={currentView === index ? paginationBulletColor : 'rgba(0,0,0,0.5)'}
              />
            </TouchableOpacity>
          ))}
        </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    marginLeft: 3,
    marginRight: 3,
  },

  // text styles
  text: {
    textAlign: 'center',
  },
});
