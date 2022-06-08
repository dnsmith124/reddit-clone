import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setCurrentPosts, currentPosts } from "../../Redux/postsSlice";
import { useSelector, useDispatch } from "react-redux";

const APITest = () => {

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
        });
      }
    )
  }, [subreddit, refresh]);

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
        <Link to={`posts/${element.name}`} key={i}>
          <h2>
            {element.title}
          </h2>
        </Link>
      )
    })
  }

  return (
    <div>
      <button className="refresh" onClick={()=> setRefresh(!refresh)}>Refresh</button>
      {
        displayPosts(posts)
      }
    </div>
  )
};

export default APITest;