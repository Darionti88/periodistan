import React  from 'react'
import Card from '../../Components/Card'
import threads from '../../JsonThreads/americaThread.json'
import '../stylesContinents.css'


export default function AmericaPage(){
// ## I map the JSON file so i can get the cards with the title and image display. Depending on the direction the size of the card
    return (
        <div className='grid-container'>
                {  threads.map((item, index)=> {
                    if (item.direction === 'horizontal'){
                        return <Card cardClass='card card--horizontal' linkTo={`/amerika/${item.id}`} postId={item.id} key={index}  title={item.title} fondo={item.background} /> }
                    else if (item.direction === 'vertical'){
                        return <Card cardClass='card card--vertical' linkTo={`/amerika/${item.id}`} postId={item.id} key={index} title={item.title} fondo={item.background}/> }
                    else {
                        return <Card cardClass='card' linkTo={`/amerika/${item.id}`}  postId={item.id} title={item.title} key={index} fondo={item.background} /> }
                })  } 
        </div>
    
    )
}