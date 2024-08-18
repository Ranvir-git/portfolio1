'use client';

import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';



const projectData = [
  {
    image: '/work/port.png',
    category: 'next js',
    name: 'Protfolio',
    description: 'I have a strong foundation in the MERN stack, developing responsive web applications and RESTful APIs, with experience in Git and cloud deployment. Eager to apply my skills in a challenging role, I am committed to continuous growth in the tech industry.',
    link: 'https://ranvir-port.vercel.app/',
    github: 'https://github.com/Ranvir-git/hospitalManagement',
  },
  {
    image: '/work/hospital.png',
    category: 'MERN STACK',
    name: 'Hospital Management',
    description: 'I developed a hospital management website with secure user management, doctor appointments, and role-based functionality, showcasing my proficiency in full-stack development and user-friendly interfaces. The project highlights my ability to manage complex features effectively.',
    link: 'https://medcare-git-main-ranvir-kumar.vercel.app/',
    github: 'https://github.com/Ranvir-git/hospitalManagement',
  },
  {
    image: '/work/car.png',
        category: 'HTML, CSS',
        name: 'Car ShowRoom',
        description: 'As a final-year student, I have a strong grasp of HTML, CSS, and JavaScript, demonstrated by my car showroom website project with responsive design and interactive features. This experience has strengthened my front-end development and web design skills. ',
        link: 'https://car-show-room-git-main-ranvir-kumar.vercel.app/',
        github: 'https://github.com/Ranvir-git/CarShowRoom',
  },
  {
    image: '/work/covid.png',
        category: 'HTML, CSS',
        name: 'Covid_19',
        description: 'As a final-year student, I have expertise in HTML, CSS, and JavaScript, demonstrated by my COVID-19 website project, which provides real-time updates and a responsive design. This project has sharpened my front-end development and web design skills.',
        link: 'https://covid-19-git-main-ranvir-kumar.vercel.app/',
        github: 'https://github.com/Ranvir-git/covid_19',
  },
  {
    image: '/work/sorting.png',
        category: 'javascript',
        name: 'Sorting Visualizer',
        description: 'As a final-year student, I have expertise in HTML, CSS, and JavaScript, demonstrated by my Sorting Visualizer project, which visualizes algorithms like Bubble Sort and Merge Sort with time complexity details, sharpening my front-end and algorithm visualization skills. !',
        link: 'https://sorting-visualizer-opal-gamma.vercel.app/',
        github: 'https://github.com/Ranvir-git/Sorting-Visualizer',
  },
  // {
  //   image: '/work/anandToDo.png',
  //   category: 'javascript',
  //   name: 'Chrome Extension',
  //   description: 'A ToDo Extension for browser',
  //   link: 'https://github.com/abhishekanandok/AnandToDo',
  //   github: 'https://github.com/abhishekanandok/AnandToDo',
  // },
];

//category filter
const uniqueCategories = [
  'all projects', ...new Set(projectData.map((item) => item.category)),
]

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    //if category is 'all projects' return all, else filter by category
    return category === 'all projects' ? project : project.category === category;
  });

  return (
    <section className=' min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My Projects</h2>
        {/* tabs */}
        <Tabs defaultValue={category} className=' mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return <TabsTrigger
                onClick={() => setCategory(category)}
                value={category} key={index} className='capitalize w-[162px] md:w-auto'>{category}</TabsTrigger>
            })}
          </TabsList>
          {/* tabs content */}
          <div className=' text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects;