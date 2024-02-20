import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import shape1 from '../assets/images/shape2.png'
import shape3 from '../assets/images/shape3.png'
import icon1 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'
import icon3 from '../assets/images/icon3.png'
import img2 from '../assets/images/img2.jpg'
import img5 from '../assets/images/img5.png'
import img4 from '../assets/images/img4.png'
import Sales from './Sales';
export default function About() {
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

            <section>
                <div class="banner-area-three">
                    <div class="d-table">
                        <div class="d-table-cell">
                            <div class="container">
                                <div class="banner-content">

                                    <h1 className='heading5'>Trust Your Sales By Trusted CRM</h1>
                                    <p className='primary-title heading4 text-center mt-4' style={{ color: "white", fontSize: "19px" }}>Jilva CRM empowers a global network of over 150,000 businesses in 180 countries to engage with customers and grow their revenue</p>

                                    <div class="banner-btn">
                                        <a href="#" class="default-btn heading6" style={{ textDecoration: "none" }}>
                                            Try It Free
                                            <i class="bx bx-right-arrow-alt"></i>
                                            <span></span>
                                        </a>

                                        <div class="shape1">
                                            <img src={shape1} alt="image" />
                                        </div>
                                        <div class="creative-shape">
                                            <img src={shape3} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className='section-title'>
                    <div className='text-center heading6'>
                        <span className='mt-4'>CRM Management</span>
                    </div>
                    <h4 className='heading10 mt-4 text-center' style={{ color: "black" }}>Powerful Better Together</h4>
                    <p className='primary-title heading4 text-center mt-4' >CRM offers a full stack of software for marketing sales and customer service with a completely free CRM at its core.</p>

                    <div className="container top-management-slider">
                        <div className="row">
                            <div className="col-md-4 ">
                                <div className='card custom-card cardish'>
                                    <div className='w-50 mx-auto wrap-icon p-3 rounded-3 mb-2 top-management-item top-management-slider'>
                                        <img
                                            src={icon1}
                                            // style={{backgroundColor:"red"}}
                                            className="align-items-center img-fluid w-50"
                                            alt=""
                                        />
                                    </div>
                                <div className='text-center'>
                                <h2 className='heading6' style={{ fontSize: "30px" }}>Marketing Hub</h2>
                                </div>
                                    <p className='mb-2 heading6'>Marketing software to help  grow traffic</p>
                                    <p className='heading4'>Marketing Automation</p>
                                    <p className='heading4'>Lead Generation</p>
                                    <p className='heading4'>Analytics</p>
                                        <div className='btn1' >
                                            <button className='btn1 px-4 py-2 heading3'>Get Free CRM <i class="bi bi-arrow-right"></i></button>
                                        </div>
                                </div>
                            </div>

                            <div className="col-md-4 ">
                                <div className='card custom-card cardish'>
                                    <div className='w-50 mx-auto wrap-icon p-3 rounded-3 mb-1 top-management-item top-management-slider'>
                                        <img
                                            src={icon2}
                                            // style={{backgroundColor:"red"}}
                                            className="align-items-center img-fluid w-50"
                                            alt=""
                                        />
                                    </div>
                                    <div className='text-center'>
                                    <h2 className='heading6' style={{ fontSize: "27px" }}>CMS Hub</h2>
                                    </div>
                                    <p className='mb-1 heading6'>Content management software's flexible</p>
                                    <p className='heading4 '>  Website Themes</p>
                                    <p className='heading4'>SEO Recommendations</p>
                                    <p className='heading4' >Drag-and-Drop Editor </p><div className='btn1' >
                                        <div className='btn1' >
                                            <button className='btn1 px-4 py-2 heading3'>Get Free CRM <i class="bi bi-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className='card custom-card cardish'>
                                    <div className='w-50 mx-auto wrap-icon p-3 rounded-3 mb-2 top-management-item top-management-slider'>
                                        <img
                                            src={icon3}
                                            // style={{backgroundColor:"red"}}
                                            className="align-items-center img-fluid w-50"
                                            alt=""
                                        />
                                    </div>
                                    <div className='text-center'>
                                    <h2 className='heading6' style={{ fontSize: "30px" }}>Free CRM</h2>
                                    </div>
                                    <p className='mb-2 heading6 '>Everything you need to organize tracks</p>
                                    <p className='heading4'>Contact Insights</p>
                                    <p className='heading4'>Deal Over Bussiness</p>
                                    <p className='heading4' >Task Regarding Test </p>
                                    <div className='btn1' >
                                        <button className='btn1 px-4 py-2 heading3'>Get Free CRM <i class="bi bi-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </section>
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div class="col-lg-6">
                            <div class="dedicated-content">
                                <span>About CRM</span>
                                <h2 className='heading6'>We Are Fully Dedicated To Support!!!</h2>

                                <div className='icon'>
                                    <h4 className='heading7 mt-5'><i class="bi bi-arrow-right"></i> Our mission</h4>
                                    <p className='heading4 mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam repellat velit, distinctio eligendi iste et!</p>
                                </div>
                                <div className='icon'>
                                    <h4 className='heading7 mt-5 '><i class="bi bi-clock"></i> Our Story</h4>
                                    <p className='heading4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, atque eligendi aut neque quae reprehenderit..</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="dedicated-image mt-4">
                                <img src={img2} alt="image" className='img-fluid' />

                                <div class="text">
                                    <p><span>16</span>Years Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Sales />

        </div>
    )
}
