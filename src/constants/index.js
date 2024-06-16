import project1 from "../assets/projects/kalapay.webp";
import project2 from "../assets/projects/pb2.jpg";
import project3 from "../assets/projects/dg.png";
import project4 from "../assets/projects/sdo.png";
import project5 from "../assets/projects/ads.png";

export const HERO_CONTENT = `I am a passionate freelance full stack web developer with great passion towards coding in HTML, CSS, JavaScript, Bootstrap, React JS, Tailwind CSS, PHP, and MySQL. I have expertise in creating interactive and reliable web applications that create a great user experience. Having a good blend of front end and back end skills, I help to build concepts into efficient and sustainable web applications.  `;

export const ABOUT_TEXT = `
My name is Melvin Giovanni B. Domingo, a 20-year-old second-year college student currently pursuing a Bachelor’s degree in Information Technology. My journey into programming began during a senior high school capstone project in 2022 when I discovered my interest in web development. This interest captivated me and made me curious, leading me to spend countless hours learning, developing, and experimenting with various aspects of web development.

Fast forward to today, I find myself fully immersed in the technology space, thoroughly enjoying it. I actively seek to improve my knowledge and skills across different technologies and try to gain as much experience as possible in this field. Therefore, my main goals are to improve professional competencies and create useful and efficient projects.
 

`;

export const EXPERIENCES = [
  {
    year: "May - Jun 2024",
    role: "Full-Stack Developer (Project)",
    company: "Batanes State College (HTM)",
    description: `Designed and developed an e-commerce website in partnership with the HTM Department to showcase authentic Ivatan products. I managed everything from creating an aesthetic, user-friendly interface to setting up the backend systems. The site highlights the unique culture of the Ivatans and offers a secure, easy shopping experience. This experience demonstrates my skills in full-stack development and my ability to create effective, intuitive, responsive e-commerce websites.`,
    technologies: ["React", "CSS", "Tailwind", "JavaScript", "PHP", "mySQL"],
  },
  {
    year: "April - May 2022",
    role: "Front-End Developer (Capstone)",
    company: "DepED Batanes",
    description: `Designed and developed the user interface of the website, ensuring an intuitive, user-friendly, and engaging experience. Leveraging my skills in HTML, CSS, and JavaScript, I collaborated closely with our team to translate requirements into functional and visually appealing web pages. This experience allowed me to enhance my proficiency in frontend technologies while contributing to a project aimed at improving online transparency for the Department of Education in the Batanes region.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "Kalapay E-Commerce Website",
    image: project1,
    description: `This project is a fully functional e-commerce website, showcasing features like User Authentication, Shopping Cart, Checkout Process, Order Management, Admin Panel, Responsive Design and many more. The frontend is developed using React, JavaScript, Tailwind CSS, and additional custom CSS, ensuring a seamless and responsive user experience. Axios is utilized for API requests to a backend powered by PHP and a MySQL database, facilitating robust data handling and server interactions. This comprehensive solution provides a complete and efficient e-commerce platform.`,
    technologies: [
      "React",
      "JavaScript",
      "Tailwind",
      "CSS",
      "PHP",
      "mySQL",
      "Axios",
      "Phpmailer",
      "Material UI",
      "Ant Design",
      "Responsive Design",
    ],
    url: "http://kalapay.shop/",
  },
  {
    title: "Ofiicial Website of SDO Batanes",
    image: project4,
    description:
      "Designed and developed the frontend of the official website for SDO Batanes using HTML, CSS, JavaScript, and Bootstrap.  This project highlights my proficiency in creating a responsive, user-friendly interface that effectively communicates essential information and resources. By integrating modern web technologies and design principles, I crafted a professional and accessible online presence for SDO Batanes.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Responsive Design",
    ],
    url: "https://depedbatanes.ph/vmcq.php",
  },
  {
    title: "Online Enrollment System",
    image: project5,
    description:
      "A comprehensive solution built with a modern tech stack. For the frontend, I used React, Tailwind CSS, JavaScript, and CSS to create a dynamic and responsive user interface. Axios handles API requests to the backend, which is powered by PHP and MySQL. This project demonstrates my ability to develop a full-fledged application that streamlines the enrollment process, ensuring a seamless experience for users",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind",
      "React Bootstrap",
      "CSS",
      "Axios",
      "PHP",
      "mySQL",
      "Responsive Design",
    ],
    url: "http://melvinsunday.online/",
  },
  {
    title: "Photgraphy Blog",
    image: project2,
    description:
      "A personal project that showcases my passion for capturing moments through the lens. This static website, crafted with HTML, CSS, and JavaScript, reflects my journey as a photographer, featuring galleries of my work, insightful articles, and a glimpse into my creative process.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    url: "https://melvinsunday.github.io/PhotographyBlog/",
  },
  {
    title: "Domingo's Restaurant",
    image: project3,
    description:
      "A reverse-engineered project I built from scratch to test and enhance my web development skills using HTML, CSS, and JavaScript. This site features a sleek design, an interactive menu, and essential information, enhancing the dining experience.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    url: "https://melvinsunday.github.io/Domingo-s/",
  },
];

export const CONTACT = {
  address: "Nuñez Street, Brgy. Kaychanarianan, Basco, Batanes.",
  phoneNo: "+639605307703",
  email: "melvingiovannidomingo649@gmail.com",
  phoneLink: "tel:+639605307703",
  emailLink: "mailto:melvingiovannidomingo649@gmail.com",
};
