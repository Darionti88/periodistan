import  React  from "react";
import {useState, useEffect} from 'react'
import Post from '../Components/Post'
import hilosEuropa from '../hilosJSON/hilosDeEuropa.json'
import hilosAsia from '../hilosJSON/hilosDeAsia.json'
import {useHistory} from 'react-router-dom'
import Pagination from '../Components/Pagination'
import './stylePost.css'


export default function BlogPost(props){
  const [post, setPost] = useState('')
  const [load, setLoad] = useState(false)
  const [hilos, setHilo] = useState([{
    id: "",
    title: "",
    background: "",
    direction: "",
    card1: [
          {
            text: "",
            images: [""] 
          }
    ]
  }])
  
    
  const history = useHistory()
  const currentUrl = history.location.pathname



useEffect(()=>{
const continent = currentUrl.slice(1, 6)
  if (continent === "europ"){
  setHilo(hilosEuropa)
} else {
  setHilo(hilosAsia)
}
setPost(currentUrl.slice(-1))
setLoad(true)
}, [currentUrl] )


  return (
      <div className='blogpost-container'>
            {load ? <Post  
            cardText={hilos[post].card1[0].text}
            cardImage1='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fasiasociety.org%2Ffiles%2F130709_smmerdssrt_07.jpg&f=1&nofb=1'
            cardImage2='https://1.bp.blogspot.com/-yuLb4278_Xo/Vkh0KLdhzgI/AAAAAAABHcE/QjdTB60cTTU/s1600/TANG%2BYUAN%2BASIAN%2BDESSERTS-16.JPG'
            cardImage3='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fasiasociety.org%2Ffiles%2F130709_smmerdssrt_07.jpg&f=1&nofb=1'
            cardImage4='https://1.bp.blogspot.com/-yuLb4278_Xo/Vkh0KLdhzgI/AAAAAAABHcE/QjdTB60cTTU/s1600/TANG%2BYUAN%2BASIAN%2BDESSERTS-16.JPG'
            cardImage5='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fasiasociety.org%2Ffiles%2F130709_smmerdssrt_07.jpg&f=1&nofb=1' 
            /> : null }
          <Pagination />
      </div>
  )
}