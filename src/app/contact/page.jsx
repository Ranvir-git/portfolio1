import React from 'react'
import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
import { RiWhatsappLine } from 'react-icons/ri';
import ContactForm from '@/components/Form';


export const metadata = {
  title: "Contact",
  description: "Connect with me effortlessly through my contact page, where every message is a step towards turning your ideas into reality. Let's collaborate and bring your projects to life!",
};


const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className=' grid md:grid-cols-2 pt-12 md:h-[480px] mb-6 xl:mb-24'>
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className=' w-[30px] h-[2px] bg-primary'></span>
              Say Hello 👋
            </div>
            <h1 className='h1 max-w-md mb-8'>Let&apos;s Work Together.</h1>
            <p className='subtitle max-w-[400px]'>Connect with me effortlessly through my contact page, where every message is a step towards turning your ideas into reality. Let&apos;s collaborate and bring your projects to life!</p>
          </div>
          {/* illustration */}
          <div className=' hidden md:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div>
        </div>
        {/* info text & form */}
        <div className=' grid md:grid-cols-2 mb-24 xl:mb-32'>
          {/* info text */}
          <div className=' flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className=' text-primary' />
              <div>ranvirkr0406@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className=' text-primary' />
              <div>Samastipur, Bihar, India</div>
            </div>
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className=' text-primary' />
              <div>+91 9142704511</div>
            </div>
            <div className="flex items-center gap-x-8">
              <RiWhatsappLine size={22} className=' text-primary' />
              <div>+91 9142704511</div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact;