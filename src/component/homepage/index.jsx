import Blogs from "./Blog";
import Intro from "./Intro";
import Projects from "./Projects";
import Resume from "./Resume";
import AuthAppHero from "./AuthAppHero";
import TechStack from "./TechStack";

const Home = () => {
    return (
        <div className="flex flex-col gap-4 min-h-screen p-4">
            <div className="bg-white shadow">
                <Intro />
            </div>
            <div className="bg-white shadow">
                <AuthAppHero />
            </div>
            <div className="bg-white shadow">
                <TechStack />
            </div>
            {/* Move projects and blogs to bottom */}
            <div className="bg-white shadow">
                <Projects />
            </div>
            <div className="bg-white shadow">
                <Blogs />
            </div>
        </div>
    );
}

export default Home;