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
          <Nav className="ml-auto">
            <NavLink href="/" path={path}>
              Home
            </NavLink>
            <NavLink href="/wish-list" path={path}>
              Wish List
            </NavLink>
            <NavLink href="/team-analysis" path={path}>
              Team Analysis
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {children}
    </div>
  )
}

function NavLink({ children, href, path }) {
  const classes = ['nav-link', 'ml-auto']
  return (
    <Link href={href}>
      {path === href ? (
        <a className={'active ' + classes.join(' ')}>
          <u>{children}</u>
        </a>
      ) : (
        <a className={classes.join(' ')}>{children}</a>
      )}
    </Link>
  )
}
