import openchat from "../assets/images/openchat.png"
import leasehouse from "../assets/images/leasehouse.png"
import hyde from "../assets/images/hyde.png"
import itscope_recruitment from "../assets/images/itscope-recruitment.png"
import imsme from "../assets/images/imsme.png"
import paymentSubscription from "../assets/images/payment subscription.png"
import onlineDictionary from "../assets/images/React Native Apps.png"
import hackflashc from "../assets/images/hackflashc.png"
import campusFoodie from "../assets/images/campus foodie.png"


const projects = [
    { id: 1, title: "IMSME", image: imsme, stacks: ["reactjs", "redux tool kit", "tailwind CSS"], description: "", url: "https://www.imsme.ng/", status: "" },
    {
        id: 2, title: "Payment Subscription", image: paymentSubscription, stacks: ["nodejs", "mongodb", "coinbase", "reactjs", "sendgrid", "nodecron"],
        description: "A subscription platform for payments. Admin can create a plan and users can choose a subscription by making payment with Crypto",
        status: "",
        url:"https://payment-subscription.herokuapp.com/"
    },

    { id: 3, title: "hyde energy", image: hyde, stacks: ["reactjs", "redux"], description: "", url: "https://hydeenergy.netlify.app/" },
    { id: 4, title: "Lease house", image: leasehouse, stacks: ["reactjs", "redux"], description: "", url: "https://leasehouz.com/" },
    {
        id: 5, title: "Online Dictionary", image: onlineDictionary, stacks: ["react native", "oxford dictionary api", "pixabay api"],
        description: "An online dictionary that gives users meaning of words, antonyms, synonyms and corresponding images to strengthen their muscular memory and memorization"
    },

    { id: 6, title: "ITscope Recruitment", image: itscope_recruitment, stacks: ["reactjs"], description: "", url: "https://www.itscope.co.uk/" },
    {
        id: 7, title: "Real Time Open Group Chat", image: openchat, stacks: ["nodejs", "reactjs", "Socket.io", "TailwindCSS"],
        description: `A chat application that allows users connect, send messages, view number of connected or online users, know who is typing, disconnect and many more. The purpose is to explain real time communication in my technical article here:  https://medium.com/geekculture/create-an-open-group-chat-using-expressjs-nodejs-socket-io-reactjs-and-tailwind-css-bf42957600b5`,
        url: "https://oya-chat.herokuapp.com/",
    },
    {
        id: 8, title: "HackFlashC", "image": hackflashc, stacks: ["nextjs", "next-auth", "Xata Database", "Cloudinary", "tailwind CSS"],
        description: "A digital flashcard system for memorization. Built using NextJs server-side, Xata Database, Cloudinary and Multer. It aids in memorization and for educational purpose."
    },
    {
        id: 9, title: "Campus Foodie", "image": campusFoodie, stacks: ["reactjs", "redux", "materialize css", "nodejs", "mongoDB"],
        description: "A food ordering application for students to make some money in line with WHO Sustainable Developmental Goals to elimate poverty and hunger. One of its features is to enable real time tracking of food delivery. Still in progress"
    }
]

export default projects;