import React from 'react'
import Swal from 'sweetalert2';

const Sidebar = () => {
    // Show Resume
    const handleButtonClick = () => {
        Swal.fire({
            imageUrl: 'https://i.postimg.cc/0jhY60Bw/Tayyab-resume.png',
            imageHeight: 1000,
            imageWidth: 800,
            imageAlt: 'A tall image'
        })
    };

    return (
        <div className="sidebar">
            <div className="sidebar-text d-flex flex-column h-100 justify-content-center text-center">
                <img className="mx-auto d-block w-75 bg-primary img-fluid rounded-circle mb-4 p-3" src="/tayyab.jpg" alt="Image" />
                <h2 className="font-weight-bold">TAYYAB ASLAM</h2>
                <p className="mb-4">
                    I am software engineer with 3+ years experience. I have done BSCS from Comsats, Pakistan. My interested areas are Smart business sol , E-commerce , KPI's , Implementing new ideas.
                </p>
                <div className="d-flex justify-content-center mb-5">
                    <a className="btn btn-outline-primary mr-2" href="https://github.com/TayyabAslam123" target="_blank"><i className="fab fa-github"></i></a>
                    <a className="btn btn-outline-primary mr-2" href="https://www.linkedin.com/in/tayyab-aslam-04b859153/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <button onClick={handleButtonClick} className="btn btn-lg btn-block btn-primary mt-auto">My Resume</button>
            </div>
            <div className="sidebar-icon d-flex flex-column h-100 justify-content-center text-right">
                <i className="fas fa-2x fa-angle-double-right text-primary"></i>
            </div>
        </div>
    )
}

export default Sidebar
