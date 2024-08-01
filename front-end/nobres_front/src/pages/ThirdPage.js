import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'


export default function ThirdPage() {
    
    return (

        <div className="container-fluid" id='section3'>
            <div className="container-fluid text-center mt-5 p-4" style={{ minHeight: '100vh' }}>
                <h1 style={{ color: 'white', fontSize: '52px'}} id="fontNob">FAÇA SUA RESERVA</h1>

                <div className="d-flex justify-content-center align-items-center w-100">
                    <div className="container d-flex flex-column align-items-center justify-content-center w-50">
                        <form className="w-100">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-md-8 mb-4 mt-2  d-flex flex-column">
                                <label htmlFor="input1" className="form-label align-self-start" style={{fontSize: '24px', fontWeight: 'bold', color: '#4A1717'}}>NOME:</label>
                                    <input type="text" className="form-control form-control-lg border-black rounded-0" style={{backgroundColor: '#C9C8C8', opacity: '0.42', borderColor: 'black', }}id="input1" />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-8 mb-4  d-flex flex-column">
                                    <label htmlFor="input2" className="form-label align-self-start" style={{fontSize: '24px', fontWeight: 'bold', color: '#4A1717'}}>EMAIL:</label>
                                    <input type="text" className="form-control form-control-lg border-black rounded-0" style={{backgroundColor: '#C9C8C8', opacity: '0.42', borderColor: 'black', }} id="input2" />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-8 mb-4  d-flex flex-column">
                                    <label htmlFor="input3" className="form-label align-self-start" style={{fontSize: '24px', fontWeight: 'bold', color: '#4A1717'}}>Nº DE TELEFONE</label>
                                    <input type="text" className="form-control form-control-lg border-black rounded-0" style={{backgroundColor: '#C9C8C8', opacity: '0.42', borderColor: 'black', }} id="input3" />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-8 mb-4  d-flex flex-column">
                                    <label htmlFor="input4" className="form-label align-self-start" style={{fontSize: '24px', fontWeight: 'bold', color: '#4A1717'}}>Nº DE PESSOAS</label>
                                    <input type="text" className="form-control form-control-lg border-black rounded-0" style={{backgroundColor: '#C9C8C8', opacity: '0.42', borderColor: 'black', }} id="input4" />
                                </div>
                            </div>
                            <div className="row justify-content-center" >
                                <div className="col-md-5 mb-4  d-flex flex-column">
                                <label htmlFor="select" className="form-label align-self-start" style={{fontSize: '24px', fontWeight: 'bold', color: '#4A1717'}}>HORARIO</label>
                                    <select className="form-select mt-3 form-control form-control-lg border-black rounded-0" aria-label="Default select example" style={{backgroundColor: '#C9C8C8', opacity: '0.42', borderColor: 'black', }} id='select'>
                                        <option value="">-</option>
                                        <option value="1">A partir das 18h</option>
                                        <option value="2">A partir das 19h</option>
                                        <option value="3">A partir das 20h</option>
                                        <option value="3">A partir das 21h</option>
                                        <option value="3">A partir das 22h</option>
                                    </select>
                                </div>
                            </div >
                            <button type="submit" className="btn mt-3 shadow" style={{backgroundColor: '#FF5F00', fontSize: '24px', fontWeight: 'bold', color: 'white'}} >ENVIAR</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    );

}
