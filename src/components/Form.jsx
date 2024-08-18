"use client";

import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";
import { ArrowRightIcon } from 'lucide-react';
import { addContactForm } from "@/lib/action";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";




const FormSchema = z.object({
    name: z.string().min(1, 'Name is required').max(50),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    message: z.string().min(10, 'Please type your message').max(500),
});




const ContactForm = () => {

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });


    const [state, formAction] = useFormState(addContactForm, undefined);

    const router = useRouter();
    const { toast } = useToast();

    useEffect(() => {
        state?.success && router.push("/");
        if (state?.success) {
            toast({
                title: "Thanks You🙏",
                description: "I shall contact you soon.",
            })
        }
    }, [state?.success, state]);


    const onSubmit = (values) => {
        formAction(values);
    };



    return (
        <Form {...form}>
            <div className=' flex flex-col gap-y-4'>

                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>

                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Your Name</FormLabel>
                                <FormControl>
                                    <Input placeholder='ex- John Dev' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500" >Email</FormLabel>
                                <FormControl>
                                    <Input placeholder='mail@example.com' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='message'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="ex- hi , i wana to build something...."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button className='flex items-center gap-x-1 max-w-[166px] mt-2' type='submit' >
                        Let&apos;s Talk
                        <ArrowRightIcon size={20} />
                    </Button>
                </form>

            </div>
        </Form>
    );
};

export default ContactForm;
