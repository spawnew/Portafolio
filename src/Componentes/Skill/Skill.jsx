import React from 'react'

const Skill = () => {
  return (
    <section id="skills" className="bg-black py-20 px-6 text-center">
  <h2 className="text-3xl font-bold text-blue-400 mb-10">Skills</h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
    {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git", "Django", "PowerBi","Python","React Native","Next"].map((skill) => (
      <div
        key={skill}
        className="bg-gray-900 text-gray-300 py-4 rounded-xl border border-blue-500/20 hover:border-blue-400 transition"
      >
        {skill}
      </div>
    ))}
  </div>
          </section>
  )
}

export default Skill