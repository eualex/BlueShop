import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri';
import * as Styles from './styles';

interface PropsSelect {
  onChange?: ((event: React.ChangeEvent<HTMLSelectElement>) => void);
  titleValue: string;
  options: string[]
}

const Select: React.FC<PropsSelect> = ({ titleValue, onChange, options }) => {
  const { colors } = useContext(ThemeContext);
  
  return (
    <Styles.ContainerSelect>
      <RiArrowDownSLine color={colors.textPrimary} size={20}/>
      <Styles.Select onChange={onChange}>
        <option disabled hidden defaultValue={titleValue}>{titleValue}</option>
        {options.map(option => (
          <option value={option.toLowerCase()}>{option}</option>
        ))}
      </Styles.Select>
    </Styles.ContainerSelect>
  )
}

export default Select;
