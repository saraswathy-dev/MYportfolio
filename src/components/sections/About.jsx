import RevealOnScroll from "../RevealOnScroll.jsx";
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
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 
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
                  <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>

                  {/* Intern Experience */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg">
                      Software Engineer Intern
                    </h4>
                    <p className="text-gray-400 text-sm">
                      UnternehmerTUM • Mar 2025 – May 2025
                    </p>
                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1 text-sm">
                      <li>
                        Built a UI automation tool for SAP apps to reduce manual
                        testing.
                      </li>
                      <li>
                        Collaborated in an agile team and contributed to
                        AI-based testing features.
                      </li>
                      <li>
                        Worked with React, REST APIs, and WebSockets for
                        real-time feedback.
                      </li>
                    </ul>
                  </div>

                  {/* Assistant Professor */}
                  <div>
                    <h4 className="font-semibold text-lg">
                      Assistant Professor
                    </h4>
                    <p className="text-gray-400 text-sm">
                      N.S.N College of Engineering • Dec 2012 – Dec 2015
                    </p>
                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1 text-sm">
                      <li>
                        Taught undergraduate computer science courses with a
                        focus on web development.
                      </li>
                      <li>
                        Organized coding workshops and hackathons to enhance
                        student skills.
                      </li>
                      <li>
                        Mentored student projects in software development and UX
                        design.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
export default About;
