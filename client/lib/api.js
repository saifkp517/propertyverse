import { NextResponse } from "next/server";



export const sendContactForm = async (data) => fetch('/api/contact', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});

export const getDataFromWebsite = () => fetch('/api/scrape', {method: "GET"});


