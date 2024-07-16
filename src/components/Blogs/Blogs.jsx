import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handdleBookmarks,handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=> setBlogs(data))
    },[])
    
    return (
      <div className="md:w-2/3">
        <div>
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              blog={blog}
              handdleBookmarks={handdleBookmarks}
              handleMarkAsRead={handleMarkAsRead}
            ></Blog>
          ))}
        </div>
      </div>
    );
};

Blogs.propTypes = { 
  handdleBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func,
};
export default Blogs;