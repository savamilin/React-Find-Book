import React from 'react'
import styled from 'styled-components'

import { Accordion, Button, Card } from 'react-bootstrap'

import noImg from './photo/nophto.jpg'

const BookDiv = styled.div`
   background-color:white;
   width: 1200px;
   margin: 20px auto;
   

`

const BookCard = styled.div`
background-color:#210f00; 

.info{
  display:flex;

}

.photo{
  padding:100px;
  
  
}

.books-info{
  color:white;
  
}

.books-info p span{
  font-size:30px;
  background-color:#33231b;
  padding: 5px 10px 5px 10px;
  border-radius:5px;

}

.description h1{
  color:white;
}

.description p{
  color:#fdffdb;
}

.btn{
  padding:10px 20px;
  margin:10px 0 10px 30px;
}

`

// const noImgAve = styled.noImg`
// width:100px;


// `

function Book({ listBook }) {

  console.log(listBook)

  console.log(noImg)
  return (
    <BookDiv>

      {
        listBook.map((book, index) => {

          return (
            <Accordion key={index} defaultActiveKey={book.id}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={book.id}>
                  {book.volumeInfo.title}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={book.id}>

                  <BookCard>

                    <div className="info">

                      <div className="photo">
                        <img src={book.volumeInfo.readingModes.image === false ? `${noImg}` : book.volumeInfo.imageLinks.smallThumbnail} alt="" />
                      </div>

                      <div className="books-info">
                        <p>
                          Categories:  {book.volumeInfo.categories}
                        </p>
                        <p>
                          Author: {book.volumeInfo.authors}
                        </p>
                        <p>
                          Publisher:
                        </p>
                        <p>
                          Publisher Date: {book.volumeInfo.publishedDate}
                        </p>
                        <p>
                          Page Conut: {book.volumeInfo.pageCount}
                        </p>
                        <p>

                          Avarage Rating: <span> {book.volumeInfo.averageRating === undefined ? "no rating" : book.volumeInfo.averageRating}</span>
                        </p>


                      </div>

                    </div>

                    <div className="description">

                      <h1>Book Description</h1>

                      <p>
                        {book.volumeInfo.description}
                      </p>

                    </div>


                    <Button className="btn" variant="primary">Buy</Button>



                  </BookCard>



                </Accordion.Collapse>
              </Card>

            </Accordion>


          )

        })
      }


    </BookDiv>
  )
}

export default Book

// {book.volumeInfo.readingModes.image === false ? 'photo/canstockphoto11465811(1).jpg' : book.volumeInfo.imageLinks.smallThumbnail}