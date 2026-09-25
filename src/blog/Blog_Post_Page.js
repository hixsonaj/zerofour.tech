import { Link } from "react-router-dom";
import "./blogPages.css";
import data from './posts.json';

export default function Blog_Post_Page({ postSlug }) {
  const post = data.posts.find(item => item.slug === postSlug);
  return (
    <div className="blog_post_container">
      <h1>{post.title}</h1>
      <p className="blog_post_date">{post.date}</p>
      {post.paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      <Link to={"/"} style={{ textDecoration: 'none' }}>
        <h3 className="link">Back to Home</h3>
      </Link>
    </div>
  );
}
