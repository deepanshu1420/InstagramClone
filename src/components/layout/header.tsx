import Navbar from '../navbar'

interface IProps {
  theme: string
  toggleTheme: () => void
}

const Header = ({ theme, toggleTheme }: IProps) => {
  return (
    <header className="bg-white dark:bg-black border-[1px] border-gray-300 dark:border-gray-700 sticky top-0 z-20">
      <div className="max-w-5xl mx-auto">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  )
}

export default Header