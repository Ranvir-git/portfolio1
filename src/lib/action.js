"use server";

import { Contact } from "../models/contact";
import { connectToDB } from "./connectToDB";


export const addContactForm = async (prevState, formData) => {
    try {
        connectToDB();
        const newContact = new Contact(formData);

        await newContact.save();
        console.log("saved to db");
        return { success: true };

    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};