import React from 'react'
// import {useEffect, useState} from 'react'
import Card from '../Components/Card'
import hilos from '../hilosJSON/hilosDeAsia.json'
import './stylesEuropa.css'


export default function AsiaPage(){

    return (

<React.Fragment>
        <div className='grid-container'>
        {hilos.map((item, index)=> {
  if (item.direction === 'horizontal'){
  return <Card cardClass='card card--horizontal' linkTo={`/asian/${item.id}`} postId={item.id} key={index}  title={item.title} fondo={item.background} /> }
  else if (item.direction === 'vertical'){
    return <Card cardClass='card card--vertical' linkTo={`/asian/${item.id}`} postId={item.id} key={index} title={item.title} fondo={item.background}/> }
   else {
    return <Card cardClass='card' linkTo={`/asian/${item.id}`}  postId={item.id} title={item.title} key={index} fondo={item.background} /> }
})
} 

    </div>

        </React.Fragment>
    )
}