import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
    const { data } = useFetch('http://localhost:3000/blogs')
    return ( 
        <div className="">
            <BlogList blogs={data} />

        </div>
     );
}
 
export default Home;