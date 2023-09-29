import Header from "../parts-website/Header";
import Banner from "../parts-website/Banner";
import LatestJobs from "../parts-website/LatestJobs";
import { Info } from "../parts-website/Info";
import Categories from "../parts-website/Categories";
import Footer from "../parts-website/Footer";

const Home = () => {


    return (
        <div>
            <Header/>
            <Banner/>
            <LatestJobs/>
            <Info/>
            <Categories/>
            <Footer/>
        </div>
    )
}

export default Home;
