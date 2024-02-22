import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Nav() {
    const [active, setActive] = useState(false)
    AOS.init({
        // Add your AOS options here
    });

    const [isZoomed, setIsZoomed] = useState(false);
    let gotoTop = (secID) => {
        const element = document.getElementById(secID);
        const navbarElement = document.querySelector('.navbar>.container-fluid');

        if (navbarElement) {
            var navHeight = navbarElement.clientHeight;
            // Use navHeight as needed
        }
        console.log(element)
        if (element) {
            const topPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: topPosition - navHeight, behavior: 'smooth' });

        }

    }
    const handleZoom = () => {
        setIsZoomed(!isZoomed);
    };

    gotoTop();
    return (
        <div>

            <section className='overflow-hidden' id='home' >
                <nav class="navbar navbar-expand-lg nav-banner" id=''>
                    <div class="container-fluid">
                        <a class="navbar-brand heading5" href="#" style={{ color: "white" }}><span style={{ color: "#f81f1f ", }}>CRM</span></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="bi bi-list text-white fs-3"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-3 mb-lg-0 text-center ">

                                <li class="nav-item heading5" >
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav'style={{fontSize:"15px"}} onClick={() => gotoTop('Home')} >Home</a>
                                </li>

                                <li class="nav-item heading5 ">
                                    <a class="nav-link active px-3 " aria-current="page" id='name-nav'style={{fontSize:"15px"}} onClick={() => gotoTop('Managment')}>Managment</a>
                                </li>

                                <li class="nav-item heading5">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav'style={{fontSize:"15px"}} onClick={() => gotoTop('Features')} >Features</a>
                                </li>

                                <li class="nav-item heading5">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav'style={{fontSize:"15px"}} onClick={() => gotoTop('CRM Steps')}>CRM_Steps</a>
                                </li>

                                <li class="nav-item heading5">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav'style={{fontSize:"15px"}} onClick={() => gotoTop('CRM selling')}>CRM_Selling</a>
                                </li>
                                <li class="nav-item heading5 border-end">
                                    {/* <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('Contact')}>Contact</a> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    )
}
