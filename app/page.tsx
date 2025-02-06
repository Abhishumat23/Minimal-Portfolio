"use client"

import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Menu, InstagramIcon, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Player } from '@lottiefiles/react-lottie-player'; // Import the Player component

const LottiePlayer = dynamic(() => import("react-lottie-player"), { ssr: false });

export default function Portfolio() {

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
        {/* Left Sidebar */}
        <div className="space-y-8">
          {/* Profile Header */}
          <div className="flex items-center gap-4">
            <Image src="/assets/photo.JPG" alt="Profile" width={70} height={70} className="rounded-full" />
            <div>
              <h1 className="text-2xl font-sans font-bold">Abhishumat Singh Beniwal</h1>
              <p className="text-gray-600">Software Engineer</p>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Passionate about creating innovative solutions and user-friendly applications. With expertise in web
              technologies and a keen eye for design, I bring ideas to life in the ever-evolving world of software
              development.
            </p>
            <Button className="rounded-full bg-blue-500 hover:bg-blue-600 text-white">
              <Link href="/assets/resume.pdf" target="_blank">Resume</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild className="text-blue-500 hover:text-blue-600">
                <Link href="https://github.com/Abhishumat23" target="_blank">
                  <Github className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild className="text-yellow-500 hover:text-yellow-600">
                <Link href="https://www.linkedin.com/in/abhishumat-singh-beniwal-200620269/" target="_blank">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild className="text-red-500 hover:text-red-600">
                <Link href="https://www.instagram.com/abhishumatt" target="_blank">
                  <InstagramIcon className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="text-gray-500 text-sm">
              <p>© 2025 Abhishumat Singh Beniwal</p>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-blue-500">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-blue-500">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

          {/* Lottie Animation */}
          <div className="mt-8 lg:block hidden"> {/* Hide on mobile and tablet */}
            <Player
              autoplay
              loop
              src="/assets/teaching-animation.json" // Path to your Lottie animation file
              style={{ height: '350px', width: '100%', padding: '0px' }} // Adjust size as needed
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          {/* Menu Button - Only show on mobile */}
          <div className="flex justify-end lg:hidden">
            <Button variant="outline" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </div>

          {/* Projects Section */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-sans font-bold text-blue-500">My Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { 
                  image: "/assets/project2.png", 
                  title: "HackOff V4.0", 
                  description: "A hackathon event platform for registration, submissions, and participant management.", 
                  color: "bg-red-100", 
                  border: "border-red-500" 
                },
                { 
                  image: "/assets/project3.png", 
                  title: "DigiSwasth", 
                  description: "A virtual hospital platform for patient-doctor interaction and health management.", 
                  color: "bg-yellow-100", 
                  border: "border-yellow-500" 
                },
                { 
                  image: "/assets/project1.png", 
                  title: "Sociovate", 
                  description: "A platform for ideathon participation, idea submission, and team collaboration.", 
                  color: "bg-blue-100", 
                  border: "border-blue-500" 
                },
              ].map((project, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col ${project.color} rounded-lg overflow-hidden border-2 ${project.border} transition-transform duration-300 hover:scale-105 hover:shadow-lg p-4`}
                  style={{ height: '350px' }}
                >
                  {/* Image Container */}
                  <div className="w-full overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      layout="responsive" 
                      width={300} 
                      height={200} 
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  
                  {/* Text Container */}
                  <div className="flex-grow flex flex-col justify-between text-center mt-2"> {/* Reduced margin-top */}
                    <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                    <p className="text-sm text-gray-700">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stack Section */}
          <section className="bg-green-100 rounded-xl p-6 border-2 border-green-500">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-sans font-bold text-green-700">My Stack</h2>
            </div>

            {/* Stack Items */}
            <div className="flex gap-4">
              {[
                { src: "/assets/js-squared.svg", alt: "React", color: "bg-blue-500" },
                { src: "/assets/typescript.svg", alt: "Node.js", color: "bg-green-500" },
                { src: "/assets/swift.svg", alt: "Tailwind CSS", color: "bg-yellow-500" },
                { src: "/assets/python.svg", alt: "Firebase", color: "bg-red-500" }
              ].map((tech, i) => (
                <div 
                  key={i} 
                  className={`w-12 h-12 ${tech.color} rounded-xl shadow-md flex items-center justify-center p-2 transition-transform duration-200 hover:scale-110`} // Added hover effect here
                >
                  <Image 
                    src={tech.src} 
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
            <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 p-6 border-2 border-blue-300">
              <h2 className="text-2xl font-sans font-bold text-blue-700 mb-4">Contact Me</h2>
              <p className="text-blue-700 mb-4">Email: <a href="mailto:abhishumatbeniwal@gmail.com" className="text-blue-800 hover:underline">abhishumatbeniwal@gmail.com</a></p>
              <div className="social-icons flex gap-4">
                <a href="https://www.linkedin.com/in/abhishumat-singh-beniwal-200620269/" target="_blank" className="text-blue-800 hover:text-blue-900">LinkedIn</a>
                <a href="https://github.com/Abhishumat23" target="_blank" className="text-blue-800 hover:text-blue-900">GitHub</a>
                <a href="https://www.instagram.com/abhishumatt" target="_blank" className="text-blue-800 hover:text-blue-900">Instagram</a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
