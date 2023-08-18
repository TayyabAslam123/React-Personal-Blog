import React, { useState, useEffect } from 'react';
import {
    Link
  } from "react-router-dom";

const Posts = () => {

    // useState Hook
    const [blogs, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    //
    useEffect(() => {
        fetch('https://startuppakistan.com.pk/wp-json/wp/v2/posts?page=10&_embed=true')
            .then(response => response.json())
            .then(data => { setData(data); setLoading(false); })
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            {loading ? (
                <img className="mx-auto d-block w-75 bg-primary img-fluid" src="https://cdn.dribbble.com/users/3742211/screenshots/9195657/media/6796a544d6f9ef1293d8d8d9e60d38d5.gif" alt="Image" />
            ) : (
                <>
                    {blogs.map((blog) => (
                        <div className="row blog-item px-3 pb-5">
                            <div className="col-md-5">
                                <img className="img-fluid mb-2 mb-md-0"
                                    src={blog._embedded['wp:featuredmedia'][0].source_url}
                                    alt="Featured"
                                />
                            </div>
                            <div className="col-md-7">
                                <h5 className="px-md-3 bg-white font-weight-bold">{blog.title.rendered}</h5>
                                <div className="d-flex mb-0">
                                    <small className="mr-2 text-muted"><i className="fa fa-calendar-alt"></i> {blog.date}</small>
                                    <small className="mr-2 text-muted"><i className="fa fa-folder"></i> {blog.type}</small>
                                </div>
                                <p>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}
                                    />
                                </p>
                               
                                <Link className="btn btn-sm btn-outline-dark" to={`/post/${blog.id}`}>Show Details</Link>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </>
    )
}

export default Posts
