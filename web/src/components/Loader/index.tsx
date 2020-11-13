import React, { useContext } from "react";
import LoaderCustom from 'react-loader-spinner';
import { TypesLoader } from '../../utils/loader';

import { ThemeContext } from 'styled-components';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

interface LoaderProps {
  width?: number;
  height?: number;
  type?: TypesLoader;
}

const Loader: React.FC<LoaderProps> = ({ width=60, height=60, type="TailSpin"}) => {
  const { colors } = useContext(ThemeContext);

  return (
    <LoaderCustom type={type} color={colors.primary} width={width} height={height} />
  );
};

export default Loader;
