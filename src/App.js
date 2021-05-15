import { useState, useEffect } from 'react'

import Header from './Header'

import './App.css';
import Book from './Book'

function App() {


  const [book, setBook] = useState('')

  const [dataBooks, setDataBooks] = useState()

  useEffect(() => {

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
      .then(res => res.json())
      .then(data => setDataBooks(data.items))
      .catch(error => console.log(error))
    document.body.style = 'background: black;';


    return () => {
      setDataBooks()
    }

  }, [book])

  console.log('DATA', dataBooks)

  return (
    <div className="App container">


      <Header />



      <input type="text" value={book} onChange={(e) => setBook(e.target.value)} />
      <br />


      { dataBooks === undefined ? null :
        <Book listBook={dataBooks} />
      }


    </div>
  );
}

export default App;



