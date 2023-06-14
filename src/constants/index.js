import { 
    mansion,
    apartment1,
    house,
    apartment2,
    apartment3,
    seaHouse,
    mirror
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
    {
      image: apartment3,  
      title:  "Venus",
      description: "",
    },
    {
      image: seaHouse,  
      title:  "Mars",
      description: "",
    },
    {
      image: mirror,  
      title:  "Haven",
      description: "",
    },
    {
      image: mansion,  
      title:  "Suites",
      description: "",
    },
  ];

  const process = [
    {
      // icon: ,
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

  export {  projects, process, featLinks, featItems}