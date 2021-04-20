import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'




export default function Card(props){

    return(
        <React.Fragment>
            <div className={props.cardClass} >
                <div className='card__image' style={{ backgroundImage: `url(${props.fondo})` , backgroundSize: 'cover', backgroundRepeat:'no-repeat' , backgroundPosition:'center center'}}>
                    <h1 className='card-title'>{props.title}</h1>
                    <Link to={props.linkTo}>
                        <Button>Leer</Button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}