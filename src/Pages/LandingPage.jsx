import React from 'react'
import ferDuclos from '../images/ferDuclos.png'
import {Button, Image} from 'react-bootstrap'
import './styleLanding.css'


export default function LandingPage(){
    return (
        <div className='landing-container'>
            <div className='landing-text'>
                <h1 >Bienvenido a Periodistán </h1> 
                <h5 >Aquí vas a poder encontrar la mayoría de los hilos de Fernando Duclos (alias Periodistán)</h5>
                <Button >
                    Hilo destacado
                </Button>
            </div>
            <div className='landing-image'>
                <Image className='main-image' src={ferDuclos} alt='ferDuclos'/> 
            </div>
        </div>
    )
}