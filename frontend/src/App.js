import { useState, useEffect } from 'react';
import Home from './components/Home';
import Layout from './components/Layout/Layout';
import MyAppContext from './utils/MyAppContext';


function App() {
  const [theme, setTheme] = useState("")


  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme("dark")
      document.documentElement.classList.add('dark')
    } else {
      setTheme("light")
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <MyAppContext.Provider value={{theme: theme, setTheme: setTheme}}>
      <Layout>
        <Home />
      </Layout>
    </MyAppContext.Provider>
  );
}

export default App;
