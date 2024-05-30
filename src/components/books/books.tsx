import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { Outlet } from 'react-router-dom'
const BooksContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`
const Logo = styled.img`
  border-radius: 6px;
  width: 60px;
  margin: 26px auto 25px;

`

export default function Books() {
  return (
    <BooksContainer >
      <Logo
        src={logo}
        alt="logo"
      />
      <Outlet />
    </BooksContainer>
  )
}
