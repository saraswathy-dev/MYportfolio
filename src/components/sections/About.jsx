const About = () => {
  const frontend = [
    "React",
    "Angular",
    "JavaScript",
    "TypeScript",
    "Tailwindcss",
  ];
  const backend = ["Nodejs", "MongoDB"];
  return (
    <section
      id="about"
      className="min-h-screen items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-8 bg-gradient from-blue-500 to-cyan-400 
        text-center bg-clip-text text-transparent"
        >
          About me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Passionate Web developer with expertise in building scalable web
            applications and creating innovative solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 translate-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontend.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 translate-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backend.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">🎓Eduaction</h3>
                <ul className="list-disc list-inside test-gray-300 space-y-2">
                  <li>
                    <strong>B.E in Computer Science and Engineering</strong> -
                    Anna University
                  </li>
                  <li>
                    <strong>M.Tech in Advanced Computing</strong> - SASTRA
                    University
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">💼Work Experience</h3>
                <div>
                  <h4 className="font-semibold">
                    Software Engineer Intern at UnternehmerTum (March 2025-May
                    2025)
                  </h4>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Assistant Professor at N.S.N college of Enginnering
                    (December 2012-December 2015)
                  </h4>
                </div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
