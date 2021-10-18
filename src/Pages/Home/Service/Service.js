import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { id, name, fees, description, img, timing, work } = service;
    return (
        <div id="service" className="service pb-4">
            <img src={img} alt="" />
            <h2>{name}</h2>

            <h6>{work} </h6>
            <h4>Fees: {fees}</h4>
            <h6>Timing:{timing} </h6>

            <p className="px-3">slice(4, 19){description}</p>
            <Link to={`/doctorDetails/${id}`}>
                <button className="btn btn-primary">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;