import Banner from "../components/Banner";
import Blogs from "../components/Blogs";
import Carousel from "../components/Carousel";
import Featured from "../components/Featured";
import RecentQueries from "../components/RecentQueries";
import Testimonial from "../components/Testimonial";


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Banner></Banner>
            <RecentQueries></RecentQueries>
            <Featured></Featured>
            <Blogs></Blogs>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;