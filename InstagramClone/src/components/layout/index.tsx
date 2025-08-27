import Header from './header'
import Main from './main'
import Footer from './footer'
import GitHubLink from './GitHubLink'

interface IProps {
  children: React.ReactNode
  theme: string
  toggleTheme: () => void
}

const Layout = ({ children, theme, toggleTheme }: IProps) => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-neutral-100 dark:bg-black">
      <div>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Main>{children}</Main>
      </div>
      <Footer />
      <GitHubLink />
    </div>
  )
}

export default Layout