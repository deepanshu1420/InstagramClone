interface IProps {
  children: React.ReactNode
  blacked?: boolean
}

const Button = ({ children, blacked = false }: IProps) => {
  return (
    <button className={`text-xs font-semibold ${blacked ? 'text-black dark:text-white' : 'text-blue-500 dark:text-blue-400'}`}>
      {children}
    </button>
  )
}

export default Button