import React from 'react'
import {useHistory} from 'react-router-dom'
import ferDuclos from '../../images/ferDuclos.jpeg'
import {Button, Image} from 'react-bootstrap'
import random from 'random'
import Logo from '../../images/logo.png'
import './styleLanding.css'


export default function LandingPage(){

const history = useHistory()


const handleClick = () =>{
    const randomId = random.int((0), (10))
    const randomCont = random.int((0), (3))
    var continentArray = ["afrika", "amerika", "asi", "europ"]
    history.push(`/${continentArray[randomCont]}/${randomId}`)
    
}

    return (
            <React.Fragment>
            <div className='landing-container'>
            <div className='landing-text'>
            <img alt='logo' src={`${Logo}`} className='landing-title'></img>
                {/* <h1 className='landing-title'>Periodistán </h1>  */}
                <h5 className='landing-desc'>Acá vas a poder encontrar la mayoría de los hilos de Fernando Duclos (alias Periodistán)</h5>
                <Button
                className="mb-5"
                size="lg"  
                style={{background:"#1e212d", border: "none"}} 
                onClick={handleClick}>
                    Hilo Random
                </Button>
                </div>
            </div>
            <div className='about-container'>
            <div className='landing-image'>
                <Image className='main-image' src={ferDuclos} alt='ferDuclos'/> 
            </div>
            <div className='about-text'>
                
<h1><str>Fernando Duclos</str></h1>
<h4>PERIODISTA</h4>
<p>Cuando era un adolescente, recorrió el continente latinoamericano, desde Buenos Aires hasta Nicaragua. Más adelante, viajó de Etiopía a Ciudad del Cabo. Desde hace un año recorre la ruta de la seda desde Barcelona a Beijing, atravesando las estepas, montañas y praderas en las que los grandes imperios de la humanidad nacieron y con el tiempo, indefectiblemente, murieron. En sus hilos de Twitter, bajo el seudónimo @periodistan_, cuenta la vida cotidiana de quienes habitan una región atravesada por la guerra. </p>
            </div>
            </div>
            </React.Fragment>
    )
}