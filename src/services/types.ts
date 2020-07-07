export interface IUser {
  name: string;
  email: string;
  phone: string;
  location: string;
  github?: string;
  linkedin?: string;
  about?: string;
  specializations: ISpecialization[];
  projects: IProject[];
}

export interface IProject {
  name: string;
  description: string;
  code?: string;
  live?: string;
}

export type ISpecialization = string;
