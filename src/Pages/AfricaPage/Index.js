import React, { useState, useEffect }  from 'react'
import Card from '../../Components/Card'
import threads from '../../JsonThreads/africaThread.json'
import Spinner from 'react-bootstrap/Spinner'
import '../stylesContinents.css'


export default function AfricaPage(){
    const [loaded, setloaded] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
        setloaded(true)}, 1000) 
    }, [])

    return (

// ## I map the JSON file so i can get the cards with the title and image display. Depending on the direction the size of the card

        <div className='grid-container'>
                {  loaded ? threads.map((item, index)=> {  
                    if (item.direction === 'horizontal'){
                        return <Card cardClass='card card--horizontal' linkTo={`/afrika/${item.id}`} postId={item.id} key={index}  title={item.title} fondo={item.background} /> }
                    else if (item.direction === 'vertical'){
                        return <Card cardClass='card card--vertical' linkTo={`/afrika/${item.id}`} postId={item.id} key={index} title={item.title} fondo={item.background}/> }
                    else {
                        return <Card cardClass='card' linkTo={`/afrika/${item.id}`}  postId={item.id} title={item.title} key={index} fondo={item.background} /> }
                }) : <div className='loading' ><Spinner  animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner> </div> } 
        </div>
    
    )
}