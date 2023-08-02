import React from 'react'

export const Portfolio = () => {

    return (

        <>
            <div className="container py-5 px-2 bg-primary">
                <div className="row py-5 px-4">
                    <div className="col-sm-6 text-center text-md-left">
                        <h1 className="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">Portfolio</h1>
                    </div>
                    <div className="col-sm-6 text-center text-md-right">
                        <div className="d-inline-flex pt-2">
                            <h4 className="m-0 text-white"><a className="text-white" href="">Home</a></h4>
                            <h4 className="m-0 text-white px-2">/</h4>
                            <h4 className="m-0 text-white">Portfolio</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container p-0">
                <div id="blog-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="/img/galaxy.png" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="/img/sahara.png" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="/img/RCM.png" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="/img/btw.png" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
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
        </>

    )

}
