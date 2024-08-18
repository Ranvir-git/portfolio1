import React from 'react'
import Link from "next/link";
import { Download, Send } from 'lucide-react';
import {
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
    RiBriefcase4Fill
} from 'react-icons/ri';
import { Button } from './ui/button';
import Socials from './Socials';
import DevImg from './DevImg';
import Badge from './Badge';

const Hero = () => {
    return (
        <section className=' py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
            <div className=' container mx-auto'>
                <div className=' flex justify-between gap-x-8'>
                    {/* text */}
                    <div className=' flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center lg:text-left'>
                        <div className=' text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Web Developer</div>
                        <h1 className='h1 mb-4'>Hello, My Name is Ranvir Kumar</h1>
                        <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>Welcome to the portfolio of Ranvir Kumar, a proficient MERN Stack Developer specializing in JavaScript, MongoDB, Express.js, Reactjs, Nextjs, and Node.js. Explore my projects and services now.</p>
                        {/* button */}
                        <div className=' flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                            <Link href='/contact'><Button className='gap-x-2'>Contact me <Send size={18} /></Button></Link>
                            <Link href='https://drive.google.com/file/d/1bHONUatrERCcXCcXOGJaJvhaHal91rwZ/view?usp=sharing' target="_blank" download="Ranvir SDE Resume"><Button variant='secondary' className='gap-x-2'>Download CV <Download size={18} /></Button></Link>
                        </div>
                        {/* socials */}
                        <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconStyles='text-foreground text-[22px] hover:text-primary transition-all' />
                    </div>
                    {/* image */}
                    <div className=' hidden lg:flex relative'>
                        {/* badge */}
                        {/* <Badge
                            containerStyles='absolute top-[24%] -left-[5rem]'
                            icon={<RiBriefcase4Fill />}
                            endCountNum={2}
                            badgeText='+ Years Of Experince'
                        /> */}
                        <Badge
                            containerStyles='absolute top-[80%] -left-[1rem]'
                            icon={<RiTodoFill />}
                            endCountNum={6}
                            // endCountText='k'
                            badgeText='Finished Projects'
                        />
                        {/* <Badge
                            containerStyles='absolute top-[55%] -right-8'
                            icon={<RiTeamFill />}
                            endCountNum={8}
                            // endCountText='k'
                            badgeText='Happy Clients'
                        /> */}
                        <div className=' bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
                        <DevImg containerStyles=' bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/hero/developer.png' />
                    </div>
                </div>
                {/* icon */}
                <div className='flex absolute left-2/4 bottom-12 animate-bounce'>
                    <RiArrowDownSLine className=' text-3xl text-primary' />
                </div>
            </div>
        </section>
    )
}

export default Hero;