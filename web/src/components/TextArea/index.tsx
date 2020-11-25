import React, { TextareaHTMLAttributes } from 'react';

import { ContainerTextArea } from './styles';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea: React.FC<Props> = ({ value, name, onChange }) => {
  return (
    <ContainerTextArea>
      <label htmlFor={name}>{name}:</label>
      <textarea name={name} maxLength={300} value={value} onChange={onChange}></textarea>
    </ContainerTextArea>
  )
}

export default TextArea;