import React from 'react';
import './Style.css';
import whatsapp from '../img/whatsapp.png';
import instagram from '../img/instagram.png';
import LogoNobres from '../img/nobreslogo.png';
import linkedin from '../img/linkedin.png';

export default function FourthPage() {
  return (
    <div className="container-fluid p-4 mt-1 d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: "#343a40" }} id='section4'>

      <div className='d-flex flex-lg-row flex-column align-items-center justify-content-center'>
        <div className='text-center mx-3'>
          <h3 className="mt-2" id="fontNob" style={{ color: "white" }}>
            FALE CONOSCO
          </h3>
        </div>

        <div className="d-flex align-items-center mx-2">
          <img src={instagram} width={"64px"} alt="instagram" className="mb-2" style={{ marginRight: '10px' }} />
          <h3 className="mt-2 ml-2" style={{ color: 'white' }}>NOBRESGRILL</h3>
        </div>

        <div className="d-flex align-items-center mx-2">
          <img src={whatsapp} width={"64px"} alt="whatsapp" className="mb-2" style={{ marginRight: '10px' }} />
          <h3 className="mt-2 ml-2" style={{ color: 'white' }}>(88) 9977-4801</h3>
        </div>

        <div className="mt-3 mx-3">
          <img src={LogoNobres} width={"110px"} alt="Logo Nobres" />
        </div>
      </div>

      <div className="d-flex align-items-center mx-2 mt-3">
        <img src={linkedin} width={"32px"} alt="linkedin" className="mb-2" style={{ marginRight: '10px' }} />
        <h3 className="mt-2 ml-2" style={{ color: 'white', fontSize: '16px' }}>Tatiely Nobre</h3>
      </div>
    </div>
  );
}
