const basePath = './icons/'
const techStack = [
  { name: "HTML5", src: basePath + "html5.svg" },
  { name: "CSS3", src: basePath + "css.svg" },
  { name: "JavaScript", src: basePath + "jss.svg" },
  { name: "React", src: basePath + "react.svg" },
  { name: "Redux", src: basePath + "redux.svg" },
  { name: "Bootstrap", src: basePath + "bootstrap.svg" },
  { name: "Tailwind CSS", src: basePath + "tailwind.svg" },
  { name: "Sass", src: basePath + "sass.svg" },
  { name: "Git", src: basePath + "git.svg" },
  { name: "SuperHero Icon", src: basePath + "superhero.svg" },
  { name: "VS Code", src: basePath + "vscode.svg" },
  { name: "GitHub", src: basePath + "github.svg" },
];

const TechStack = () => {
  return (
    <section className="py-16 bg-white text-left mt-10 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">My Tech Stack</h2>
      <p className="text-gray-600 mb-8">
        Technologies I’ve been working with recently
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center items-center">
        {techStack.map((tech, index) => (
          <div key={index} className="w-16 h-16 flex items-center justify-center">
            <img
              src={tech?.src}
              alt={tech.name}
              title={tech.name}
              className="w-10 h-10 object-contain transition-transform hover:scale-110 duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
