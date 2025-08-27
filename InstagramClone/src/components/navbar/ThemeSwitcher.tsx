import { SunIcon, MoonIcon } from '@heroicons/react/solid'

interface IProps {
  theme: string
  toggleTheme: () => void
}

const ThemeSwitcher = ({ theme, toggleTheme }: IProps) => {
  return (
    <button onClick={toggleTheme} className="cursor-pointer dark:text-white">
      {theme === 'dark' ? (
        <SunIcon className="w-7 h-7" />
      ) : (
        <MoonIcon className="w-7 h-7" />
      )}
    </button>
  )
}

export default ThemeSwitcher