'use client';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from './ui/button';
import ProjectCard from './ProjectCard';


const projectData = [
    {
        image: '/work/port.png',
        category: 'next js',
        name: 'Protfolio',
        description: 'I have a strong foundation in the MERN stack, developing responsive web applications and RESTful APIs, with experience in Git and cloud deployment. Eager to apply my skills in a challenging role, I am committed to continuous growth in the tech industry.',
        link: '#',
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
];

const Work = () => {
    return (
        <section className=' relative mb-12 xl:mb-48'>
            <div className="container mx-auto">
                {/* text */}
                <div className="flex max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex-col justify-center items-center xl:items-start">
                    <h2 className=' section-title mb-4'>Latest Projects</h2>
                    <p className='subtitle mb-8'>Discover My Latest Projects: Experience a quick tour of my recent work in sleek slides. See firsthand how my expertise in MERN Stack and diverse programming languages brings innovation to life.</p>
                    <Link href='/projects'>
                        <Button>All projects</Button>
                    </Link>
                </div>
                {/* slider */}
                <div className=' xl:max-w-[1000px] xl:absolute right-0 top-0'>
                    <Swiper
                        className='h-[500px]'
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                        {/* show only the first 4 */}
                        {projectData.slice(0, 4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Work;