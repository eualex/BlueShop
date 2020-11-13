import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri';
import * as Styles from './styles';

export type Types = 
  | "small"
  | "big"

interface PropsSelect extends React.SelectHTMLAttributes<HTMLSelectElement>{
  title: string;
  options: string[];
  customSize?: Types; 
}

const Select: React.FC<PropsSelect> = ({ title, onChange, options, className, customSize="big" }) => {
  const { colors } = useContext(ThemeContext);
  
  return (
    <Styles.ContainerSelect className={className} customSize={customSize}>
      <Styles.Select onChange={onChange} defaultValue={title} customSize={customSize}>
        <option disabled hidden >{title}</option>
        {options.map((option, index) => (
          <option key={index} value={option.toLowerCase()}>{option}</option>
          ))}
      </Styles.Select>
      
      <RiArrowDownSLine color={colors.textPrimary} size={customSize==="big" ? 30 : 20}/>
    </Styles.ContainerSelect>
  )
}

export default Select;
