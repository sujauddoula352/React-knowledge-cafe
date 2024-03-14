import { useEffect } from "react";
import { useState } from "react";

const Bloges = () => {
 const [blogs, setBlogs] = useState([]);
 useEffect(()=>{
    fetch('blogs.json')
    .then (resposive => resposive.json())
    .then ( data => setBlogs(data));
 },[])

    return (
        <div>
            
        </div>
    );
};

export default Bloges;