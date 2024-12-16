import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'BookMySpace App',
        description: "Developed a feature-rich native Android app for BookMySpace, a platform that facilitates short-term rentals, co-living/co-working spaces, vacation home bookings, and event hires. Implemented MVVM architecture, integrated third-party APIs (payment gateways, maps, notifications), and optimized app performance with caching. Designed user interfaces using XML layouts to ensure a seamless and intuitive experience for renters searching for properties, making bookings, and communicating directly with property owners. Added co-living, co-working space, and event hire features, enabling users to easily find and book shared spaces and event venues. Streamlined the booking process for both property owners and renters, ensuring transparency, security, and smooth transactions. Collaborated with cross-functional teams to ensure timely feature rollouts and app updates. Key Tools: Kotlin, Java, XML, Retrofit, Firebase, Git, Agile/Scrum",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'Android Application Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'PropertyCare App',
        description: 'Developed a feature-rich native Android app for PropertyCare, a platform that connects property owners with skilled professionals for maintenance and repair services. Implemented MVVM architecture, integrated third-party APIs (payment gateways, maps, notifications), and optimized app performance with caching. Designed user interfaces using XML layouts to ensure a seamless and intuitive experience for property owners submitting service requests, receiving quotes, and scheduling appointments. Enhanced user satisfaction through transparent pricing, efficient communication, and reliable service delivery. Collaborated with cross-functional teams to ensure smooth feature rollouts and timely updates. Key Tools: Kotlin, Java, XML, Retrofit, Firebase, Git, Agile/Scrum',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Android Application Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'BookMyRide App',
        description: 'Developed a feature-rich native Android ride booking app enabling seamless ride booking, fare calculation, and real-time tracking. Implemented MVVM architecture, integrated third-party APIs (payment gateways, maps, notifications), and optimized app performance with caching. Designed user interfaces using XML layouts to ensure an intuitive and responsive experience. Enhanced user satisfaction by providing personalized ride recommendations and collaborated with cross-functional teams to ensure timely feature rollouts. Key Tools: Kotlin, Java, XML, Retrofit, Firebase, Git, Agile/Scrum',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Senior Android Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'OrderMyFood App',
        description: "Developed a feature-rich native Android food booking app enabling online orders, reservations, and real-time tracking. Implemented MVVM architecture, integrated third-party APIs (payments, maps, notifications), and optimized app performance with caching. Designed user interfaces using XML layouts to ensure a responsive and intuitive user experience. Enhanced user retention through personalized recommendations and collaborated with cross-functional teams to ensure smooth feature rollouts. Key Tools: Kotlin, Java, XML, Retrofit, Firebase, Git, Agile/Scrum",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Senior Application Developer',
    },
    {
        id: 5,
        name: 'SkillConnect App',
        description: "Developed a feature-rich native app for SkillConnect, a decentralized social networking platform leveraging blockchain technology. The platform supports global EdTech initiatives by enabling social networking, content sharing, skill development, and sustainable activities. Integrated a point system for rewarding user engagement and token monetization to incentivize platform participation. Designed user interfaces using Kotlin Multiplatform Mobile (KMM) to ensure a seamless and engaging experience across both Android and iOS platforms. Collaborated with cross-functional teams to deliver a secure, transparent, and innovative app that promotes educational and professional growth. Key Tools: Kotlin, Java, KMM, Retrofit, Firebase, Git, Agile/Scrum",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Mobile Development Tech Lead',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },