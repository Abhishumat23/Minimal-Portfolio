"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { InstagramIcon, Github, Linkedin, Sun, Moon, ExternalLink, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import PreLoader from "@/components/preloader"

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const shimmer = {
  animate: {
    background: [
      "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
      "linear-gradient(to right, transparent 100%, rgba(255,255,255,0.1) 50%, transparent 0%)",
    ],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    },
  },
}

export default function Portfolio() {
  const [theme, setTheme] = useState("light")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isLoading, setIsLoading] = useState(true)

  // Scroll progress animation
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Mouse follower effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])


  // Theme toggle
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

  // Project categories
  const categories = ["All", "Hide"]
  const projects = [
    {
      image: "/assets/project2.png",
      title: "HackOff V4.0",
      description: "A hackathon event platform for registration, submissions, and participant management.",
      link: "https://hackoff-v4-pi.vercel.app/",
      category: "All",
      stats: { stars: 45, users: 200 },
    },
    {
      image: "/assets/project3.png",
      title: "DigiSwasth",
      description: "A virtual hospital platform for patient-doctor interaction and health management.",
      link: "https://digiswasth-xi.vercel.app/",
      category: "All",
      stats: { stars: 12, users: 80 },
    },
    {
      image: "/assets/project1.png",
      title: "Sociovate",
      description: "A platform for ideathon participation, idea submission, and team collaboration.",
      link: "https://sociovate-frontend.vercel.app/",
      category: "All",
      stats: { stars: 60, users: 100 },
    },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <motion.div
        className="min-h-screen bg-background text-foreground relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Mouse follower */}
        <motion.div
          className="fixed w-6 h-6 rounded-full bg-primary/20 pointer-events-none z-50 hidden md:block"
          animate={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            scale: 1,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />

        {/* Scroll progress bar */}
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50" style={{ scaleX }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          

          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12">
            {/* Left Sidebar */}
            <motion.div className="space-y-10" initial="initial" animate="animate" variants={staggerContainer}>
              {/* Profile Header */}
              <motion.div className="flex items-center gap-6" variants={fadeIn}>
                <div className="relative">
                  <Image
                    src="/favicon.ico"
                    alt="Profile"
                    width={90}
                    height={90}
                    className="rounded-full ring-2 ring-primary/0"
                  />
                  <motion.div className="absolute inset-0 rounded-full" variants={shimmer} animate="animate" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">Abhishumat Singh Beniwal</h1>
                  <p className="text-lg text-muted-foreground">Software Engineer</p>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div className="space-y-6" variants={fadeIn}>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Passionate about creating innovative solutions and user-friendly applications. With expertise in web
                  technologies and a keen eye for design, I bring ideas to life in the ever-evolving world of software
                  development.
                </p>
                <Button
                  className="rounded-full text-base px-8 py-6 bg-primary hover:bg-primary/90 transition-colors"
                  asChild
                >
                  <Link href="/assets/Resume-Abhishumat.pdf" target="_blank">
                    View Resume
                  </Link>
                </Button>
              </motion.div>

              {/* Experience Timeline */}
              <motion.div variants={fadeIn} className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
                <div className="space-y-4">
                {[
                {
                  year: "June 2025",
                  title: "Intern",
                  company: "MPC Cloud Consulting Pvt. Ltd",
                  link: "https://www.mpccloudconsulting.com",
                  description: "Worked on Oracle Cloud Infrastructure development",
                },
                {
                  year: "2024-2025",
                  title: "Co-Secretary",
                  company: "IET-VIT",
                  description: "Led development of various websites",
                },
                {
                  year: "2023-2024",
                  title: "Projects Domain Member",
                  company: "Apple Developers Group VIT",
                  description: "Built responsive web applications",
                },
              ].map((experience, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 pb-8 border-l border-primary/20 last:pb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary -translate-x-[7px]" />
                  <div className="space-y-2">
                    <span className="text-sm text-primary font-medium">{experience.year}</span>
                    <h3 className="font-semibold">{experience.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {experience.link ? (
                        <a
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-primary"
                        >
                          {experience.company}
                        </a>
                      ) : (
                        <span className="text-white">{experience.company}</span>
                      )}
                    </p>
                    <p className="text-sm">{experience.description}</p>
                  </div>
                </motion.div>
              ))}

                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div className="space-y-6" variants={fadeIn}>
                <div className="flex gap-4">
                  {[
                    {
                      href: "https://github.com/Abhishumat23",
                      icon: <Github className="w-5 h-5" />,
                      label: "GitHub",
                    },
                    {
                      href: "https://www.linkedin.com/in/abhishumat-singh-beniwal-200620269/",
                      icon: <Linkedin className="w-5 h-5" />,
                      label: "LinkedIn",
                    },
                    {
                      href: "https://www.instagram.com/abhishumatt",
                      icon: <InstagramIcon className="w-5 h-5" />,
                      label: "Instagram",
                    },
                  ].map((link, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:scale-110 transition-transform"
                      asChild
                    >
                      <Link href={link.href} target="_blank" aria-label={link.label}>
                        {link.icon}
                      </Link>
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleTheme}
                    className="rounded-full hover:scale-110 transition-transform ml-auto"
                  >
                    {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                  </Button>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div className="space-y-12" initial="initial" animate="animate" variants={staggerContainer}>
              {/* Projects Section */}
              <motion.section variants={fadeIn} id="projects">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>
                  <div className="flex gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className="capitalize"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project, i) => (
                    <motion.a
                      key={i}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex flex-col bg-card rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="p-6 space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                        <div className="flex items-center gap-4 pt-2">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Star className="w-4 h-4" />
                            <span>{project.stats.stars}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Users className="w-4 h-4" />
                            <span>{project.stats.users}</span>
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.section>

              {/* Stack Section */}
              <motion.section variants={fadeIn} className="rounded-xl p-8 bg-primary/5 border">
                <h2 className="text-2xl font-bold tracking-tight mb-8">Tech Stack</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 ">
                  {[
                    { src: "/assets/js-squared.svg", alt: "JavaScript", level: 90 },
                    { src: "/assets/typescript.svg", alt: "TypeScript", level: 85 },
                    { src: "/assets/swift.svg", alt: "Swift", level: 75 },
                    { src: "/assets/python.svg", alt: "Python", level: 80 },
                    { src: "/assets/Tailwind CSS.svg", alt: "Tailwind CSS", level: 95 },
                    { src: "/assets/Flutter.svg", alt: "Flutter", level: 70 },
                    { src: "/assets/Git.svg", alt: "Git", level: 88 },
                  ].map((tech, i) => (
                    <motion.div
                      key={i}
                      className="relative p-6 rounded-xl bg-background shadow-sm border hover:shadow-md transition-shadow"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <div className="flex flex-col items-center gap-4">
                        <Image
                          src={tech.src || "/placeholder.svg"}
                          alt={tech.alt}
                          width={40}
                          height={40}
                          className="object-contain dark:invert"
                        />
                        <div className="w-full space-y-2">
                          <div className="text-sm font-medium text-center">{tech.alt}</div>
                          <div className="h-2 w-full bg-primary/20 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-primary"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${tech.level}%` }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Contact Section */}
              <motion.section variants={fadeIn} className="rounded-xl p-8 bg-primary/5 border">
  <h2 className="text-2xl font-bold tracking-tight mb-6">Get in Touch</h2>
  <div className="grid md:grid-cols-2 gap-8">
    <div className="space-y-4">
      <p className="text-lg">
        <span className="text-muted-foreground">Email: </span>
        <a href="mailto:abhishumatbeniwal@gmail.com" className="text-primary hover:underline">
          abhishumatbeniwal@gmail.com
        </a>
      </p>
      <p className="text-muted-foreground">
        Feel free to reach out for collaborations or just to say hi!
      </p>
    </div>

   
  </div>
</motion.section>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.footer variants={fadeIn} className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Abhishumat Singh Beniwal. All rights reserved.</p>
          </motion.footer>
        </div>
      </motion.div>
    </>
  )
}

