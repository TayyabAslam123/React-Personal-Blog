import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Post = () => {
    const { id } = useParams();
    const [title, setTitle] = useState([]);
    const [created_at, setCreatedAt] = useState([]);
    const [content, setContent] = useState([]);

    fetch('https://www.techneeds.com/wp-json/wp/v2/posts/' + id)
        .then(response => response.json())
        .then(data => {
            setTitle(data.title.rendered);
            setCreatedAt(data.date);
            setContent(data.content.rendered);
        })
        .catch(error => console.error(error));


    return (

        <>
            <div className="container py-5 px-2 bg-primary">
                <div className="row py-5 px-4">
                    <div className="col-sm-6 text-center text-md-left">
                        <h1 className="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">Post Detail</h1>
                    </div>
                    <div className="col-sm-6 text-center text-md-right">
                        <div className="d-inline-flex pt-2">
                            <h4 className="m-0 text-white"><a className="text-white" href="">Home</a></h4>
                            <h4 className="m-0 text-white px-2">/</h4>
                            <h4 className="m-0 text-white">Post Detail</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5 px-2 bg-white">
                <div className="row px-4">
                    <div className="col-12">
                        <h2 className="mb-3 font-weight-bold"> {title}</h2>
                        <div className="d-flex">
                            <p className="mr-3 text-muted"><i className="fa fa-calendar-alt"></i> {created_at}</p>
                            <p className="mr-3 text-muted"><i className="fa fa-folder"></i> Blog Post</p>
                        </div>
                        <p>
                            <div
                                dangerouslySetInnerHTML={{ __html: content }}
                            />
                        </p>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Post
