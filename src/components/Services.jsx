import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';


const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description: 'Crafting dynamic and responsive websites using MERN stack technologies for seamless user experiences.',
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Api Development',
        description: 'Building robust and efficient APIs to power your applications with seamless integration and communication between systems.',
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'Database Management',
        description: 'Implementing optimized database solutions for efficient data storage, and management, ensuring scalability and performance.',
    },
]

const Services = () => {
    return (
        <section className=' mb-12 xl:mb-36'>
            <div className="container mx-auto">
                <h2 className=' section-title mb-12 xl:mb-24 text-center mx-auto'>My Services</h2>
                {/* grid items */}
                <div className=' grid lg:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8 lg:gap-x-4'>
                    {servicesData.map((item, index) => {
                        return <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                            <CardHeader className='text-primary absolute -top-[60px]'>
                                <div className="flex w-[140px] h-[80px] bg-white dark:bg-background justify-center items-center">{item.icon}</div>
                            </CardHeader>
                            <CardContent className='text-center'>
                                <CardTitle className='mb-4'>{item.title}</CardTitle>
                                <CardDescription className='md:text-lg text-sm'>{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services;