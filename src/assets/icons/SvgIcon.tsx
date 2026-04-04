import React from 'react';
import { SvgXml } from 'react-native-svg';

interface SvgIconProps {
  xmlPath: string;
  color?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ xmlPath, color }) => {
  const modifiedXml = color
    ? xmlPath.replace(/fill="[^"]*"/g, `fill="${color}"`)
    : xmlPath;
  return <SvgXml xml={modifiedXml} />;
};

export default SvgIcon;
