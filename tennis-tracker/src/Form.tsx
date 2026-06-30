import type { HTMLInputTypeAttribute } from 'react';

export type FormInputProps = {
  name: string
  type: HTMLInputTypeAttribute
  elementId: string
  label: string
}

export const FormInput = ({ name, type, elementId, label }: FormInputProps) => {
  return (
    <div id ={elementId}>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} />
    </div>
  )
}