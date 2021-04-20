import React from 'react'
import {useEffect, useState} from 'react'
import Card from '../Components/Card'
import hilos from '../hilosJSON/hilosDeEuropa.json'
import './stylesEuropa.css'


export default function EuropaPage(){


    return (

        <div className='grid-container'>
        {hilos.map((item, index)=> {
  if (item.direction === 'horizontal'){
  return <Card cardClass='card card--horizontal' key={item.id} id={index} title={item.title} fondo={item.background} /> }
  else if (item.direction === 'vertical'){
    return <Card cardClass='card card--vertical' title={item.title} fondo={item.background}/> }
   else {
    return <Card cardClass='card' title={item.title} fondo={item.background} /> }
})
} 
        </div>

    )
}