import Blogs from "./Blog";
import Intro from "./Intro";
import Projects from "./Projects";
import Resume from "./Resume";
import TechStack from "./TechStack";

const Home = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-screen p-4">
            {/* First column: Intro, Resume, and TechStack (fixed) */}
            <div className="flex flex-col gap-4 md:sticky md:top-4 self-start">
                <div className="bg-white shadow">
                    <Intro />
                </div>
                <div className="bg-white shadow">
                    <Resume />
                </div>
                <div className="bg-white shadow">
                    <TechStack />
                </div>
            </div>
            {/* Second column: Projects and Blogs (scrollable) */}
            <div className="flex flex-col gap-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 2rem)' }}>
                <div className="bg-white shadow">
                    <Projects />
                </div>
                <div className="bg-white shadow">
                    <Blogs />
                </div>
            </div>
        </div>
    );
}

export default Home;