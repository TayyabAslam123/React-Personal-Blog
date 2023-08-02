import React, { useState, useEffect } from 'react';

const Repos = () => {

    // useState Hook
    const [repositories, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    //
    useEffect(() => {
        fetch('https://api.github.com/users/TayyabAslam123/repos?sort=created_at')
            .then(response => response.json())
            .then(data => 
                { setData(data);
                 setLoading(false); })
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            {loading ? (
                <img className="mx-auto d-block w-75 bg-primary img-fluid " src="https://cdn.dribbble.com/users/3742211/screenshots/9195657/media/6796a544d6f9ef1293d8d8d9e60d38d5.gif" alt="Image" />
            ) : (
                <>
                    <div className="container py-5 px-2 bg-primary">
                        <div className="row py-5 px-4">
                            <div className="col-sm-6 text-center text-md-left">
                                <h1 className="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">My Github Repositories</h1>
                            </div>
                            <div className="col-sm-6 text-center text-md-right">
                            </div>
                        </div>
                    </div>
                    {repositories.map((repo) => (
                        <div className="container bg-white pt-5" key={repo.id}>
                            <div className="row blog-item px-3 pb-5">
                                <div className="col-md-4">
                                    <img className="img-fluid mb-0 mb-md-0" src="img/repo.png" alt="Image" width={"150px"} />
                                </div>
                                <div className="col-md-7">
                                    <h3 className="ml-2 bg-white font-weight-bold">{repo.name}</h3>
                                    <div className="d-flex mb-3">
                                        <small className="ml-2 text-muted"><i className="fa fa-calendar-alt"></i> {repo.created_at}</small>
                                    </div>
                                    <p>
                                        {repo.description}
                                    </p>
                                    {/* <a className="btn btn-primary btn-lg p-0" href="{repo.html_url}">VIEW<i className="fa fa-angle-right"></i></a> */}
                                    <a
                                        className="btn btn-lg btn-block btn-outline-dark"
                                        target="_blank"
                                        rel="noreferrer"
                                        href={repo.html_url}>
                                        VIEW
                                    </a>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                    ))}


                </>
            )};
        </>
    )
}

export default Repos
