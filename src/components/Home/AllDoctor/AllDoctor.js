import React from 'react';
import Doctors from '../Doctors/Doctors';

const AllDoctor = () => {
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    <Doctors/>
                    <Doctors/>
                    <Doctors/>
                </div>
            </div>
        </section>
    );
};

export default AllDoctor;