/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

const PAGE_WIDTH = Dimensions.get('window').width;

function ReactionContainer(props: {
  text: string;
  children: (text: React.ReactElement, layout?: { width: number }) => React.ReactElement;
}) {
  const [width, setWidth] = React.useState<number>();
  const [layout, setLayout] = React.useState<{ width: number }>();

  React.useEffect(() => {
    if (typeof width === 'number') setLayout({ width });
  }, [width]);

  React.useEffect(() => {
    setLayout(undefined);
  }, [props.text]);

  const text = (
    <Animated.View
      style={[
        {
          flexWrap: 'wrap',
          width: layout?.width,
        },
      ]}>
      <Text
        onLayout={({ nativeEvent }) => {
          if (typeof layout === 'undefined') setWidth(nativeEvent.layout.width);
        }}
        style={{ fontSize: 17, marginRight: 7 }}>
        {props.text}
      </Text>
    </Animated.View>
  );

  return React.cloneElement(props.children(text, layout), {
    key: props.text,
  });
}

function TextCarousel() {
  return (
    <ReactionContainer text="RAMADAN KAREEM 🌙كل عام و انتم بخير ">
      {(text, layout) => {
        return (
          <View
            style={{
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Carousel
              width={layout?.width ?? PAGE_WIDTH}
              height={30}
              style={[
                {
                  width: PAGE_WIDTH * 0.92,
                },
              ]}
              snapEnabled={false}
              pagingEnabled={false}
              loop
              autoPlay
              withAnimation={{
                type: 'timing',
                config: {
                  duration: 10000,
                  easing: Easing.linear,
                },
              }}
              autoPlayInterval={0}
              data={[...new Array(6).keys()]}
              renderItem={() => text}
              enabled={false}
            />
          </View>
        );
      }}
    </ReactionContainer>
  );
}

export default TextCarousel;
