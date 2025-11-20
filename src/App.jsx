import { useState } from 'react'
import Admin_page from'./admin-page/main.jsx'
import Staff_manage from './StaffManage/main.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
      <Staff_manage/>
  )
}

export default App