import { useState } from 'react'
import Header from '../Header/Header'
import './../../styles/index.css'

export default function App () {
  const [theme, setTheme] = useState('light') ;

  return (
    <div id='root' className={theme}>
      <Header theme={theme} changeTheme={setTheme} />
    </div>
  )
}