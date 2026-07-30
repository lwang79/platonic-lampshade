export type ButtonProps = {
  type: 'button' | 'submit' | 'reset'
  label: string
  elementId: string
  onClick?: () => void
}

export const Button = ({ type, label, elementId, onClick }: ButtonProps) => {
  return (
    <div id ={elementId}>
      <button type={type} onClick={onClick}>{label}</button>
    </div>
  )
}