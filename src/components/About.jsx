import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from 'lucide-react';
import DevImg from "./DevImg";


const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Ranvir Kumar',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+91  9142704511',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'ranvirkr0406@gmail.com@gmail.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 04 jun, 2002',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'B Tech in CSE',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Samastipur, Bihar, India',
    },
]


const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Chitkara University Punjab',
                qualification: 'B Tech in CSE',
                years: '2021 - 2025',
            },
            {
                university: 'Dr S Mishra College Kalyanpur',
                qualification: 'Higher Secondary School (PCM)',
                years: '2019 - 2021',
            },
            {
                university: 'H N High School Barheta',
                qualification: 'High School',
                years: '2018 - 2019',
            },
        ],
    },
    {
        title: 'experience',
        data: [
            // {
            //     company: 'yaleFiesta',
            //     role: 'Software Developer',
            //     years: '2024 - Present',
            // },
            {
                company: 'Google Developer Student Clubs',
                role: 'Member',
                years: '2024 - Present',
            },
            {
                company: 'Code Chef',
                role: 'Member',
                years: '2022 - Present',
            },
        ],
    },
];


const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS , JavaScript',
            },
            {
                name: 'Nodejs, Expressjs',
            },
            {
                name: 'MongoDB, MySQL, SQL',
            },
            {
                name: 'Reactjs, Nextjs',
            },
            {
                name: 'Tailwind, Bootstrap',
            },
            {
                name: 'C++, java',
            },
        ],
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/github.svg',
            },
            {
                imgPath: '/about/postman.svg',
            },
            {
                imgPath: '/about/docker.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/notion.svg',
            },
        ],
    },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };

    return (
        <section className=" xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className=" section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
                <div className=" flex flex-col md:flex-row">
                    {/* image */}
                    <div className=" hidden lg:flex flex-1 relative">
                        <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/about1.png' />
                    </div>
                    {/* tabs */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className='w-full grid lg:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                            </TabsList>
                            {/* tab content */}
                            <div className=" text-lg mt-12 xl:mt-8">
                                {/* personal */}
                                <TabsContent value='personal'>
                                    <div className=" text-center xl:text-left">
                                        <h3 className="h2 md:h3 mb-4">I am a Fresher and final Year Student</h3>
                                        <p className=" subtitle max-w-xl mx-auto xl:mx-0">
                                        I specialize in Computer Science and Engineering at Chitkara University, focusing on delivering dynamic and engaging user experiences through my projects.
                                        </p>
                                        {/* icons */}
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                        <div className="text-primary">{item.icon}</div>
                                                        <div className=" text-sm md:text-lg">{item.text}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        {/* languages */}
                                        <div className="flex flex-col gap-y-2">
                                            <div className="text-primary">Language Skill</div>
                                            <div className="border-b border-border"></div>
                                            <div>English,  Hindi</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value='qualifications'>
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                                        {/* experince and education wraper */}
                                        <div className=" grid md:grid-cols-2 gap-y-8">
                                            {/* experince */}
                                            <div className=" flex flex-col gap-y-6">
                                                <div className=" flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase />
                                                    <h4 className=" capitalize font-medium">
                                                        {getData(qualificationData, 'experience').title}
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className=" flex flex-col gap-y-8">
                                                    {getData(qualificationData, 'experience').data.map((item, index) => {
                                                        const { company, role, years } = item;
                                                        return (
                                                            <div className=" flex gap-x-8 group" key={index}>
                                                                <div className=" h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className=" w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                </div>
                                                                <div className=" md:pr-1">
                                                                    <div className=" font-semibold text-xl leading-none mb-2">{company}</div>
                                                                    <div className=" text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                                                    <div className=" text-base font-medium">{years}</div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                            {/* education */}
                                            <div className=" flex flex-col gap-y-6">
                                                <div className=" flex gap-x-4 items-center text-[22px] text-primary">
                                                    <GraduationCap size={28} />
                                                    <h4 className=" capitalize font-medium">
                                                        {getData(qualificationData, 'education').title}
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className=" flex flex-col gap-y-8">
                                                    {getData(qualificationData, 'education').data.map((item, index) => {
                                                        const { university, qualification, years } = item;
                                                        return (
                                                            <div className=" flex gap-x-8 group" key={index}>
                                                                <div className=" h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className=" w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                </div>
                                                                <div>
                                                                    <div className=" font-semibold text-xl leading-none mb-2">{university}</div>
                                                                    <div className=" text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                                    <div className=" text-base font-medium">{years}</div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value='skills'>
                                    <div className="text-center xl:text-left">
                                        <h3 className=" h3 mb-8">What I Use Everyday</h3>
                                        <div className=" mb-16">
                                            <h4 className=" text-xl font-semibold mb-2">Skills</h4>
                                            <div className="border-b border-border mb-4"></div>
                                            {/* skill list */}
                                            <div>
                                                {getData(skillData, 'skills').data.map((item, index) => {
                                                    const { name } = item;
                                                    return <div className=" w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                                        <div className=" font-medium">{name}</div>
                                                    </div>
                                                })}
                                            </div>
                                        </div>
                                        {/* tools pic */}
                                        <div>
                                            <h4 className=" text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                                            <div className="border-b border-border mb-4"></div>
                                            <div className="flex gap-x-8 justify-center xl:justify-start">
                                                {getData(skillData, 'tools').data.map((item, index) => {
                                                    const { imgPath } = item;
                                                    return (
                                                        <div key={index}>
                                                            <Image src={imgPath} width={48} height={48} alt="" priority />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;