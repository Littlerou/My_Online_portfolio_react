import React, { useState } from 'react';
import './style.css'


const About = () => {
    const [expanded, setExpanded] = useState([false,false,false])
    function open(index) {
        console.log(index)
        setExpanded( (prevexpanded) => {
             prevexpanded[index] = !prevexpanded[index] 
             return[...prevexpanded];
        })
    }


    return(
        <div id="about-div">
            <h1>Isobel Melvin</h1>
            
              
            <div id="about-cards-div">

            <div className='about-card'>
                <div className='about-title'>
                    <h2>Education</h2>
                    <button onClick={() => open(0)}>{expanded[0] ? 'Less Info' : 'More Info'}</button>
                </div>
                <div id="education-div" hidden={!expanded[0]}>
                    <ul>
                        <li>Secondary School: The Blue Coat School</li>
                        <p>GCSE Results: 9A*s, 2As</p>
                        <li>Sixthform: The Blue Coat School Sixth Form</li>
                        <p>A-Level Results: Biology(As): A, Chemistry: A*, Physics: A* and Maths:   A*</p>
                        <li>University: Imperial College London</li>
                        <p>Chemical Engineering: Upper 2:1</p>
                    </ul>
                </div>
            </div>
            <div className='about-card'>
                <div className='about-title'>
                    <h2>Awards & Achievements</h2>
                    <button onClick={() => open(1)}>{expanded[1] ? 'Less Info' : 'More Info'}</button>
                </div>
                <div id="achievement-div" hidden={!expanded[1]}>
                    <ul>
                        <li>Oldham educational award for outstanding GCSE results (2016)</li>
                        <li>Bronze and Silver DofE</li>
                        <li>Grade 5 Cornet (2013)</li>
                        <li>Grade 6 Piano (2015)</li>
                        <li>Bronze in the RSC Chemistry Olympiad (2017)</li>
                        <li>Silver in the Cambridge Chemistry Challenge (2017)</li>
                        <li>Winner of the Music for Youth competition (2014) </li>
                        <li>Performed in PROMs 2014 at the Royal Albert Hall (2014)</li>                    
                        <li>Winner of BUCS Womens dodgeball (2022)</li>                    
                        <li>The Roger Sargent Prize (2022)</li>
                        
                        
                    </ul>

                </div>
            </div>
            <div className='about-card'>
                <div className='about-title'>
                    <h2>Hobbies & Interests</h2>
                    <button onClick={() => open(2)}>{expanded[2] ? 'Less Info' : 'More Info'}</button>
                </div>
                <div id="hobbies-div" hidden={!expanded[2]}>

                <ul>
                    <li>Rock climbing</li>
                    <li>Football</li>
                    <li>Piano</li>
                    <li>Dodgeball</li>
                </ul>
                </div>
            </div>
            
            
            </div>
            
        </div>
    )
}

export default About;