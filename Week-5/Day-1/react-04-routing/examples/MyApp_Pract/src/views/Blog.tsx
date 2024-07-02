import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function Blog() {
    const blogs = [
      { id: 1, title: "blog1" },
      { id: 2, title: "blog2" },
      { id: 3, title: "blog3" },
    ];
    const {id} = useParams();
    if(!id){ 
    return (
      <>
        <div>Blog homepage</div>
        {blogs.map((blog) => (
          <div>
            {" "}
            <Link to={"/blogs/" + blog.id}> {blog.title}</Link>{" "}
          </div>
        ))}
      </>
    );
  }
    return (
        <>
        <div>You have selected id: {id}</div>
        <Link to="/blogs">Back</Link>
        </>
        )
}
