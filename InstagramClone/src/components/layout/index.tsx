import Header from './header'
import Main from './main'

interface IProps {
  children: React.ReactNode
  theme: string
  toggleTheme: () => void
}

const Layout = ({ children, theme, toggleTheme }: IProps) => {
  return (
    <div className="min-h-screen space-y-5 bg-neutral-100 dark:bg-black">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Main>{children}</Main>
    </div>
  )
}

export default Layout