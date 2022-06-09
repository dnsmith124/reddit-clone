import styles from './PostsList.module.css';
import { useEffect, useState } from "react";
import { setCurrentPosts, currentPosts } from "../../Redux/postsSlice";
import { useSelector, useDispatch } from "react-redux";
import PostPreview from '../PostPreview/PostPreview';

const PostsList = () => {

  let persistedPosts = useSelector(currentPosts);
  const [posts, setPosts] = useState(persistedPosts);
  const [subreddit, setSubreddit] = useState('all');
  const [refresh, setRefresh] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if(refresh === false && persistedPosts.length > 0)
      return;

    console.log("Fetching...");
    fetch("https://www.reddit.com/r/" + subreddit +".json").then(
      res => {
        if (res.status !== 200) {
          console.warn("Warning: Something is wrong with the api.");
          return;
        }
        res.json().then(data => {
          if (data === null)
            return;

          let formattedPosts = formatPosts(data.data.children);
          setPosts(formattedPosts);
          setRefresh(false);
        });
      }
    )
  }, [subreddit, refresh, persistedPosts]);

  useEffect(() => {
    if(posts.length <= 0)
      return;

    dispatch(setCurrentPosts(posts));   
  }, [posts, dispatch]);

  const formatPosts = (posts) => {
    return posts.map((element, i)=> {
      return element.data;
    })
  }

  const displayPosts = (posts) => {
    if(posts === null)
      return;

    return posts.map( (element, i) => { 
      return (
        <PostPreview post={element} key={i} />
      )
    })
  }

  return (
    <div className={styles.postsList}>
      <button className="refresh" onClick={()=> setRefresh(!refresh)}>Refresh</button>
      <button className="refresh" onClick={()=> {setRefresh(true); setSubreddit('all')}}>All</button>
      <button className="refresh" onClick={()=> {setRefresh(true); setSubreddit('games')}}>Games</button>
      <button className="refresh" onClick={()=> {setRefresh(true); setSubreddit('askhistorians')}}>AskHistorians</button>
      {
        displayPosts(posts)
      }
    </div>
  )
};

export default PostsList;