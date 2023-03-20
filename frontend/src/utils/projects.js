import openchat from "../assets/images/openchat.png"
import leasehouse from "../assets/images/leasehouse.png"
import hyde from "../assets/images/hyde.png"
import itscope_recruitment from "../assets/images/itscope-recruitment.png"
import imsme from "../assets/images/imsme.png"
import paymentSubscription from "../assets/images/payment subscription.png"
import onlineDictionary from "../assets/images/React Native Apps.png"
import hackflashc from "../assets/images/hackflashc.png"
import campusFoodie from "../assets/images/campus foodie.png"
import twitchers from "../assets/images/twitchers.png"
import project_mgt from "../assets/images/project-mgt.png"

const projects = [
    {
        id: 1, title: "IMSME", image: imsme, stacks: ["reactjs", "redux tool kit", "tailwind CSS"],
        description: "iMSME is a business user platform that aims to enhance the SME experience. We support business-led innovation in all sectors, technologies, and across all regions. We help businesses grow through the development and commercialisation of new products, processes, and services, supported by an outstanding innovation ecosystem that is agile, inclusive, and easy to navigate. With the iMSME ecosystem, businesses can focus on their primary task by letting us handle most of the requirements that take up time & resources.",
        url: "https://www.imsme.ng/", status: ""
    },
    {
        id: 2, title: "Payment Subscription", image: paymentSubscription, stacks: ["nodejs", "mongodb", "coinbase", "reactjs", "sendgrid", "nodecron"],
        description: "A subscription platform for payments. Admin can create a plan and users can choose a subscription by making payment with Crypto",
        status: "",
        url: "https://payment-subscription.onrender.com"
    },

    {
        id: 3, title: "hyde energy", image: hyde, stacks: ["reactjs", "redux"],
        description: "A platform that allows users make orders and purchases to Hyde Energy limited. Individuals, distrubutors or commercial are users of the system",
        url: "https://hydeenergy.netlify.app/"
    },
    {
        id: 4, title: "Lease house", image: leasehouse, stacks: ["reactjs", "redux"],
        description: "As a business, we offer finance leases to customers who require financing to buy the assets on display, paying conveniently over an agreed period of time. We also support the outright purchase of goods and services. At Leasehouz, customers enjoy the convenience of browsing for choice products, selecting preferred items and processing leases with the aim to gain possession, use and eventually own the assets. Also available are other financial and non financial services products e.g. motor insurance, plant and machinery, home insurance, life insurance, medical insurance, investments etc. It is a place where vendors, insurers, financing partners and other support service providers come together to provide very attractive offerings to the market. At Leasehouz, you will find on display, various types of equipment (personal and business assets) sold by carefully selected dealers, their starting prices and possible installment or rental payments.", url: "https://leasehouz.com/"
    },
    {
        id: 5, title: "Online Dictionary", image: onlineDictionary, stacks: ["react native", "oxford dictionary api", "pixabay api"],
        description: "An online dictionary that gives users meaning of words, antonyms, synonyms and corresponding images to strengthen their muscular memory and memorization",
        url: "https://github.com/Theodore-Kelechukwu-Onyejiaku/React-Native-Online-Dictionary-App-with-Image-Result"
    },

    {
        id: 6, title: "ITscope Recruitment", image: itscope_recruitment, stacks: ["reactjs"],
        description: "A section for recruiting talents. Built with EmailJs and React", url: "https://www.itscope.co.uk/"
    },
    {
        id: 7, title: "Real Time Open Group Chat", image: openchat, stacks: ["nodejs", "reactjs", "Socket.io", "TailwindCSS"],
        description: `A chat application that allows users connect, send messages, view number of connected or online users, know who is typing, disconnect and many more. The purpose is to explain real time communication in my technical article here:  https://medium.com/geekculture/create-an-open-group-chat-using-expressjs-nodejs-socket-io-reactjs-and-tailwind-css-bf42957600b5`,
        url: "https://oya-chat.onrender.com/",
    },
    {
        id: 8, title: "HackFlashC", "image": hackflashc, stacks: ["nextjs", "next-auth", "Xata Database", "Cloudinary", "tailwind CSS"],
        description: "A digital flashcard system for memorization. Built using NextJs server-side, Xata Database, Cloudinary and Multer. It aids in memorization and for educational purpose.",
        url: "https://hackmamba-xata-cloudinary-project.vercel.app/"
    },
    {
        id: 9, title: "Campus Foodie", "image": campusFoodie, stacks: ["reactjs", "redux", "materialize css", "nodejs", "mongoDB"],
        description: "A food ordering application for students to make some money in line with WHO Sustainable Developmental Goals to elimate poverty and hunger. One of its features is to enable real time tracking of food delivery. Still in progress",
        url: "https://campus-foodie.netlify.app/"
    },
    {
        id: 10, title: "Twitchers", "image": twitchers, stacks: ['jquery', 'tailwind css', "leaflet map", 'html', "css"],
        description: "Twitcher is for people who love birds and take pictures of birds.",
        url: "https://twitchers.netlify.app/"
    },
    {
        id: 11, title: "Project Management App", "image": project_mgt, stacks: ['GraphQL', "ReactJs", "Tailwind CSS", "NodeJS", "MongoDB"],
        description: "Project Management app built using GraphQL, NodeJs, MongoDB and ReactJs",
        url: "https://project-mgt.onrender.com/"
    }
]

export default projects;