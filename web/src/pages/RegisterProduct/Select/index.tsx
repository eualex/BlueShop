import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri';
import * as Styles from './styles';

interface PropsSelect extends React.SelectHTMLAttributes<HTMLSelectElement>{
  title: string;
  options: string[];
}

const Select: React.FC<PropsSelect> = ({ title, onChange, options, className }) => {
  const { colors } = useContext(ThemeContext);
  
  return (
    <Styles.ContainerSelect className={className} >
      <Styles.Select onChange={onChange} defaultValue={title}>
        <option disabled hidden >{title}</option>
        {options.map((option, index) => (
          <option key={index} value={option.toLowerCase()}>{option}</option>
          ))}
      </Styles.Select>
      
      <RiArrowDownSLine color={colors.textPrimary} size={30}/>
    </Styles.ContainerSelect>
  )
}

export default Select;
