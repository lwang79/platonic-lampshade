import type { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

export type FormInputProps = {
  name: string
  type: HTMLInputTypeAttribute
  elementId: string
  label: string
  required: boolean
  onChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement>
  // TODO: make this a variable
  value: any
}

export const FormInput = ({ name, type, elementId, label, required, value, onChange }: FormInputProps) => {
  return (
    <div id ={elementId}>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} required={required} value={value} onChange={onChange}/>
    </div>
  )
}