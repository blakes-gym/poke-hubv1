import 'bootstrap/scss/bootstrap.scss'

import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Template({ children }) {
  const router = useRouter()
  const path = router.pathname
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink href="/team-analysis" path={path}>
              Team Analysis
            </NavLink>
            <NavLink href="/" path={path}>
              Home
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {children}
    </div>
  )
}

function NavLink({ children, href, path }) {
  console.log(path, href)
  return (
    <Link href={href}>
      {path === href ? (
        <a className="active nav-link">
          <u>{children}</u>
        </a>
      ) : (
        <a className="nav-link">{children}</a>
      )}
    </Link>
  )
}
