export const PERSONAL_INFO = {
  name: "Pabitra Jiban Maity",
  title: "Generative AI | Full Stack Development | Cloud | RPA",
  email: "write2pabitra@gmail.com",
  phone: "+918967717327",
  location: "Kolkata, India",
  linkedin: "linkedin.com/in/pabitra-jiban",
  github: "github.com/pabitra-maity",
  portfolio: "pabitra-maity.dev"
}

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export const SKILLS = {
  "Programming Languages": ["C", "Python", "Java", "JavaScript", "TypeScript"],
  "Framework and Web Technology": ["React.js", "Next.js", "Spring Boot", "Node.js", "Express.js"],
  "Generative AI Model and Platform": ["GPT-3.5-turbo", "GPT-4", "Llama", "Hugging Face", "Sage Maker", "Kore.ai XO Platform"],
  "Cloud Technology (AWS)": ["AWS Textract", "Lambda", "CloudFront", "S3", "Sage Maker", "DynamoDB", "Bedrock"],
  "DevOps Essentials": ["Docker", "Kubernetes", "Jenkins", "Git", "Bitbucket", "CI/CD"],
  "RPA Tools And Technology": ["UiPath", "Pega Robotics", "Power Automate", "Automation Anywhere"]
}

export const EXPERIENCE = [
  {
    title: "Associate - Projects",
    company: "Cognizant",
    period: "18th Feb 2025 – Present",
    location: "Kolkata",
    description: [
      "Generative AI Based Product Development",
      "Prompt Engineering and RAG",
      "Integrating Existing RPA Solution with Gen AI"
    ]
  },
  {
    title: "Senior Software Developer",
    company: "Mphasis",
    period: "16th Aug 2021 – 04th Feb 2025",
    location: "Pune",
    description: [
      "Designed, developed, and maintained robust applications using Java and Python",
      "Led the breakdown of projects into modular components, effectively allocating tasks among team members",
      "Actively participated in peer reviews, providing valuable feedback to enhance code quality",
      "Diagnosed and resolved intricate code anomalies in both QA and PROD environments",
      "Set up and maintained a CI/CD pipeline for fast deployment",
      "Established a smooth version control system by connecting Bitbucket with the studio",
      "Proficient in Generative AI on Kore.ai XO Platform, Java, Python, JavaScript, and React.js",
      "Skilled in RPA technologies Pega Robotics, UiPath and Power Automate",
      "Experienced in LLM fine-tuning, prompt engineering, implementing Generative AI in production-grade projects"
    ]
  }
]

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Heritage Institute of Technology (Autonomous)",
    period: "08/2018 – 07/2021"
  },
  {
    degree: "Diploma in Computer Science and Technology",
    institution: "The Calcutta Technical School (Govt.)",
    period: "07/2015 – 07/2018"
  },
  {
    degree: "Higher Secondary",
    institution: "West Bengal Council of Higher Secondary Education",
    period: "03/2013 – 06/2015"
  }
]

