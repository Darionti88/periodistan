
import  React  from "react";
import {useState, useEffect} from 'react'
import Post from '../../Components/Post'
import europaThread from '../../JsonThreads/europaThread.json'
import asiaThread from '../../JsonThreads/asiaThread.json'
import {useHistory} from 'react-router-dom'
import Pagination from 'react-bootstrap/Pagination'
import './stylePost.css'


export default function BlogPost(){

  // ## Here i store, as a separate array, the part of the Json file where i have the info i need
  const [slicedThread, setSlicedThread] = useState([
    {
      text: "",
      images: [""] 
    }
])
  const [currentPage, setCurrentPage] = useState(1)


  const [totalPosts, setTotalPosts] = useState("")
  
   // ## This part of the URL will help the program choose wich JSON file it will store 
  const history = useHistory()
  const currentUrl = history.location.pathname
  console.log(currentUrl.length)

useEffect(() => {
  // ## My linkTo always have 5 letter so it is always the same part 
  const continent = currentUrl.slice(1, 6)
  if (continent === "europ") {
  // ## How many Posts does the thread have
    setTotalPosts(()=>{
      if(currentUrl.length === 8) {
        return (europaThread[currentUrl.slice(-1)].cards.length)}
        else{
          return (europaThread[currentUrl.slice(-2)].cards.length)
        }})
    // ## Here I get the array where I have the actual Info
    setSlicedThread(()=>{
      if(currentUrl.length === 8){
        return (europaThread[currentUrl.slice(-1)].cards.slice(0, europaThread[currentUrl.slice(-1)].cards.length))}
        else {
          return (europaThread[currentUrl.slice(-2)].cards.slice(0, europaThread[currentUrl.slice(-2)].cards.length))
        }
      })
  } else if(continent === "asiaa" ) {
    setTotalPosts(()=>{
      if(currentUrl.length === 8) {
        return (asiaThread[currentUrl.slice(-1)].cards.length)}
        else{
          return (asiaThread[currentUrl.slice(-2)].cards.length)
        }})
    setSlicedThread(()=>{
      if(currentUrl.length === 8){
        return (asiaThread[currentUrl.slice(-1)].cards.slice(0, asiaThread[currentUrl.slice(-1)].cards.length))}
        else {
          return (asiaThread[currentUrl.slice(-2)].cards.slice(0, asiaThread[currentUrl.slice(-2)].cards.length))
        }
      })
  }
}, [currentUrl])


// ## Number of pages the Pagination will display. As i only want 1 post per page it is simple math.
const pageNumbers = []
for (let i = 1; i <= totalPosts / 1; i++){
    pageNumbers.push(i)
}

// ## Sets the current page using the Pagination.Item ID, wich is the same number as the page.
function handleClick(e){
      setCurrentPage(Number(e.target.id))
}

  return (
      <div className='blogpost-container'>
      {/* // ## Using the CurrentPage I choose wich of the posts i want to show */}
            {  slicedThread.slice(currentPage - 1, currentPage).map((item, index)=>{
                    return (<Post  
                  key={index}
                  cardText={item.text}
                  cardImage1={item.images[0]}
                  cardImage2={item.images[1]}
                  cardImage3={item.images[2]}
                  cardImage4={item.images[3]}
                  cardImage5={item.images[4]} 
                  /> )})  } 
          <Pagination>
          { pageNumbers.map(number => 
            ( <Pagination.Item 
                key={number} 
                id={number}
                onClick={handleClick}
                >{number}</Pagination.Item> )) 
                
          }
          </Pagination>

      </div>
  )
}