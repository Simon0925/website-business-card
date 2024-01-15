interface aboutMe {
    text: string;
    title: string;
  }
  
  interface HardSkills {
    skills: string[];
    title: string;
  }
  
  interface softSkills {
    skills: string[];
    title: string;
  }
  
  interface languages {
    languagesData: { language: string }[];
    title: string;
  }
  
  interface leftSide {
    aboutMe: aboutMe;
    hardSkills: HardSkills;
    languages: languages;
    softSkills: softSkills;
  }
  
  interface HeaderData {
    contactData: { element: string; imgSrc: string; link: string; alt: string }[];
    name: string;
    speciality: string;
    surname: string;
  }
  
  interface rightSide {
    educationAndTraining: string[];
    headerData: HeaderData;
    hobbiesAndInterests: string;
    workExperiences: {
      responsibilities: string[];
      title: string;
      p: string;
      roles: {
        p: string;
        role: string;
        responsibilities?: string[];
      }[];
    }[];
  }
  
  interface ResumeData {
    resume: {
      leftSide: leftSide;
      rightSide: rightSide;
    };
  }
  
export default ResumeData;
  