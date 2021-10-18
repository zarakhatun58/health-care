import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

import './Banner.css'

const Banner = () => {
    return (
        <>
            <Carousel className="banner">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3> Specialist Doctor</h3>
                        <p>Different Types of Doctors & Medical Specialists Explained. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>What Kind of Doctor Do </h3>
                        <p>Get Appointment of Best Medicine Specialist Doctor in health Care.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Medical Health Care</h3>
                        <p> Health care (also health-care or healthcare) is the maintenance or improvement of health via the prevention, diagnosis, treatment, .</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;