import React from 'react'
import '../styles/Style.css'
// import balao from '../img/balao.png'
import horarios from '../img/horarios.png'
import Header from '../components/Header'

export default function FirstPage() {

  return (
    <div>
        <Header/>
        <div className='container-fluid' style={{minHeight: '100vh'}}>
            <div className='row mt-5 p-4'>
                <div className='col mt-5 p-5'>
                    <h1 className=' display-5 mb-5' style={{color: 'white'}} id='fontNob'>QUEM SOMOS NÓS?</h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Etiam eget ligula eu lectus lobortis condimentum.<br/> Aliquam nonummy auctor massa. Pellentesque habitant morbi<br/> tristique senectus et netus et malesuada fames ac turpis egestas.<br/> Nulla at risus. Quisque purus magna, auctor et<br/> sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing</h4>
                </div>
                <div className='col p-5  d-flex justify-content-center'>
                    <img src={horarios}  width={'600px'} style={{minWidth: '370px', borderTopRightRadius: '150px', borderBottomLeftRadius: '150px'}} alt='balao'></img>
                </div>
            </div>
        </div>
    </div>
  )
}
