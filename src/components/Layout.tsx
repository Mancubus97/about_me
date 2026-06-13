import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.tsx'

export default function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}