export const PROJECTS = [
  {
    title: "DoxPro - Intelligent Document Processing Tool",
    client: "Insurance Domain",
    period: "01/2024 – Present",
    location: "Bangalore",
    description: "A completely Generative AI based document classification and extraction tool.",
    details: [
      "Developing a Gen AI-based intelligent document processing tool using React for front-end design and Lambda in Python for extracting data using AWS Textract",
      "The data is then passed to LLM for extraction and classification using GPT-3.5-turbo and GPT-4 models"
    ],
    technologies: ["React", "Python", "AWS Lambda", "AWS Textract", "GPT-3.5-turbo", "GPT-4"]
  },
  {
    title: "Customer Profile Dashboard",
    client: "Banking Domain",
    period: "01/2024 – Present",
    location: "Bangalore",
    description: "A Gen AI based tool for helping Call Center agents for giving an insight of customer during live call.",
    details: [
      "Developing a Gen AI-based intelligent document processing tool using React for front-end design and Lambda in Python for extracting data using AWS Textract",
      "The data is then passed to LLM for extraction and classification using GPT-3.5-turbo and GPT-4 models"
    ],
    technologies: ["React", "Python", "AWS Lambda", "AWS Textract", "GPT-3.5-turbo", "GPT-4"]
  },
  {
    title: "HR Assistant BOT",
    client: "Mphasis R&D",
    period: "01/2024 – 02/2024",
    location: "Bangalore",
    description: "A Gen AI based HR assistant BOT.",
    details: [
      "Designed, Developed and deployed a HR Assistant AI chatbot using Kore.ai XO Platform",
      "It's a HR assistant Bot which helps HR to get the details, managing details about the employee of the organization"
    ],
    technologies: ["Kore.ai XO Platform", "Generative AI", "Chatbot"]
  },
  {
    title: "Reed Group - Alight BOT Migration and Development Project",
    client: "Insurance Domain",
    period: "03/2023 – 12/2023",
    location: "Bangalore",
    description: "UiPath Based RPA Solution for automating 6 business processes.",
    details: [
      "Developed, unit tested and deployed unattended BOTs using UiPath studio and Orchestrator",
      "Connect UiPath with AWS and drop the files in AWS S3 bucket for document extraction",
      "Post extraction drop the transactions in Orchestrator using REST API call for BOT processing",
      "Debug and fixed the critical issues found at the time of UAT and Production deployment"
    ],
    technologies: ["UiPath", "AWS S3", "REST API", "RPA"]
  },
  {
    title: "UiPath Code Complexity Analyzer",
    client: "Mphasis R&D",
    period: "10/2022 – 02/2023",
    location: "Bangalore",
    description: "UiPath code complexity analyzer tool helps to understand and analyze the complexity of a particular business process.",
    details: [
      "Built a python-based desktop application to access the UiPath XAML files and prepare a report of initial effort estimation, ETA and Complexity of the files",
      "Which will give an initial estimation of project cost and efforts"
    ],
    technologies: ["Python", "UiPath", "XAML", "Desktop Application"]
  },
  {
    title: "BOT Development Project",
    client: "Banking Domain - Charles Schwab Bank",
    period: "10/2021 – 10/2022",
    location: "Bangalore",
    description: "Pega Robotics based RPA Solution for automating 4 business processes.",
    details: [
      "Designed, developed, unit tested and deployed the attended BOTs using Pega Robot Studio and Robot Manager",
      "Developed diverse modules, seamlessly integrating Restful APIs, Web & Desktop applications, and proficiently handling business data",
      "Automated numerous manual workflows in collaboration with fellow developers, saving over 60,000 manual FTE hours/year"
    ],
    technologies: ["Pega Robotics", "RESTful APIs", "RPA"]
  },
  {
    title: "Handwritten Signature Validation",
    client: "Mphasis R&D",
    period: "08/2021 – 10/2021",
    location: "Bangalore",
    description: "It can validate the handwritten signature and provide a confidence score of the matching.",
    details: [
      "Design and developed an internal asset which can access the handwritten signature and can provide the matching percentage",
      "Can be able to predict whether it can be accepted or rejected based on the set threshold"
    ],
    technologies: ["Python", "Computer Vision", "Signature Validation"]
  }
]

export const CERTIFICATIONS = [
  "XO Platform Integration Developer Foundation",
  "Technical Essential of AWS",
  "Java Spring Certified",
  "Industrial IOT on Google Cloud",
  "Pega Robotics System Architect",
  "Automation Anywhere Certified Advanced RPA Professional",
  "Azure OpenAI Certified Gen AI developer"
]

export const LANGUAGES = [
  { language: "English", proficiency: "Proficient" },
  { language: "Hindi", proficiency: "Proficient" },
  { language: "Bengali", proficiency: "Native" }
]

export const ACHIEVEMENTS = [
  {
    title: "Persona Award",
    description: "Individual award for excellent contribution"
  },
  {
    title: "Synergic Workforce",
    description: "Team award for delivering the client project before timeline without any major defects in production"
  },
  {
    title: "Pinnacle Award",
    description: "Individual Award for developing valuable internal assets as a part of Mphasis research and development team"
  },
  {
    title: "Kudos",
    description: "Award for exceptional contribution to the organization"
  }
]

export const QUICK_QUESTIONS = [
  "Tell me about Pabitra's experience",
  "What are his key skills?",
  "Show me his projects",
  "What certifications does he have?",
  "How can I contact him?"
] 