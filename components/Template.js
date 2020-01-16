import 'bootstrap/scss/bootstrap.scss'

import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Template({ children }) {
  const router = useRouter()
  const path = router.pathname
  return (
    <div className="bg-secondary">
      <div style={{ maxWidth: 1200 }} className="mx-auto bg-white">
        <h2 className="text-center py-3">Poké Hub</h2>
        <Navbar
          bg="light"
          expand="lg"
          sticky="top"
          className="border-top border-bottom"
        >
          <Navbar.Brand href="#home">
            {
              {
                ['/']: 'Poke Hub',
                ['/wish-list']: 'Wish List',
                ['/team-analysis']: 'Team Analysis'
              }[path]
            }
          </Navbar.Brand>
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
