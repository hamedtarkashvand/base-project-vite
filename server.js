import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())


const port = 3000

// داده‌های کتاب‌ها (به عنوان مثال)
const books = [
  {id: '1', title: 'Book 1', description: 'Description for Book 1', price: 20},
  {id: '2', title: 'Book 2', description: 'Description for Book 2', price: 25},
  {id: '3', title: 'Book 3', description: 'Description for Book 3', price: 30},
  {id: '4', title: 'Book 6', description: 'Description for Book 4', price: 35},
  // ...
]

// ایجاد یک مسیر برای نمایش لیست کتاب‌ها
app.get('/books', (req, res) => {
  res.json(books)
})

app.get('/books/:id', (req, res) => {
  console.log('/books/:id');
  const {id} = req.params
  const book = books.find(item => item.id === id)
  if (book) return res.json(book)

  res.status(400)
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

