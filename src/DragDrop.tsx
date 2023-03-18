/**
 * Drag & Drop Component
 */

import React, {FunctionComponent} from 'react';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

interface DragDropProps {
  children: JSX.Element | JSX.Element[];
}

type ContextType = {
  x: number;
  y: number;
};

export const DragDrop: FunctionComponent<DragDropProps> = ({children}) => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const drag = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart(event, context) {
      context.x = x.value;
      context.y = y.value;
    },
    onActive(event, context) {
      console.log(
        `DRAG = [ X : ${event.translationX}, Y : ${event.translationY} ]`,
      );
      x.value = event.translationX + context.x;
      y.value = event.translationY + context.y;
    },
    onEnd(event, context) {
      console.log(
        `DROP = [ X : ${event.translationX}, Y : ${event.translationY} ]`,
      );
      //   x.value = 0;
      //   y.value = 0;
    },
  });

  return (
    <PanGestureHandler onGestureEvent={drag}>
      <Animated.View
        style={[
          useAnimatedStyle(() => {
            return {
              transform: [{translateX: x.value}, {translateY: y.value}],
            };
          }),
        ]}>
        {children}
      </Animated.View>
    </PanGestureHandler>
  );
};
