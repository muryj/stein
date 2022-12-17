import img1 from './assets/photos/1.jpeg'
import img2 from './assets/photos/2.jpeg'
import img3 from './assets/photos/3.jpeg'
import img4 from './assets/photos/4.jpeg'
import img5 from './assets/photos/5.jpeg'
import img6 from './assets/photos/6.jpeg'
import img7 from './assets/photos/7.jpeg'
import img8 from './assets/photos/8.jpeg'
import img9 from './assets/photos/9.jpeg'
import img10 from './assets/photos/10.jpeg'
import img11 from './assets/photos/11.jpeg'
import img12 from './assets/photos/12.jpeg'
import main from './assets/photos/main.jpeg'

const logotext = "STEIN";
const meta = {
    title: "Olga Stein",
    description: "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Olga Stein",
    animated: {
        first: "I am artist",
        second: "I run my own art studio",
        third: "I am ukrainian",
    },
    description: "Hello and welcome to my website! My name is Olga and I am artist from Kyiv, Ukraine. Here you can find everything about me!",
    your_img_url: main,
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I started my career as an artist restorer. Now I am running my own studio, I am creating art and that's what drives me"
};
const worktimeline = [{
        jobtitle: "Artist Restorer",
        where: "Palacco Bandinelli",
        date: "2015",
    },
    {
        jobtitle: "Artist",
        where: "Stein Studio",
        date: "2017-now",
    },
    {
        jobtitle: "Art Consultant",
        where: "Stein Studio",
        date: "2020-now",
    },
];

const skills = [{
        name: "skill1",
        value: 90,
    },
    {
        name: "skill2",
        value: 85,
    },
    {
        name: "skill3",
        value: 80,
    },
    {
        name: "skill4",
        value: 60,
    },
    {
        name: "skill5",
        value: 85,
    },
];

const exhibitions = [{
        title: "Vienna Kunstlerhaus",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Paris",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Cyprus",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: img1,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: img2,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: img3,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: img4,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: img5,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: img6,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: img7,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: img8,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: img9,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: img10,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: img11,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: img12,
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "stein2studio@gmail.com",
    YOUR_FONE: "+38(063)-435-22-68",
    description: "Please contact me regarding any questions you have using this form.",
    // creat an emailjs.com account
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    facebook: "https://www.facebook.com/olga.stein.161",
    linkedin: "linkedin.com/in/olga-stein-30aba4240",
    twitter: "https://twitter.com/_Olga_Stein_",
    instagram: "instagram.com/asteinart?igshid=YmMyMTA2M2Y= ",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    exhibitions,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
