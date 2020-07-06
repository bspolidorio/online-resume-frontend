export interface IProject {
  name: string;
  description: string;
  code?: string;
  live?: string;
}

export interface IUser {
  name: string;
  email: string;
  phone: string;
  location: string;
  github?: string;
  linkedin?: string;
  about?: string;
}

export interface ISpecialization {
  name: string;
}
