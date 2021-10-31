import { createContext } from "react";

export const CV = {
  header: {
    name: "João Afonso",
    birthDate: "07/07/1996",
    email: "joaoafonso386@gmail.com",
    number: "926770541",
    shortBio: "Hi! I'm a Front end developer",
  },
  about: {
    title: "Who I'm I?",
    content:
      "I studied marketing and in 2020 started to develop interest in web development. I found this passion that is coding and fell in love with the tech industry. Currently working with front-end techonolgies but my intention is to be a complete developer, being able to create an application from start to finish.",
  },
  skills: [
    {
      title: "Web Design",
      content: "Working on developing layouts for websites",
    },
    {
      title: "Responsive",
      content: "Making layouts adapt to any screen size",
    },
    {
      title: "Development",
      content: "Front to back application building and testing",
    },
    {
      title: "SEO Friendly",
      content: "Working with search engines to optimize performance",
    },
    {
      title: "Graphics Design",
      content: "Creating pixel perfect prototypes to implement",
    },
    {
      title: "Support",
      content: "Able to work in teams to better development environment",
    },
  ],
  education: [
    {
      institution: "ULHT - Universidade Lusófona",
      degree: "Bachelors in Marketing and PR",
      description:
        "First steps as a marketer, helped me choose what I was really was interested about",
    },
    {
      institution: "NOVA IMS",
      degree: "Post-grad in Digital Marketing",
      description:
        "Specific knowledge in digital marketing and digital marketing tools",
    },
  ],
  experience: [
    {
      company: "Youzz",
      jobCategory: "Marketing Influencing",
      description:
        "Developed contacts with influencers and helped create a strong social media presence",
    },
    {
      company: "Caiado Guerreio",
      jobCategory: "Digital Marketing",
      description:
        "Worked as media planner and helped the company to have better visibility online",
    },
  ],
};

export const ContextCV = createContext(CV);
