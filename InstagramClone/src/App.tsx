import { useState, useEffect } from 'react'
import Feed from './components/feed'
import Layout from './components/layout'
import Panel from './components/panel'
import StoryBoard from './components/story-board'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Layout theme={theme} toggleTheme={toggleTheme}>
      <div className="space-y-3 lg:mx-0">
        <StoryBoard />
        <Feed />
      </div>
      <Panel />
    </Layout>
  )
}

export default App