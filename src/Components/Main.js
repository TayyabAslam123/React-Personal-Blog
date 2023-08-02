import Posts from "./Posts";
import {
    Link
  } from "react-router-dom";
  

const Main = () => {
    return (
        <>
            <div className="container p-0">
                <div id="blog-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="/img/carousel-1.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <h2 className="mb-3 text-white font-weight-bold">Read Tech Blog Below</h2>
                                {/* <div className="d-flex text-white">
                                    <small className="mr-2"><i className="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                                    <small className="mr-2"><i className="fa fa-folder"></i> Web Design</small>
                                    <small className="mr-2"><i className="fa fa-comments"></i> 15 Comments</small>
                                </div>
                                <a href="" className="btn btn-lg btn-outline-light mt-4">Read More</a> */}
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="/img/carousel-2.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <h2 className="text-white font-weight-bold">Know About Me</h2>
                                {/* <div className="d-flex">
                                    <small className="mr-2"><i className="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                                    <small className="mr-2"><i className="fa fa-folder"></i> Web Design</small>
                                    <small className="mr-2"><i className="fa fa-comments"></i> 15 Comments</small>
                                </div> */}
                                <Link to="/about" className="btn btn-lg btn-outline-light mt-4">Read More</Link>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="/img/carousel-3.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <h2 className="text-white font-weight-bold">View My Repositories</h2>
                                {/* <div className="d-flex">
                                    <small className="mr-2"><i className="fa fa-calendar-alt"></i> 01-Jan-2045</small>
                                    <small className="mr-2"><i className="fa fa-folder"></i> Web Design</small>
                                    <small className="mr-2"><i className="fa fa-comments"></i> 15 Comments</small>
                                </div> */}
                                <Link to="/my-github-repositories" className="btn btn-lg btn-outline-light mt-4">Read More</Link>

                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#blog-carousel" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#blog-carousel" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>

            <div className="container bg-white pt-5">
             <Posts />
            </div>

            <div className="container py-4 bg-secondary text-center">
                <p className="m-0 text-white">
                    &copy; <a className="text-white font-weight-bold" href="#">My Blog</a>. All Rights Reserved
                </p>
            </div>

        </>
    )
}

export default Main
