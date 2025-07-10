import passport from "../../assets/ravi_passport.jpeg";

const Intro = () => {
  return (
    <section className="flex flex-col md:flex-row items-start bg-white text-gray-900 w-full px-10 py-20">
      {/* Left Section: Text */}
      <div className="flex-2 text-left">
        <h1 className="text-3xl font-bold leading-tight">
          Hi <span role="img" aria-label="wave">👋</span>,<br />
          My name is <span className="text-blue-500">Ravi Shankar Vats</span><br />
          <span className="text-gray-800">I build things for the web</span>
        </h1>
        <div className="mt-6 flex gap-4">
          <a
            href="/forms"
            target="_blank"
            className="px-4 py-2 bg-white text-gray-900 rounded hover:bg-gray-100 transition"
          >
            My Blogs
          </a>
          <a
            href="/forms"
            target="_blank"
            className="px-4 py-2 bg-gray-200 text-gray-900 rounded hover:bg-gray-300 transition"
          >
            My Projects
          </a>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 flex justify-start mt-10 md:mt-0">
        <div className="w-44 h-44 rounded-full p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          <img
            src={passport}
            alt="Ravi Shankar Vats"
            className="w-full h-full object-cover rounded-full border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
