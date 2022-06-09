import styles from './Post.module.css';
import { useParams } from "react-router-dom";
import { currentPosts } from "../../Redux/postsSlice";
import { useSelector } from "react-redux";
const Post = ({data}) => {

  const {id} = useParams();
  let posts = useSelector(currentPosts);

  const getPostByID = (id) => {
    let matchIndex = -1;
    posts.some((element, i) => {
      if(element.name === id)
        matchIndex = i
      return element.name === id
    });
    if(matchIndex === -1)
      return []
    
    return posts[matchIndex];
  }

  const post = getPostByID(id);
  console.log(post)

  return (
    <div className={styles.post}>
      <h2 className='post-title h5'>
        {post.title}
      </h2>
    </div>
  )
};

export default Post;