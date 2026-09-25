import { Link } from "react-router-dom";
import data from './blog/posts.json';
import './Blog_Section.css';

const posts = data.posts;

export default function Blog_Section() {
  return (
    <div className="Blog_Section">
      <div className="Blog_Posts">
        {posts.map((post, i) => (
          <div className="Blog_Post" key={i}>
            {post.type === "article" ? (
              <>
                <h3><Link className="Blog_Title_Link" to={"/blog/" + post.slug}>{post.title}</Link></h3>
                <p>{post.excerpt}</p>
                <p className="Blog_Date"><Link to={"/blog/" + post.slug}>Read more</Link></p>
              </>
            ) : (
              <>
                {post.paragraphs.map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
                <p className="Blog_Date"><a href={post.link} target="_blank" rel="noopener noreferrer">via LinkedIn</a></p>
              </>
            )}
            <p className="Blog_Date">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
