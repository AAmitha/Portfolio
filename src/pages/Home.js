import React from "react";
import "./home.css";
import prof from "../assets/home.webp";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./st";
const Home=()=>{
    return(
        <section className="home section grid">
            <img src={prof} alt="" className="home__img"/>
            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>HELLO I AM AMITHA AKEPATI
.</span><br/>
                        
                    </h1>
                    <h1>I'm a</h1>
                    <h1>
                    
                        <a href="" class="typewrite" data-period="2000" data-type='[ "Software Engineer", "Python Developer", "Data Analyst", "Data Scientist","Data Engineer","Machine Learning Engineer","Artificial Intelligence Engineer" ]'>
    <span class="wrap"></span>
  </a>
                    </h1>
                    <p className="home__description">
                    
                    I have a Bachelor's in Computer Science Engineering and I'm currently pursuing a Master's in Data Science at the University of Texas at Arlington. My professional background at DXC Technology focused on middleware technology, particularly HPSB, where I managed complex data transfers and resolved client challenges. I hold certifications in Microsoft Azure Fundamentals and Alteryx Designer Core.

I have hands-on experience in Python, MySQL, HTML, CSS, GO Lang, and tools like Alteryx, Visual Studio, GitHub, and PowerBI. I'm skilled in Oracle SQL and MySQL for data management. My academic projects range from a Railway Reservation System to real-time Face Mask Detection, demonstrating my ability to apply cutting-edge technologies.

I'm a collaborative team member with a strong work ethic, quick learning ability, and a results-driven mindset. I'm eager to contribute my expertise as a Software Developer and make significant contributions to a challenging environment.






                    </p>
                    <Link to="/about" className="button">
                        More About Me{' '}
                        <span className="button__icon">
                            <FaArrowRight/>

                        </span>
                        
                    </Link>

                </div>

            </div>
            <div className="color__block"></div>
        </section>
    )
}

export default Home;