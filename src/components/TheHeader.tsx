import { NavLink } from 'react-router-dom'

export default function TheHeader() {
  const navigation = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/leetcode', label: 'Leetcode' }
  ]
  const activeStyle = {
    color: 'red',
    textDecoration: 'underline',
    fontWeight: 'bold',
    fontSize: '1.2rem'
  }

  return (
    <header className="flex gap-4 p-4">
      {navigation.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          {label}
        </NavLink>
      ))}
    </header>
  )
}
