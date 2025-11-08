import Intro from "./Intro";
import AuthStreamSlider from "./AuthStreamSlider";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-1">
                <AuthStreamSlider />
            </div>
        </div>
    );
}

export default Home;