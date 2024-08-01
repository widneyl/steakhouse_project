import React from 'react'
import c1 from '../img/cardapio/c1.jpg'
import c2 from '../img/cardapio/c2.jpg'
import c3 from '../img/cardapio/c3.jpg'
import c4 from '../img/cardapio/c4.jpg'

export default function SecondPage() {

    const color = {
        color: 'white'
    };


    return (
        <div className='container-fluid' id='section2' style={{ minHeight: '100vh', backgroundColor: '#343a40' }}>
            <div className='row'>
                <div className='col text-center'>
                    <h1 className='display-5 mt-5' style={color} id='fontNob'>CONHEÇA NOSSO CARDÁPIO</h1>
                </div>
                <div className='d-flex justify-content-center flex-wrap'>
                    <img width={'400px'} src={c1} alt='cardapio' className='m-2 rounded-3'></img>
                    <img width={'400px'} src={c2} alt='cardapio' className='m-2 rounded-3'></img>
                    <img width={'400px'} src={c3} alt='cardapio' className='m-2 rounded-3'></img>
                    <img width={'400px'} src={c4} alt='cardapio' className='m-2 rounded-3'></img>
                </div>
            </div>
        </div>

    )
}
