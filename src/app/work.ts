export interface Work {
  name: string;
  description: string;
  image?: string;
  link?: string;
  demo?: string;
  year?: string;
  technologies?: string[];

}

export interface WorkSection {
  label: string;
  projects: Work[];
}