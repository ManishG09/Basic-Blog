const BlogList= ( {blogs}) => {

    if (blogs === null){
        return <p>Loading ....</p>
    }
    return ( 
        <div className="bloglist">
            <h2>title</h2>
            {console.log(blogs)}

            {blogs && blogs.length> 0 && blogs.map((blog) => (
            <div className="blog-content">

                <h2>{blog.title}</h2>
                <p>Written By {blog.author}</p>
            </div>
            ))}
        </div>
     );
}
 
export default BlogList;