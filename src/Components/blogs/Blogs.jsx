import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog"
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark, heandlesMarkAsRead}) => {
 const [blogs, setBlogs] = useState([]);
 useEffect(()=>{
    fetch('blogs.json')
    .then (resposive => resposive.json())
    .then ( data => setBlogs(data));
 },[])
 
    return (
        <div className="md:w-2/3">
            <h1>Blog data:</h1>

            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} 
                handleAddToBookmark = {handleAddToBookmark}
                heandlesMarkAsRead = {heandlesMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes ={
    handleAddToBookmark: PropTypes.func.isRequired,
    heandlesMarkAsRead:PropTypes.func.isRequired
}

export default Blogs;