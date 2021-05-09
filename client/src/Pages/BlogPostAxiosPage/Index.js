
import  React  from "react";
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'
import Post from '../../Components/Post'
import Pagination from 'react-bootstrap/Pagination'
import './stylePost.css'


export default function BlogPostAxios(){

  const [thread0, setThread0] = useState([""])
  const [thread1, setThread1] = useState([""])
  const [thread2, setThread2] = useState([""])
  const [thread3, setThread3] = useState([""])
  const [thread4, setThread4] = useState([""])
  
 
  const [currentPage, setCurrentPage] = useState(1)
  const [numOfPosts, setNumOfPosts] = useState('')

  const history = useHistory()
  const currentUrl = history.location.pathname

  



  useEffect(()=>{
    // First i store the post id from the URL into a variable.
    const postId = parseInt(currentUrl.replace(/[^0-9]/g, ""))
    //Then I fetch into my database querying the Posts by ID
  if(currentUrl.slice(1,4) === "afr"){Axios.get(`http://localhost:3001/api/africa/${postId}`).then((response)=>{ 
      //Having the response i take the text part and the images and make a new Array to later turn into a full array that i will Map
      setThread0([response.data[0].text_0, ...response.data[0].img_0.split(',')])
      setThread1([response.data[0].text_1, ...response.data[0].img_1.split(',')])
      setThread2([response.data[0].text_2, ...response.data[0].img_2.split(',')])
      setThread3([response.data[0].text_3, ...response.data[0].img_3.split(',')])
      //If the number of posts is 5 i will also retrieve that info. All posts have 4 or 5 pages
      if(response.data[0].posts === 5){setThread4([response.data[0].text_4, ...response.data[0].img_4.split(',')])}
      setNumOfPosts(response.data[0].posts)})}
    else{
      Axios.get(`http://localhost:3001/api/america/${postId}`).then((response)=>{ 
      //Having the response i take the text part and the images and make a new Array to later turn into a full array that i will Map
      setThread0([response.data[0].text_0, ...response.data[0].img_0.split(',')])
      setThread1([response.data[0].text_1, ...response.data[0].img_1.split(',')])
      setThread2([response.data[0].text_2, ...response.data[0].img_2.split(',')])
      setThread3([response.data[0].text_3, ...response.data[0].img_3.split(',')])
      //If the number of posts is 5 i will also retrieve that info. All posts have 4 or 5 pages
      if(response.data[0].posts === 5){setThread4([response.data[0].text_4, ...response.data[0].img_4.split(',')])}
      setNumOfPosts(response.data[0].posts)}
      )}
  }, [currentUrl])  

// ## Number of pages the Pagination will display. As i only want 1 post per page it is simple math.
const pageNumbers = []
for (let i = 1; i <= numOfPosts / 1; i++){
    pageNumbers.push(i)
} 

// Get a new Array with every thread wich makes it easier to Map
const allThreads = [thread0, thread1, thread2, thread3, thread4]

// ## Sets the current page using the Pagination.Item ID, wich is the same number as the page.
function handleClick(e){
  setCurrentPage(Number(e.target.id))
}
  return (
      <div className='blogpost-container'>
      {/* // ## Using the CurrentPage I choose wich of the posts i want to show */}

            { <Post  
                  cardText={allThreads[currentPage-1][0]}
                  cardImage1={allThreads[currentPage-1][1]}
                  cardImage2={allThreads[currentPage-1][2]}
                  cardImage3={allThreads[currentPage-1][3]}
                  cardImage4={allThreads[currentPage-1][4]}
                  cardImage5={allThreads[currentPage-1][5]} 
                  />   } 

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
  