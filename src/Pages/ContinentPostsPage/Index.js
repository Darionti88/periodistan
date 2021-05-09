import React, { useState, useEffect }  from 'react'
import Card from '../../Components/Card'
import europa from '../../JsonThreads/europaThread.json'
import asia from '../../JsonThreads/asiaThread.json'
import {useLocation} from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import '../stylesContinents.css'


export default function EuropaPage(){

const [thread, setThread] = useState([])
const location = useLocation().pathname

const [loaded, setloaded] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
        setloaded(true)}, 1000) 
    }, [])


useEffect(()=>{
    const continent = location.slice(1, location.length)
    if (continent === 'europa'){ setThread(europa)}
    else{setThread(asia)}
    setTimeout(()=>{
        setloaded(true)}, 1000) 
}, [thread, location])
    

// ## I map the JSON file so i can get the cards with the title and image display. Depending on the direction the size of the card
    return (
        <div className='grid-container'>
                { !loaded ? <div className='loading' >
                                <Spinner  animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner> 
                            </div> : thread.map((item, index)=> {
                    if (item.direction === 'horizontal'){
                        return <Card cardClass='card card--horizontal' linkTo={`${location.slice(0, location.length - 1)}/${item.id}`} postId={item.id} key={index}  title={item.title} fondo={item.background} /> }
                    else if (item.direction === 'vertical'){
                        return <Card cardClass='card card--vertical' linkTo={`${location.slice(0, location.length - 1)}/${item.id}`} postId={item.id} key={index} title={item.title} fondo={item.background}/> }
                    else {
                        return <Card cardClass='card' linkTo={`${location.slice(0, location.length - 1)}/${item.id}`}  postId={item.id} title={item.title} key={index} fondo={item.background} /> }
                }) } 
        </div>
    
    )
}