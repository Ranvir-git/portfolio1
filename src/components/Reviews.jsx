'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';


const reviewsData = [
    {
        avatar: '/reviews/pranjal.jpg',
        name: 'Pranjal Verma',
        job: 'College Student',
        review: 'Ranvir, it was wonderful experience working with you. you have deeper experience in web dev along with that you are good team leader too. By your guidance and mentorship i got a placed in good company. Thankyou for your helpfull nature and kindness. -> The person has a positive approach towards life. ->A perfect team player.Kudos to Ranvir Kumar:) !!!'
    },
    {
        avatar: '/reviews/himanshu.jpg',
        name: 'Himanshu Gupta',
        job: 'College Student',
        review: 'My friend is truly exceptional, blending humility, calmness, sharp intellect, and quick wit. They handle challenges with grace, offering insightful solutions. Their kindness, empathy, and attentiveness make them reliable and supportive. This unique combination makes them an admirable and wonderful friend.'
    },
    {
        avatar: '/reviews/raj1.jpg',
        name: 'Raj Gupta',
        job: 'College Student',
        review: 'Working with Ranvir on my website was a fantastic experience. He delivered a visually impressive and user-friendly site, capturing exactly what I envisioned. Ranvir was professional, insightful, and very responsive, making the entire process smooth and enjoyable. I am excited about future projects together. Highly recommended!'
    },
    {
        avatar: '/reviews/shubham.jpg',
        name: 'Shubham Makur',
        job: 'College Student',
        review: 'Ranvir, it was wonderful experience working with you. you have deeper experience in web dev along with that you are good team leader too. By your guidance and mentorship i got a placed in good company. Thankyou for your helpfull nature and kindness. -> The person has a positive approach towards life. ->A perfect team player.Kudos to Ranvir Kumar:) !!!'
    },
    {
        avatar: '/reviews/ashu.jpg',
        name: 'Ashutosh Gaur',
        job: 'College Student',
        review: 'My friend is truly exceptional, blending humility, calmness, sharp intellect, and quick wit. They handle challenges with grace, offering insightful solutions. Their kindness, empathy, and attentiveness make them reliable and supportive. This unique combination makes them an admirable and wonderful friend.'
    },
]

const Reviews = () => {
    return (
        <section className=' mb-12 xl:mb-32'>
            <div className="container mx-auto">
                <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
                {/* slider */}
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1400: { slidesPerView: 3 },
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    className='h-[550px]'
                >
                    {reviewsData.map((person, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                                    <CardHeader className='p-0 mb-10'>
                                        <div className=' flex items-center gap-x-4'>
                                            {/* image */}
                                            <Image src={person.avatar} width={70} height={70} alt='' priority className='rounded-full'/>
                                            {/* name */}
                                            <div className=' flex flex-col'>
                                                <CardTitle>{person.name}</CardTitle>
                                                <p>{person.job}</p>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardDescription className='md:text-lg text-sm text-muted-foreground'>
                                        {person.review}
                                    </CardDescription>
                                </Card>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default Reviews