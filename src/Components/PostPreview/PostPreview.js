import styles from './PostPreview.module.css';
import { Link } from "react-router-dom";

const PostPreview = ({post}) => {

  let hasThumb = (post.thumbnail !== 'default' && post.thumbnail !== '');

  return (
    <div className={`${styles.postPreview} ${(hasThumb) ? styles.hasThumb : ''}`}>
      <span>r/{post.subreddit}</span>
      <Link to={`posts/${post.name}`} >
        <h2>
          {post.title}
        </h2>
        {
          hasThumb && 
          <img src={post.thumbnail} alt="" />
        }
      </Link>
    </div>
  )
}


export default PostPreview;