import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './DoctorDetails.css'

const DoctorsDetails = (props) => {
    const { serviceId } = useParams();
    const { services } = useAuth();
    console.log(services);
    const doctorsDetails = services?.find((fakedata) => fakedata.id === serviceId);
    console.log(doctorsDetails);




    return (


        <div>
            <div className="doctors">

                <div>
                    <img src={doctorsDetails.img} alt="" />
                </div>
                <div>

                    <h2 style={{ color: "tomato" }}>{doctorsDetails.name}</h2>
                    <h4> {doctorsDetails.department}</h4>
                    <h6 style={{ color: "green", fontWeight: "bold" }}>{doctorsDetails.work} </h6>
                    <h4 style={{ color: "blue", fontWeight: "bold" }}>Fees: {doctorsDetails.fees}</h4>
                    <h6>Timing:{doctorsDetails.timing} </h6>
                    <h4 style={{ color: "blue", fontWeight: "bold" }}>{doctorsDetails.contact}</h4>
                    <h6>{doctorsDetails.email}</h6>
                    <p style={{ color: "green", fontWeight: "bold" }}>{doctorsDetails.description} </p>

                </div>
            </div>

            <div style={{ marginBottom: "50px" }}>
                <Link to="/register">
                    <button className="btn btn-primary"> Take Appointment</button>
                </Link>

            </div>







            {/* </div> */}
        </div >
    );
};

export default DoctorsDetails;