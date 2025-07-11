const basePath = './icons/'
const techStack = [
    { name: "Python", src: basePath + "python-svgrepo-com.svg" },
    { name: "FastAPI", src: basePath + "fastapi-svgrepo-com.svg" },
    { name: "MySql", src: basePath + "mysql-svgrepo-com.svg" },
    { name: "React", src: basePath + "react.svg" },
    { name: "LLM", src: basePath + "ai-svgrepo-com.svg" },
    { name: "Solana", src: basePath + "solana-svgrepo-com.svg" },
    { name: "MongoDb", src: basePath + "mongodb-svgrepo-com.svg" },
    { name: "AWS", src: basePath + "aws-ec2-svgrepo-com.svg" },
    { name: "Git", src: basePath + "git.svg" },
    { name: "PHP", src: basePath + "php-svgrepo-com.svg" },
    { name: "VS Code", src: basePath + "vscode-fill-svgrepo-com.svg" },
    { name: "GitHub", src: basePath + "github-svgrepo-com.svg" },
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
