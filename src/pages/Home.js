import React, { useEffect } from "react";
import "./home.css";
import prof from "../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home=()=>{
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    
    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
    
        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
    
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
        var that = this;
        var delta = 200 - Math.random() * 100;
    
        if (this.isDeleting) { delta /= 2; }
    
        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }
    
        setTimeout(function() {
        that.tick();
        }, delta);
    };
    function a() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
    useEffect(a,[]);
    
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
                    
                    "Data Science graduate from the University of Texas at Arlington, with a prominent passion for trending technologies such as Python, web development, Machine Learning, and Artificial Intelligence. Technology has never failed to intrigue me, and it is this passion for finding tech solutions to everyday problems that drove me to pursue a career in the field. With strong programming skills in Python and HTML/CSS, as well as experience in team collaboration and project management methodologies like Agile Scrum and Waterfall, I eagerly anticipate the opportunity to work in a challenging environment. I aim to apply my experience and make significant contributions to the company, ultimately helping both of us achieve great success."





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
