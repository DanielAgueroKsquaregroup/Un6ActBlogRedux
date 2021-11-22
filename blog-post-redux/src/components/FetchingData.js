import {
    List,
    ListItem,
    Divider,
    Button,
    Typography,
    CircularProgress,
    Alert,
    AlertTitle,
  } from '@mui/material';
  import { getPosts } from '../features/posts/postsThunks';
  import { setSelectedPost } from '../features/posts/postsSlice';
  import { selectPost, selectPostsLoading, selectPostsError } from '../features/posts/postsSelectors';
  import { useDispatch, useSelector } from 'react-redux';
  import { Fragment, useEffect } from 'react';
  import { NavLink } from 'react-router-dom'

  export default function FetchingData(){
      const dispatch = useDispatch();
      const posts = useSelector(selectPost);
      const isLoading = useSelector(selectPostsLoading);
      const error = useSelector(selectPostsError);

      useEffect(() => {
          dispatch(getPosts());
      }, [dispatch]);

      const handleSelectPost = (id) => {
          dispatch(setSelectedPost(id));
      };

      const refetchPosts = () => {
          dispatch(getPosts());
      };

      const handleOnLogout = () => {
        localStorage.clear();
        window.location.pathname = '/'
    }

      if(error) {
          return(
              <Alert severity='error'>
                  <AlertTitle>Error</AlertTitle>
                  Error while fetching the posts!
                  <div>
                      <Button variant='outlined' onClick={refetchPosts}>Click Here :)</Button>
                  </div>
              </Alert>
          );
      }

      if (isLoading){
          return(
              <div style={{display: 'flexbox', justifyContent:'center'}}>
                  <CircularProgress />
              </div>
          );
      }

      return(
          <div>
              <Typography style={{backgroundColor:"#0077ff", fontWeight:"bolder", width:"80%", margin:"0 auto"}} component='h1'>POSTS</Typography>
              <div className="container">
                  {posts.map(post =>(
                      <Fragment key={post.id} className="post-info">
                          <p>{post.title}</p>
                          <NavLink to={`/post/${post.id}`} className="link" onClick={handleSelectPost(post.id)}>Visit the post</NavLink>
                      </Fragment>
                  ))}
                  <button className="link" onClick={handleOnLogout}>Logout</button>
              </div>
          </div>
      )
  }