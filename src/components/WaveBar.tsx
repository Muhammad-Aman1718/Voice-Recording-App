import React from 'react';
import { View } from 'react-native';
import { theme } from '../utils/useTheme';

const WaveBar = React.memo(({ height }: { height: number }) => {
  return (
    <View
      style={{
        width: 6,
        height,
        backgroundColor: theme.lightColor.primary,
        marginHorizontal: 1.5,
        borderRadius: 5,
      }}
    />
  );
});
export default WaveBar;
