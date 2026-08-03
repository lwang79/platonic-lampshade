export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset'
  children: string
  onClick?: () => void
}

export const Button = ({ type="button", onClick, children }: ButtonProps) => {
  return (
    <div>
      <button type={type} onClick={onClick}>{children}</button>
    </div>
  )
}