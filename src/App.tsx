import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import './App.css'
import Books from './components/books/books'
import Admin from './components/admin/admin'
import Nav from './components/common/nav'
import BooksList from './components/books/books-list'
import Book from './components/books/book'

const AppContainer = styled.div`
  margin: 60px auto;
  width: 400px;
`
const Content = styled.div`
  background-color: white;
  border-radius: 6px;
  padding: 28px;
  height: 100%;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppContainer>
        <Router>
          <Content>
            <Nav />
            <Routes>
              <Route path="/" element={<Books />} >
                <Route path='/' element={<BooksList/>} />
                <Route path=':id' element={<Book/>} />

              </Route>
              <Route path="/admin" element={<Admin />} /> 
              <Route path='*' element={<h2>oops! not found 404</h2>} />
            </Routes>
          </Content>
        </Router>
      </AppContainer>
    </>
  )
}
export default App
