import PropTypes from "prop-types";
import { IoBookmarkOutline } from "react-icons/io5";

const Blog = ({ blog, handdleBookmarks, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    post_date,
    hashtags,
  } = blog;

  return (
    <div className="border-b-2 mb-5">
      <img
        className="w-full rounded-lg mb-8"
        src={cover}
        alt={`Cover Picture of the title ${title}`}
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img className="rounded-full w-14" src={author_img} alt={author} />
          <div className="ml-3">
            <h3 className="text-2xl">{author}</h3>
            <p>{post_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handdleBookmarks(blog)}
            className="ml-2 text-2xl"
          >
            <IoBookmarkOutline></IoBookmarkOutline>
          </button>
        </div>
      </div>
      <h2 className="text-[40px] my-4">{title}</h2>
      <p className="mb-5">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a className="mx-1" href="#">
              {hash}
            </a>
          </span>
        ))}
      </p>
      <button 
      onClick={()=> handleMarkAsRead(reading_time)} 
      className="text-[#6047EC] underline font-semibold mb-5">
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handdleBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
