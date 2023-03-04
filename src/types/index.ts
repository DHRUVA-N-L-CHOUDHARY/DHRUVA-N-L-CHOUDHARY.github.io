export type ProjectType = "main" | "unfinished" ;

export type Project = {
  id: number;
  title: string;
  src?: string;
  description?: string;
  techList: string[];
  liveUrl?: string;
  repoUrl: string;
  type: ProjectType;
  url?: string;
};
