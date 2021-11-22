import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Alert,
    Snackbar,
  } from '@mui/material';
import { selectSpecificPost } from '../features/posts/postsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { useState, Fragment } from 'react';
import { NavLink } from "react-router-dom";

export default function SinglePost(){
    const [showForm, setShowForm] = useState(false);
    const dispatch = useDispatch();
    const selectedPost = useSelector(selectSpecificPost);

    return(
        <div>
            <Card sx={{minWidth: 275}}>
                <CardContent>
                    {selectedPost ? (
                        <Fragment>
                            <Typography sx={{fontSize: 22}}>{selectedPost.title}</Typography>
                            <Typography sx={{fontSize: 14}}>{selectedPost.body}</Typography>
                            <NavLink to="/posts" className="link" >Go back to the Posts Page</NavLink>
                            {/* PUT THE FORM HERE */}
                        </Fragment>
                    ) : (
                        <Typography sx={{ fontSize: 14 }}>Please select a post</Typography>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}




/* import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

function SinglePost(){
    const params = useParams();
    const [singlePost, setSinglePost] = useState([]);

    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then(res =>
            setSinglePost(res.data)
            )
        .catch(error => console.log(error)
        );
    }, []);

    return(
        <div key={params.id} className="full-height blue container">
            <div className="post-info single-post">
                <h1 className="blue">{singlePost.title}</h1>
                <p>{singlePost.body}</p>
                <NavLink to="/posts" className="link" >Go back to the Posts Page</NavLink>
            </div>
        </div>
    );
}

export default SinglePost; */