"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"

const Project = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects", { cache: "no-store" }) // ✅ DB/API se fetch
        const data = await res.json()
        setProjects(data)
      } catch (error) {
        console.error("Failed to fetch projects:", error)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">

          <h3 className="text-5xl font-medium">Splendid Carpet Emporium Projects</h3>
          <p className="text-xl font-Open text-gray-900 py-2">
            <span className="text-gray-700">Explore how top interior designers use splendid carpet emporium for their most meaningful projects.</span> 
          </p>


        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {projects.map((project, index) => (
            <li
              key={project.id}
            >
              <div className="group relative block">
                <Image
                  src={project.imageUrl}
                  alt={project.id}
                  width={600}
                  height={600}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Project
