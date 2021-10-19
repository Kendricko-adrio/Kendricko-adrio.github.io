import book from "../Assets/book-kn.png";
import konnect from "../Assets/konnect.jpg";
import green from "../Assets/greenworld.png";
import front from "../Assets/staem-f.png";

interface ProjectDetail {
    image: string,
    title: string,
    desc: string,
    webLink?: string,
    codeLink?: string
}


const getAllProject = () => {
    const data: ProjectDetail[] = [
        {
            image: book,
            title: "Book KN",
            desc: "First time learn to use react typescript and react hook and fetching data from public API",
            webLink: "https://book-kn.netlify.app/",
            codeLink: "https://github.com/Kendricko-adrio/book-post-training"
        },
        {
            image: konnect,
            title: "Konnect",
            desc: "Build a mini social media and publish it to play store. We made it with native android and firebase",
            webLink: "https://play.google.com/store/apps/details?id=edu.bluejack20_2.Konnect",
            codeLink: "https://github.com/Kendricko-adrio/Konnect"
        },
        {
            image: green,
            title: "Green World Global",
            desc: "My first job as a freelancer web developer with 2 of my friends(Still under development)",
            webLink: "http://greenworldglobal.co.id/",
        },
        {
            image: front,
            title: "Staem(Frontend)",
            desc: "Staem is the clone of steam. Staem is an assesment that i have to take when i was a laboratory assistant using Angular as the framework",
            webLink: "https://staem-kn.netlify.app/",
            codeLink: "https://github.com/Kendricko-adrio/TPA-Web-Frontend"
        },
        {
            image: front,
            title: "Staem(Backend)",
            desc: "This is the backend of the Staem web. I build it using go programming language with gqlgen as a framework. This backend is using graphql to fetch data and also websocket to handle realtime chat",
            webLink: "https://staem-kn.herokuapp.com/",
            codeLink: "https://github.com/Kendricko-adrio/TPA-Web-Backend",
        },
    ];
//https://staem-kn.netlify.app/
    return data;


}

export default getAllProject;
