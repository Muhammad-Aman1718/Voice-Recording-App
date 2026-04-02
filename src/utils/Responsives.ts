import { Dimensions } from 'react-native';

// Get the device width and height
const { width, height } = Dimensions.get('window');

// Define the guideline base dimensions
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// Type annotations for the scaling functions
const horizontalScale = (size: number): number =>
  (width / guidelineBaseWidth) * size;
const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (horizontalScale(size) - size) * factor;

// Export the scaling functions
export { horizontalScale, verticalScale, moderateScale };
