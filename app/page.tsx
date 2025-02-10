"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { InstagramIcon, Github, Linkedin, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
        {/* Left Sidebar */}
        <div className="space-y-8">
          {/* Profile Header */}
          <div className="flex items-center gap-4">
            <Image src="/favicon.ico" alt="Profile" width={70} height={70} className="rounded-full" />
            <div>
              <h1 className="text-2xl font-sans font-bold">Abhishumat Singh Beniwal</h1>
              <p className="text-muted-foreground">Software Engineer</p>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Passionate about creating innovative solutions and user-friendly applications. With expertise in web
              technologies and a keen eye for design, I bring ideas to life in the ever-evolving world of software
              development.
            </p>
            <Button className="rounded-full bg-blue-500 text-white hover:bg-blue-600">
              <Link href="/assets/resume 2.pdf" target="_blank">
                Resume
              </Link>
            </Button>
          </div>

          {/* Social Links */}
<div className="space-y-4">
  <div className="flex gap-4">
    {[
      {
        href: "https://github.com/Abhishumat23",
        icon: <Github className="w-5 h-5 text-red-500 dark:text-red-400" />,
        border: "border-red-500",
      },
      {
        href: "https://www.linkedin.com/in/abhishumat-singh-beniwal-200620269/",
        icon: <Linkedin className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />,
        border: "border-yellow-500",
      },
      {
        href: "https://www.instagram.com/abhishumatt",
        icon: <InstagramIcon className="w-5 h-5 text-blue-500 dark:text-blue-400" />,
        border: "border-blue-500",
      },
    ].map((link, index) => (
      <Button
        key={index}
        variant="outline"
        size="icon"
        asChild
      >
        <Link href={link.href} target="_blank">
          {link.icon}
        </Link>
      </Button>
    ))}
    {/* Theme Toggle - Show on all screen sizes */}
    <div className="flex justify-end items-center gap-4">
            <Button variant="outline" size="icon" onClick={toggleTheme}>
              {theme === "light" ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
            </Button>
          </div>
  </div>
            <div className="text-muted-foreground text-sm">
              <p>© 2025 Abhishumat Singh Beniwal</p>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-primary">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-primary">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-3">
          {/* Projects Section */}
<section>
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-sans font-bold text-primary">My Projects</h2>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {[
      {
        image: "/assets/project2.png",
        title: "HackOff V4.0",
        description: "A hackathon event platform for registration, submissions, and participant management.",
        color: "bg-red-100 dark:bg-red-900",
        border: "border-red-500",
        link: "https://hackoff-v4-pi.vercel.app/",
      },
      {
        image: "/assets/project3.png",
        title: "DigiSwasth",
        description: "A virtual hospital platform for patient-doctor interaction and health management.",
        color: "bg-yellow-100 dark:bg-yellow-900",
        border: "border-yellow-500",
        link: "https://digiswasth-xi.vercel.app/",
      },
      {
        image: "/assets/project1.png",
        title: "Sociovate",
        description: "A platform for ideathon participation, idea submission, and team collaboration.",
        color: "bg-blue-100 dark:bg-blue-900",
        border: "border-blue-500",
        link: "https://www.sociovate.co/",
      },
    ].map((project, i) => (
      <a
        key={i}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative flex flex-col ${project.color} rounded-lg overflow-hidden border-2 ${project.border} transition-transform duration-300 hover:scale-105 hover:shadow-lg p-4`}
        style={{ height: "320px" }}
      >
        {/* Image Container */}
        <div className="w-full overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            layout="responsive"
            width={300}
            height={200}
            className="object-cover rounded-t-lg"
          />
        </div>

        {/* Text Container */}
        <div className="flex-grow flex flex-col justify-between text-center mt-2">
          <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
      </a>
    ))}
  </div>
</section>


          {/* Stack Section */}
          <section className="bg-green-100 dark:bg-green-900 rounded-xl p-6 border-2 border-green-500">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-sans font-bold text-green-700 dark:text-green-300">My Stack</h2>
            </div>

            {/* Stack Items */}
<div className="grid grid-cols-4 sm:flex sm:gap-4 gap-2">
  {[
    { src: "/assets/js-squared.svg", alt: "React", color: "bg-blue-500" },
    { src: "/assets/typescript.svg", alt: "Node.js", color: "bg-green-500" },
    { src: "/assets/swift.svg", alt: "Tailwind CSS", color: "bg-yellow-500" },
    { src: "/assets/python.svg", alt: "Firebase", color: "bg-red-500" },
    { src: "/assets/Tailwind CSS.svg", alt: "React", color: "bg-blue-500" },
    { src: "/assets/Flutter.svg", alt: "Node.js", color: "bg-green-500" },
    { src: "/assets/Git.svg", alt: "Tailwind CSS", color: "bg-yellow-500" },
  ].map((tech, i) => (
    <div
      key={i}
      className={`w-12 h-12 ${tech.color} rounded-xl shadow-md flex items-center justify-center p-2 transition-transform duration-200 hover:scale-110`}
    >
      <Image
        src={tech.src || "/placeholder.svg"}
        alt={tech.alt}
        width={32}
        height={32}
        className="object-contain"
      />
    </div>
  ))}
</div>
          </section>

          {/* Contact and Clients Sections */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            {/* Contact Section */}
            <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 p-6 border-2 border-blue-300 dark:border-blue-700">
              <h2 className="text-2xl font-sans font-bold text-blue-700 dark:text-blue-300 mb-4">Contact Me</h2>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                Email:{" "}
                <a
                  href="mailto:abhishumatbeniwal@gmail.com"
                  className="text-blue-800 dark:text-blue-200 hover:underline"
                >
                  abhishumatbeniwal@gmail.com
                </a>
              </p>
              <div className="social-icons flex gap-4">
                <a
                  href="https://www.linkedin.com/in/abhishumat-singh-beniwal-200620269/"
                  target="_blank"
                  className="text-blue-800 dark:text-blue-200 hover:text-blue-900 dark:hover:text-blue-100"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Abhishumat23"
                  target="_blank"
                  className="text-blue-800 dark:text-blue-200 hover:text-blue-900 dark:hover:text-blue-100"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/abhishumatt"
                  target="_blank"
                  className="text-blue-800 dark:text-blue-200 hover:text-blue-900 dark:hover:text-blue-100"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

