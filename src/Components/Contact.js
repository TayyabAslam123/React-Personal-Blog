import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    // Form Submission
    // const handleSubmit = (event) => {

    //     event.preventDefault();
    //     //
    //     if (!name) {
    //         Swal.fire('Name missing !');
    //         return false;
    //     }
    //     if (!email) {
    //         Swal.fire('Email missing !');
    //         return false;
    //     }
    //     if (!subject) {
    //         Swal.fire('Subject missing !');
    //         return false;
    //     }
    //     if (!message) {
    //         Swal.fire('Message missing !');
    //         return false;
    //     }
    //     //

    //     const formData = {'name':name, 'email':email, 'subject':subject, 'message':message}

    //     console.log(formData);
        
    //     fetch('http://invoice-system.test/api/test', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //           name: 'foo',
    //           email: 'bar',
    //         }),
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //       })
    //         .then((response) => response.json())
    //         .then((json) => console.log(json));


    // }

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("https://httpbin.org/post", {
            method: "POST",
            body: JSON.stringify({
              name: name,
              email: email,
              mobileNumber: mobileNumber,
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setName("");
            setEmail("");
            setMessage("User created successfully");
          } else {
            setMessage("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };

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
                <div className="col-md-12 pb-5">
                    <div className="contact-form">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" onSubmit={handleSubmit}>
                            <div className="control-group">
                                <input type="text" className="form-control" id="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control" id="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control" id="subject" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control" rows="8" id="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button className="btn btn-primary" type="submit" id="sendMessageButton">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
