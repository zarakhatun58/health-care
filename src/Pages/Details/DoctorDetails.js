import React from 'react';
import { Link, useParams } from 'react-router-dom';

const DoctorsDetails = (props) => {
    const { serviceId } = useParams();
    const { name, fees, description, img, timing, work, department, contact, email, } = props;
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>More Details: {serviceId} </h1>
            <div>
                <img src={img} alt="" />
                <h2>{name}</h2>
            </div>
            <div>
                <h2>{name}</h2>
                <h4> {department}</h4>
                <h6>{work} </h6>
                <h4>Fees: {fees}</h4>
                <h6>Timing:{timing} </h6>
                <h4>{contact}</h4>
                <h6>{email}</h6>
                <p> </p>
                <p className="px-3">{description}</p>
            </div>





            {/*
            <div id="services" className="service pb-4">
                <img src={img} alt="" />
                <h2>{name}</h2>
                <h4> {department}</h4>
                <h6>{work} </h6>
                <h4>Fees: {fees}</h4>
                <h6>Timing:{timing} </h6>

                <p className="px-3">{description}</p> */}
            <Link to="/register">
                <button className="btn btn-primary"> Take Appointment</button>
            </Link>
            {/* </div> */}
        </div >
    );
};

export default DoctorsDetails;