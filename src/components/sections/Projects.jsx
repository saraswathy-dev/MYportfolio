import RevealOnScroll from "../RevealOnScroll.jsx";
const Projects = () => {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-4">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 
        text-center bg-clip-text text-transparent"
          >
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Event Management Website{" "}
              </h3>
              <p className="text-gray-400 mb-4">
                Developed the front-end of a responsive event management website
                from scratch using HTML, CSS, TypeScript, Bootstrap, and Angular
                Material for seamless event management across devices.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Angular", "Angular Material", "Typescript", "php"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/saraswathy-dev/EventsTamil"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project➡️
                </a>
              </div>
            </div>
            <div className="p-6 rounded border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Real-Time Chat Application{" "}
              </h3>
              <p className="text-gray-400 mb-4">
                Developed a responsive, real-time chat application using the
                MERN stack, enabling seamless communication across
                devices.Utilized Redux for centralized state management,
                ensuring efficient data flow and component synchronization.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Redux", "Express.js", "MongoDB"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/saraswathy-dev/chat-app.git"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project➡️
                </a>
              </div>
            </div>
            <div className="p-6 rounded border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Health web app </h3>
              <p className="text-gray-400 mb-4">
                Designed and developed a responsive health web app landing page
                featuring an immersive full-screen background video to enhance
                user engagement. Implemented a clean and accessible layout using
                React and Tailwind CSS, with emphasis on personalized healthcare
                messaging.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailwindCss", "Javascript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://saraswathy-dev.github.io/HealthCare-webapp/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project➡️
                </a>
              </div>
            </div>
            <div className="p-6 rounded border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Product Store </h3>
              <p className="text-gray-400 mb-4">
                Built a full-stack e-commerce-style web application using the
                MERN stack to demonstrate CRUD functionality and RESTful API
                integration. Developed the frontend with React and modern hooks,
                and implemented backend routes with Node.js and Express,
                connected to a MongoDB database. Handled user interaction, state
                management, and real-time data fetching to simulate core product
                operations in a scalable architecture.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.j", "Expres", " MongoDBp", "REST API"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://saraswathy-dev.github.io/mern-crash-course/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project➡️
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
export default Projects;
