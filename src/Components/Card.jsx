import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'


export default function Card(props){

    return(
            <div className={props.cardClass} style={{border: "none", borderRadius:"10%"}} >
                <div 
                className='card__image' 
                style={{background: `linear-gradient(to bottom, rgba(5, 16, 17, .5),rgba(255,255,255,0), rgba(255,255,255,0)) , url("${props.fondo}")` , backgroundSize: 'cover', backgroundRepeat:'no-repeat' , backgroundPosition:'center center'}}>
                    <h1  className='card-title'>{props.title}</h1>
                    <Link to={props.linkTo}>
                        <Button style={{background:"#1e212d", border: "none"}}>Leer</Button>
                    </Link>
                </div>
            </div>

    )
}