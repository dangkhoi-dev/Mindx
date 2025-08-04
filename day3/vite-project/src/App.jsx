import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './components/Box-Components/Box'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="outer">
      <Box name="Nguyễn Văn Tài" study="Code Intensive" comment="Trở thành master coding là ước mơ của tôi"/>
      <Box name="Trịnh Mẫn Nhi" study="Web Fullstack" comment="Học nữa, học mãi"/>
      <Box name="Vũ Long Môn" study="Code for Everyone" comment="Quyết tâm thành thạo Reactjs"/>
      </div>
  )
}

export default App
