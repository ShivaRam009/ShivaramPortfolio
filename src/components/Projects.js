import React, {useState} from "react";
import ET1 from '../assets/ET1.png';
import ET2 from '../assets/ET2.png';
import ET4 from '../assets/ET4.png';
import ET6 from '../assets/ET6.png';
import ET7 from '../assets/ET7.png';
import ET9 from '../assets/ET9.png';
import ET10 from '../assets/ET10.png';
import ET11 from '../assets/ET11.png';
import CF1 from '../assets/CF1.jpg';
import CF2 from '../assets/CF2.jpg';
import CF3 from '../assets/CF3.jpg';
import R1 from '../assets/Rentify1.png';
import R2 from '../assets/Rentify2.png';
import R3 from '../assets/Rentify3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Carousel from 'react-bootstrap/Carousel';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const [reverse, setReverse]=useState(false);


return (
  <div className="container mx-auto px-4" id="projects">
      <h2 className="text-4xl font-bold text-center my-10">Projects</h2>
      <p className="text-xl text-center mb-10">Each project is a unique piece of development 🌱</p>
      <div className={`flex flex-col md:flex-row  items-center my-10`}>
         
          <div className="w-full md:w-1/2 p-4 carousel">
          <Carousel fade>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={ET1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={ET2}
                  alt="Second slide"
                />
              </Carousel.Item>
              
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={ET4}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={ET6}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={ET7}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={ET9}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={ET10}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={ET11}
                  alt="Second slide"
                />
              </Carousel.Item>

            </Carousel>
          </div>
          <div className="w-full md:w-1/2 p-4">
              <h3 className="text-2xl font-bold mb-3">College Department Website</h3>
              <p className="mb-3">
              <ul className="pl-0">
              <li >
                  Created a website for our Department "Emerging Technologies" which provides information about Faculty, Infrastructure, Course Structures, various Branches present in the department and Activities of the Department.
                </li>
                <li>
                  Divided Users based on 3 roles "Faculty", "Student" and "Admin".
                </li>
                <li>
                  Designed Admin Interface to streamline Data Manipulation.
                </li>
                
              </ul>
              </p>
              <div className="flex space-x-2 mb-4">
                  
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">TailwindCSS</span>
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Express.js</span>
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">MongoDB</span>
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Cloudinary</span>
                  
              </div>
              <a href="#" className="text-blue-500 hover:underline mr-4">
                  <i className="bi bi-code-slash"></i> Code
              </a>
              <a href="https://et-frontend-green.vercel.app/" className="text-blue-500 hover:underline">
                  <i className="bi bi-box-arrow-up-right"></i> Live Demo
              </a>
          </div>
      </div>
      <div className={`flex flex-col md:flex-row-reverse  items-center my-10`}>
         
          <div className="w-full md:w-1/2 p-4 carousel">
            <Carousel fade>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={CF1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={CF2}
                  alt="Second slide"
                />
              </Carousel.Item>
              
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={CF3}
                  alt="Second slide"
                />
              </Carousel.Item>
              

            </Carousel>
          </div>
          <div className="w-full md:w-1/2 p-4">
              <h3 className="text-2xl font-bold mb-3">CineFiles</h3>
              <p className="mb-3">
              <ul className="pl-0">
               

                <li >
                  Developed  a comprehensive website which enables user to rate, review, add to favs and add to watchlist the movies.
                </li>
                <li>
                Users can view fellow cinephile's reviews and ratings, enabling them to make informed decisions and engage with a vibrant community of movie enthusiasts.
                </li>
              </ul>
              </p>
              <div className="flex space-x-2 mb-4">
                  
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Angular</span>
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Express.js</span>
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">MongoDB</span>
              </div>
              <a href="#" className="text-blue-500 hover:underline mr-4">
                  <i className="bi bi-code-slash"></i> Code
              </a>
              <a href="#" className="text-blue-500 hover:underline">
                  <i className="bi bi-box-arrow-up-right"></i> Live Demo
              </a>
          </div>
      </div>
      <div className={`flex flex-col md:flex-row  items-center my-10`}>
         
          <div className="w-full md:w-1/2 p-4 carousel">
          <Carousel fade>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={R1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={R2}
                  alt="Second slide"
                />
              </Carousel.Item>
              
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={R3}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="w-full md:w-1/2 p-4">
              <h3 className="text-2xl font-bold mb-3">Rentify</h3>
              <p className="mb-3">
              <ul className="pl-0">
              <li >
              Launched Rentify, an innovative web platform for property owners and tenants, with role-based login for personalized experiences.
                </li>
                <li>
                Implemented owner-centric features for seamless property posting and management.
                </li>
                <li>
                Facilitated tenant interaction through a structured process, promoting property viewings to optimize property discovery and rental negotiations.
                </li>
                
              </ul>
              </p>
              <div className="flex space-x-2 mb-4">
                  
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">TailwindCSS</span>
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Express.js</span>
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">MongoDB</span>
                      <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Cloudinary</span>
                  
              </div>
              <a href="#" className="text-blue-500 hover:underline mr-4">
                  <i className="bi bi-code-slash"></i> Code
              </a>
              <a href="https://rentify-front-end.vercel.app/" className="text-blue-500 hover:underline">
                  <i className="bi bi-box-arrow-up-right"></i> Live Demo
              </a>
          </div>
      </div>
      </div>
  
);
    
   
};

