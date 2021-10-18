import React from 'react';
import { Link, useParams } from 'react-router-dom';

const DoctorsDetails = (props) => {
    const { serviceId } = useParams();
    const { id, name, fees, description, img, timing, work } = props;
    return (
        <div>
            <h1>More Details: {serviceId} </h1>
            <div id="services" className="service pb-4">
                <img src={img} alt="" />
                <h2>{name}</h2>

                <h6>{work} </h6>
                <h4>Fees: {fees}</h4>
                <h6>Timing:{timing} </h6>

                <p className="px-3">{description}</p>
                <Link to={`/doctorDetails/${id}`}>
                    <button className="btn btn-warning">Book {name.toLowerCase()}</button>
                </Link>
            </div>
        </div>
    );
};

export default DoctorsDetails;