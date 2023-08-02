import React from 'react'

const Contact = () => {
    return (
        <>

            <div className="container py-5 px-2 bg-primary">
                <div className="row py-5 px-4">
                    <div className="col-sm-6 text-center text-md-left">
                        <h1 className="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">Contact Me</h1>
                    </div>
                    <div className="col-sm-6 text-center text-md-right">
                        <div className="d-inline-flex pt-2">
                            <h4 className="m-0 text-white"><a className="text-white" href="">Home</a></h4>
                            <h4 className="m-0 text-white px-2">/</h4>
                            <h4 className="m-0 text-white">Contact Me</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container bg-white pt-5">
                <div className="row px-3 pb-2">
                    <div className="col-sm-4 text-center mb-3">
                        <i className="fa fa-2x fa-map-marker-alt mb-3 text-primary"></i>
                        <h4 className="font-weight-bold">Address</h4>
                        <p>Lahore, Pakistan</p>
                    </div>
                    <div className="col-sm-4 text-center mb-3">
                        <i className="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
                        <h4 className="font-weight-bold">Phone</h4>
                        <p>+923314275398</p>
                    </div>
                    <div className="col-sm-4 text-center mb-3">
                        <i className="far fa-2x fa-envelope mb-3 text-primary"></i>
                        <h4 className="font-weight-bold">Email</h4>
                        <p>tayyabaslam771@gmail.com</p>
                    </div>
                </div>
                {/* <div className="col-md-12 pb-5">
                    <div className="contact-form">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div className="control-group">
                                <input type="text" className="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name"  />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control" rows="8" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button className="btn btn-primary" type="submit" id="sendMessageButton">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Contact
