import { NavLink } from "react-router-dom"

const Navbar = () => {
  //create navbar
  const url = [
    { path: '/', name: 'Layout Effect' },
    { path: '/UseCallback', name: 'UseCallback' },
    { path: '/UseMemo', name: 'UseMemo' },
    { path: '/memo', name: 'memo' },
  ]

  return (
    <>
      <nav className="navbar">
        {url.map((item) => (
          <NavLink to={item.path} key={item.path} className="navbar-item" >
            {item.name}
          </NavLink>
        ))}
      </nav >
    </>
  )
}

export default Navbar