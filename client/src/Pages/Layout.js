import React from 'react'
import {Container} from 'react-bootstrap'
import './styleLayout.css'

export default function Layout(props){
 return(
     <div className='background-img'>
    <Container>
        {props.children}
    </Container>
    </div>
 )
}