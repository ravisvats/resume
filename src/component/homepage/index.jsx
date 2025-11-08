import Intro from "./Intro";
import AuthStreamSlider from "./AuthStreamSlider";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-white shadow-sm sticky top-0 z-30">
                <Intro />
            </div>
            <div className="flex-1">
                <AuthStreamSlider />
            </div>
        </div>
    );
}

export default Home;