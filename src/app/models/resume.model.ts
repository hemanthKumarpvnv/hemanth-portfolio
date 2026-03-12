export interface Experience {
  project: string;
  role: string;
  description: string[];
}

export interface Resume {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  summary: string[];
  skills: string[];
  experience: Experience[];
  achievements: string[];
  education: string;
}