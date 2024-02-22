import React from 'react'
import icon5 from '../assets/images/icon5.png'
import icon6 from '../assets/images/icon6.png'
import img6 from '../assets/images/img6.png'
import img7 from '../assets/images/img7.png'
import icon10 from '../assets/images/icon10.png'
import icon11 from '../assets/images/icon11.png'
import icon13 from '../assets/images/icon13.png'
import icon14 from '../assets/images/icon14.png'
import icon15 from '../assets/images/icon15.png'
import icon16 from '../assets/images/icon16.png'
import bg3 from '../assets/images/bg3.jpg'
import bg4 from '../assets/images/bg4.jpg'
import profile from '../assets/images/profile-2.png'

export default function Sales() {
    return (
        <>
        
            <section class="sales-area pt-100 pb-70" id='Features'>
                
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="sales-content ">
                                <div className='text-center section-title'>
                                    <span className="mt-4" style={{ color: "white" }}>CRM Features</span>
                                </div>
                                <h2 className='fs-3 mt-5'>Keep Up The Sales Remote Features</h2>
                                {/* <p className='heading4'>Team ipsum dolor sit ametconsecteturing elit sed do eiusmod tempor incididunt laboret dolore magna aliqua minaquaerat.</p> */}

                                <ul class="list heading6 mt-4 py-4">
                                    <li>
                                        <i class="bx bx-right-arrow-alt"></i>
                                        Enterprise-class  applications
                                    </li>
                                    <li>
                                        <i class="bx bx-right-arrow-alt"></i>
                                        Leading CRM vendors
                                    </li>
                                    <li>
                                        <i class="bx bx-right-arrow-alt"></i>
                                        Relentless focus on re-invention
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="sales-box ">
                                        <div class="image d-none d-lg-block">
                                            <img src={icon5} alt="image" className='ac-img' />
                                        </div>
                                        <h3 className='heading5'>Conduct Sales Meetings</h3>
                                        <p className='heading4'>Meeting ipsum dolor sit amseteturing elit sed do eiusmod tempor incididunt</p>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="sales-box">
                                        <div class="image">
                                            <img src={icon6} alt="image" className='ac-img' />
                                        </div>
                                        <h3 className='heading5'>Conduct Sales Meetings</h3>
                                        <p className='heading4'>Meeting ipsum dolor sit amseteturing elit sed do eiusmod tempor incididunt</p>
                                    </div>
                                </div>

                                <div class="col-lg-6 offset-lg-3">
                                    <div class="sales-box">
                                        <div class="image">
                                            <img src={img6} alt="image" className='ac-img' />
                                        </div>
                                        <h3 className='heading5'>Collaborate With Your Team</h3>
                                        <p className='heading4'>Meeting ipsum dolor sit amseteturing elit sed do eiusmod tempor incididunt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="shape d-none d-lg-block">
                    <img src={img7} alt="image" />
                </div>
            </section>
            <section id='CRM Steps' >

                <div className='sales-content overflow-hidden'>
                    <div className='section-title text-center mt-5'>
                        <span>CRM Steps</span>
                    </div>
                    <h4 className='heading10 mt-4 text-center' style={{ color: "black" }}>We Accompany On Steps</h4>
                    <p className='primary-title heading4 text-center mt-4'style={{ color: "black", fontSize:"16px" }}>Your business is in a state of constant evolution—an evolution that your software needs to be able to accomodate effortlessly</p>
                    <div className="container">
                        <div className="row">
                            <div class="tab accompany-list-tab ">
                                <ul class="tabs active mt-5 p-0">
                                    <li class="current border ">

                                        <div className='text-center mt-4'>
                                            <img src={icon10} alt="image" className=' img-fluid ac-img' />
                                        </div>
                                        <span className='heading5 mt-4 py-3 px-3 '>Small Business</span>

                                    </li>
                                    <li className='border'>

                                        <div className='text-center mt-4'>
                                            <img src={icon11} alt="image" className=' img-fluid ac-img  ' />
                                        </div>
                                        <span className='heading5 mt-4 py-3 px-3'>CRM For Life Sciences  </span>

                                    </li>
                                    <li className='border'>
                                        <div className='text-center mt-4'>
                                            <img src={icon13} alt="image" className=' img-fluid  ac-img' />
                                        </div>
                                        <span className='heading5 mt-4 py-3 px-3'>Real Estate CRM</span>
                                    </li>
                                    <li className='border'>
                                        <div className='text-center mt-4'>
                                            <img src={icon14} alt="image" className=' img-fluid  ac-img' />
                                        </div>
                                        <span className='heading5 mt-4 py-3 px-3'>CRM Financial Services</span>
                                    </li>
                                    <li className='border'>
                                        <div className='text-center mt-4'>
                                            <img src={icon15} alt="image" className=' img-fluid  ac-img' />
                                        </div>
                                        <span className='heading5 mt-4 py-3 px-4'>CRM Insurance</span>
                                    </li>
                                    <li className='border'>
                                        <div className='text-center mt-4'>
                                            <img src={icon6} alt="image" className=' img-fluid ac-img ' />
                                        </div>
                                        <span className='heading5 mt-4 py-3 px-3'>Retail Management</span>
                                    </li>
                                </ul>

                                <div class="tab_content">
                                    <div class="tabs_item">
                                        <div class="row align-items-center">
                                            <div class="col-lg-6">
                                                <div class="accompany-image">
                                                    <img src={bg3} alt="image" className='img-fluid ' />
                                                </div>
                                            </div>

                                            <div class="col-lg-6">
                                                <div class="accompany-content mt-4">
                                                    <h2 style={{ color: "red", textAlign: "center",fontSize:"20px" }} className='heading5'>Small Business</h2>

                                                    <p className='primary-title heading4 text-center mt-4' style={{color:"black"}}>Our plan dolor sit amet conseetur diisci velit sed quiLorem ipsum dolor sit ame consectetur adipisicing elit</p>

                                                    <ul class="list">
                                                        <li className=' heading6'>
                                                            <i class="bi bi-arrow-right"></i>
                                                            Respect for all people
                                                        </li>
                                                        <li className='heading6'>
                                                            <i class="bi bi-arrow-right"></i>
                                                            Excellence in everything we do
                                                        </li>
                                                        <li className=' heading6'>
                                                            <i class="bi bi-arrow-right"></i>
                                                            Truthfulness in our business
                                                        </li>
                                                        <li className=' heading6'>
                                                            <i class="bi bi-arrow-right"></i>
                                                            Unquestionable integrity
                                                        </li>
                                                    </ul>




                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>


                </div>


            </section>
            <section id='CRM selling'>
                <div className="container imagish">
                    <div className="row align-items-center">
                        <div class="col-md-6">
                            <div class="conversational-content mt-5 py-4 section-title ">
                                <div className='text-center mt-4'>
                                    <span className='heading7'>Personal Assistant</span>
                                </div>

                                <h4 className='heading10 mt-4 text-center' style={{ color: "black" }}>Conversational AI for Smarter Selling</h4>

                                <ul class="list mt-5">
                                    <li className='heading6'>
                                        <i class="bx bx-check"></i>
                                        Task reminders and suggestions for the best times to contact your leads based on successful interactions
                                    </li>
                                    <li className='heading6 mt-3 p' >
                                        <i class="bx bx-check"></i>
                                        Predictions from Jilva so that you can identify the leads that are likely to convert and ultimately
                                    </li>
                                    <li className='heading6 mt-3'>
                                        <i class="bx bx-check"></i>
                                        Information you need from your CRM data instantly with the help of Zia
                                    </li>
                                </ul>
                                <div className='btn1' >
                                    <button className='btn1 px-4 py-2 heading6'>Join Offer<i class="bi bi-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6 mt-5 imgine">
                            <img src={bg4} alt="" className=' pa-img' />

                        </div>
                    </div>

                </div>



            </section>
            <section>
                <section class="container mt-5 overflow-hidden" id="faq">
                    <div class="common-padding pb-lg-0">
                        <h1 class="text-center heading7" data-aos="fade-up" data-aos-duration="600">Frequently Asked Questions
                            (FAQs)</h1>
                        <div class="accordion mt-5" id="accordionExample">
                            <div class="row justify-content-center">
                                <div class="col-md-6">
                                    <div data-aos="fade-right" data-aos-duration="600">
                                        <div class="accordion-item" data-aos-anchor-placement="bottom-bottom">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                    Q1:How To Get Start With Us?


                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    A1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, harum?
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Q2:
                                                    Is CRM worth it if I've got a small customer base?

                                                </button>
                                            </h2>
                                            <div id="collapseTwo" class="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    A2: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, natus.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree" aria-expanded="false"
                                                    aria-controls="collapseThree">
                                                    Q3:
                                                    Why Salesforce for my small business CRM?

                                                </button>
                                            </h2>
                                            <div id="collapseThree" class="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    A3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ut?
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" data-aos-duration="600">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapsefour" aria-expanded="true"
                                                    aria-controls="collapsefour">
                                                    Q4:
                                                    What access do I have on the free plan?

                                                </button>
                                            </h2>
                                            <div id="collapsefour" class="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    A4: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, itaque!
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapsefive" aria-expanded="false"
                                                    aria-controls="collapsefive">
                                                    Q5:
                                                    How do I know if my small business needs CRM?

                                                </button>
                                            </h2>
                                            <div id="collapsefive" class="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    A5: Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, necessitatibus!
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                                    Q6:
                                                    Which material types can you work with?

                                                </button>
                                            </h2>
                                            <div id="collapsesix" class="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    A6: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, mollitia?

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 mt-md-5">
                                    <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="600">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseseven" aria-expanded="true"
                                                    aria-controls="collapseseven">
                                                    Q7:
                                                    Does CRM help my teams work better together?

                                                </button>
                                            </h2>
                                            <div id="collapseseven" class="accordion-collapse collapse show"
                                                data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    A7: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, omnis.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className='testimonal mt-5'>
            

                <div className="container border">
                    <h1 className="section-header mt-4 " style={{ color: "black" }}>
                        client review <span className='mt-3'></span>
                    </h1>
                    <div className="testimonals">
                        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel"     >
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="3000">
                                    <div className="single-item">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="profile">
                                                    <div className="img-area">
                                                        <img src={profile} alt="" />
                                                    </div>
                                                    <div className="bio">
                                                        <h2> Dave Wood</h2>
                                                        <h4> Web Developer</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="content1">
                                                    <p> <span><i class="bi bi-quote"></i></span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                        Deserunt, reiciendis! Autem optio quaerat culpa recusandae.
                                                        Magnam dolorum ea necessitatibus magni?
                                                    </p>
                                                    <p className='socials'>
                                                        <i class="bi bi-youtube"></i>
                                                        <i class="bi bi-twitter"></i>
                                                        <i class="bi bi-whatsapp"></i>

                                                        <i class="bi bi-behance"></i>
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="3000">
                                    <div className="single-item">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="profile">
                                                    <div className="img-area">
                                                        <img src={profile} alt="" />
                                                    </div>
                                                    <div className="bio">
                                                        <h2> martin</h2>
                                                        <h4> Web Developer</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="content1">
                                                    <p> <span><i class="bi bi-quote"></i></span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                        Deserunt, reiciendis! Autem optio quaerat culpa recusandae.
                                                        Magnam dolorum ea necessitatibus magni?
                                                    </p>
                                                    <p className='socials'>
                                                        <i class="bi bi-youtube"></i>
                                                        <i class="bi bi-twitter"></i>
                                                        <i class="bi bi-whatsapp"></i>
                                                        <i class="bi bi-behance"></i>
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="3000">
                                    <div className="single-item">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="profile">
                                                    <div className="img-area">
                                                        <img src={profile} alt="" />
                                                    </div>
                                                    <div className="bio">
                                                        <h2> sara</h2>
                                                        <h4> Web Developer</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="content1">
                                                    <p> <span><i class="bi bi-quote"></i></span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                        Deserunt, reiciendis! Autem optio quaerat culpa recusandae.
                                                        Magnam dolorum ea necessitatibus magni?
                                                    </p>
                                                    <p className='socials'>
                                                        <i class="bi bi-youtube"></i>
                                                        <i class="bi bi-twitter"></i>
                                                        <i class="bi bi-whatsapp"></i>

                                                        <i class="bi bi-behance"></i>
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                </div>
            </section>
            <section class="footer-area mt-5">
                <div class="container">
                   

                    <div class="row text-center text-lg-short">
                        <div class="col-lg-3 col-sm-6">
                            <div class="single-footer-widget ">
                                <h3 className='heading5 ' >About CRM</h3>

                                <ul class="quick-links">
                                    <li className='heading5'>
                                        <a href="#">- What is CRM?</a>
                                    </li>
                                    <li className='heading5'>
                                        <a href="#">- CRM Software</a>
                                    </li>
                                    <li className='heading5'>
                                        <a href="#">- Free CRM</a>
                                    </li>

                                    <li className='heading5'>
                                        <a href="#">- Social CRM</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-6">
                            <div class="single-footer-widget">
                                <h3 className='heading5'>Solution</h3>

                                <ul class="quick-links">
                                    <li className='heading5'>
                                        <a href="#">- Enterprise CRM</a>
                                    </li>
                                    <li className='heading5'>
                                        <a href="#">- SMB CRM</a>
                                    </li>
                                    <li className='heading5'>
                                        <a href="#">- Customer Experience Suite</a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-6">
                            <div class="single-footer-widget">
                                <h3 className='heading5'>Crm’s</h3>

                                <ul class="quick-links">
                                    <li className='heading5'>
                                        <a href="#">- Retail CRM</a>
                                    </li>
                                    <li className='heading5'>
                                        <a href="#">- Real Estate CRM</a>
                                    </li>
                                    <li className='heading5'>
                                        <a href="#">- Agency CRM</a>
                                    </li>
                                    <li className='heading5'>
                                        <a href="#">- Insurance CRM</a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-6">
                            <div class="single-footer-widget">
                                <h3 className='heading5' >Quick Links</h3>

                                <ul class="quick-links">
                                    <li className='heading5'>
                                        <a href="#">- Pricing</a>
                                    </li>
                                    <li className='heading5'>
                                        <a href="#">- What is Jilva CRM?</a>
                                    </li>
                                    <li className='heading5'>
                                        <a href="#">- Compare Plans</a>
                                    </li>
                                    <li className='heading5'>
                                        <a href="#">- Get Price Quote</a>
                                    </li>

                                </ul>

                            </div>
                        </div>
                        <h5 class="text-center pb-2 mt-3 text-danger heading6">CRM © 2021. All rights reserved</h5>
                    </div>
                </div>
            </section>
        </>
    )
}
