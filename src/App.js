import React, { useEffect } from 'react';
import './App.css';
import logo from './medidelogo.png'
import pic from './frame.png'
import {motion} from 'framer-motion'
import Aos from 'aos'
import '../node_modules/aos/dist/aos.css'
import c1 from './c1.png'
import c2 from './c2.png'
import c3 from './c3.png'
import '../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
const App = () => {
    useEffect(()=>{
        Aos.init({duration:1000});
    },[])
  return (
    <>
    <motion.div className='header' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.2}}>
    <img src={logo} alt='MEDIDE OFFICIAL LOGO'></img>
    </motion.div>
    <div className='intro'>
        <motion.div className='intro-1' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.8}}>
            <h2>Welcome to</h2>
            <h1>Medide</h1>
            <p>Your Easier Way to <span>Healthcare</span></p>
            <br></br>
            <br></br>
            <p>Discover & research diagnostics,blood banks,</p>
            <p>hospitals,counseling wihin 50km.</p>
            <p>Effortlessly book appointments online or set </p>
            <p>Your Location</p>
        </motion.div>
        <motion.div className='intro-2'>
            <img src={pic} alt='OUR SERVICE'></img>
        </motion.div>
    </div>
    <div className='about' data-aos="zoom-in">
        <h2 data-aos="zoom-out"> About <span data-aos="zoom-in">Medide</span></h2>
        <p data-aos="zoom-in">Born out of VIT's innovation hub,Medide is a forwawrd looking startup transforming how we experience </p>
        <p data-aos="zoom-in">
            healthcare.We're your bridege to essesntial medical services,like diagnostic centers,blood banks,
        </p>
        <p data-aos="zoom-in">
            specially hospitals , and Counselling centers - all within 50km.Say goodbye to Apppointment 
        </p>
        <p data-aos="zoom-in">Headaches.With Medide,booking online is a breeze,saving you from long waits and far trips.We're</p>
        <p data-aos="zoom-in">all about simplicity - for both medical facilities and users.No more appoinments stress.Get results</p>
        <p data-aos="zoom-in">online,handle payments effortlessly and book with a click</p>
    </div>
    <div className='impact' data-aos="zoom-in">
        <h2 data-aos="flip-left">Our <span data-aos="flip-left">Impact</span></h2>
        <p data-aos="flip-left">Find Out How We <span data-aos="flip-left">Help</span></p>
    <div className='impact-1'>
        <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={1000}
            interval={3500}
            infiniteLoop={true}
            showStatus={false}
            showIndicators={true}
            
        >
        <div className='impact-11'>
        <div>
        <img src={c1} alt='OUR SERVICES'></img>
        </div>
        <p>Dicover Medical Services Near You</p>
        <p>Medide brings you a seamless way to</p>
        <p>find diagnostic center,blood banks,</p>
        <p>specialty hospitals and counselling</p>
        <p>centers within 50km of your current</p>
        <p>location.</p>
    </div>
    <div className='impact-11'>
        <div>
        <img src={c2} alt='OUR SERVICES'></img>
        </div>
        <p>Revolutionizing Appoinments</p>
        <p>Fed up with appoinment troubles?</p>
        <p>Medide Revolutionizes the process by</p>
        <p>enabling hassle-free online booking</p>
        <p>for medical facilities near you.</p>
    </div>
    <div className='impact-11'>
        <div>
        <img src={c3} alt='OUR SERVICES'></img>
        </div>
        <p>Connecting Health and Convinience</p>
        <p>Medide Brideges the gap between</p>
        <p>medical needs and services,</p>
        <p>ensuring you acess the care you</p>
        <p>require with ease.</p>
    </div>
    <div className='impact-11'>
        <div>
        <img src={c1} alt='OUR SERVICES'></img>
        </div>
        <p>Book With Confidence</p>
        <p>Seletct Your desired medical facility</p>
        <p>and secure your appointment online</p>
        <p>through Medide's user-friendly</p>
        <p>interface.</p>
    </div>
    <div className='impact-11'>
        <div>
        <img src={c2} alt='OUR SERVICES'></img>
        </div>
        <p>Easy Payments,Seamless Experience</p>
        <p>Medide offers a range of payment</p>
        <p>options,making setting your</p>
        <p>appointments simple and </p>
        <p>convenient.</p>
    </div>
    <div className='impact-11'>
        <div>
        <img src={c3} alt='OUR SERVICES'></img>
        </div>
        <p>Results at Your Fingertips</p>
        <p>Say hello to convinience - Medide</p>
        <p>delivers your test results directly to</p>
        <p>your account,keeping you</p>
        <p> informed and enpowered.</p>
    </div>
        </Carousel>
    
    </div>
    </div>
    <div className='footer'>
        <h2>Get In <span>Touch</span></h2>
        <div className='footer-3'>
        <div className='footer-1'>
        <label>Email ID -</label><p>medideorg@gmail.com</p>
        </div>
        <div className='footer-2'>
            <p><span  data-aos="flip-right">Ph No. - </span>+91 77082 63621</p>
        </div>
        </div>
    </div>
    </>
  )
}

export default App
