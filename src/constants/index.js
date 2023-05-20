import { 
    parking,
    mansion,
    apartment1,
    house,
    apartment2,
    apartment3,
} from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
      },
    {
      id: "about",
      title: "About",
    },
    {
      id: "services",
      title: "Services",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
  ];

  const services = [
    {
      title: "Architecture",
      icon: apartment2,
    },
    {
      title: "Design",
      icon: mansion,
    },
    {
      title: "Plan",
      icon: parking,
    },
    // {
    //   title: "Project Mangement",
    //   icon: creator,
    // },
  ];

  const projects = [
    {
      image: apartment1,  
      title:  "Comet",
      description: "",
    },
    {
        image: apartment2,  
        title:  "Jupiter",
        description: "",
    },
    {
        image: house,  
        title:  "Mercury",
        description: "",
    },
    // {
    //     image: house,  
    //     title:  "Venus",
    //     description: "",
    // },
  ];

  const process = [
    {
      title: "step 1",
      description: "Evaluation and signing of the contract"
    },
    {
      title: "step 2",
      description: "Preparation of work plan"
    },
    {
      title: "step 3",
      description: "implementation of quality work"
    },
    {
      title: "step 4",
      description: "Delivering the project to the client"
    },

  ];

  const featLinks =[
    {
      id: "architecture",
      title: "Architecture"
    },
    {
      id: "construction",
      title: "Construction"
    },
    {
      id: "building",
      title: "Building"
    },
    {
      id: "renovation",
      title: "Renovation"
    },
    {
      id: "interior",
      title: "Interior"
    }
  ];

  const featItems =[
    {
      title: "Our Mission",
      description: ""
    },
    {
      title: "Our Vision",
      description: ""
    },
    {
      title: "Our Values",
      description: ""
    },
  ]

  export { services, projects, process, featLinks, featItems}