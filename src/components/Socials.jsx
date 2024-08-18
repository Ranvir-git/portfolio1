'use client';

import {
    RiYoutubeFill,
    RiLinkedinFill,
    RiGithubFill,
    RiTwitterXFill
} from 'react-icons/ri';
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

// import { SiLinktree } from "react-icons/si";


import Link from 'next/link';

const icons = [
    {
        path: 'https://github.com/Ranvir-git',
        name: <RiGithubFill />,
    },
    {
        path: 'https://www.linkedin.com/in/ranvir-kumar-0b5767222/',
        name: <RiLinkedinFill />,
    },
    // {
    //     path: 'https://twitter.com/abhishekanandok',
    //     name: <RiTwitterXFill />,
    // },
    {
        path: 'https://www.youtube.com/@RanvirKumar-mc8fd',
        name: <RiYoutubeFill />,
    },
    {
        path: 'https://www.instagram.com/ranvirkumar8950/?hl=en',
        name: <FaInstagram />,
    },
    {
        path:'https://www.facebook.com/profile.php?id=100029372868989',
        name: <FaSquareFacebook />,
    }
];

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => {
                return (
                    <Link href={icon.path} key={index} target="_blank">
                        <div className={`${iconStyles}`}>{icon.name}</div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Socials;