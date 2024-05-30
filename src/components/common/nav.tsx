import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
const NavStyle = styled.nav`
  margin-bottom: 10px;
  a {
    padding: 8px 16px;
    text-decoration: unset;
    border-radius: 5px;
    font-weight: 500px;
    &.active {
     font-weight:bolder;
     border: 2px solid aqua;
    }
  }
`
export default function Nav() {
  return (
    <NavStyle>
      <NavLink  to="/" >Books</NavLink>
      <NavLink to="/admin" > Admin </NavLink>
    </NavStyle>
  )
}
