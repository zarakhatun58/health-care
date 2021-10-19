import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { id, name, description, img, timing, department } = service;
    return (
        <div id="service" className="service pb-4">
            <img src={img} alt="" />
            <h4>{name}</h4>

            <h5>{department} </h5>

            <h6>Timing:{timing} </h6>

            <p className="px-3">{description.slice(0, 60)}</p>
            <div>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-whatsapp"></i>
            </div>
            <Link to={`/doctorDetails/${id}`}>
                <button className="btn btn-primary">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;