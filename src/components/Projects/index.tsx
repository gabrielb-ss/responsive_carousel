import { Container } from './styles';
import { Aside } from '../Aside';
import { useState } from 'react';
import { SlideShow } from '../SlideShow';
import { ProjectsNavBar } from '../ProjectsNavBar';

export type Project = { 
  title: string,
  features: {
    tools: string[],
    description: string,
    feats: string[]
  },
}

export function Projects () {
  const [currProject, setCurrProject] = useState(0);

  const projects: Project[] = [{ 
    title: "dtmoney",
    features: {
      tools: ["reactjs", "typescript", "styledComponents", "vscode", "github"],
      description: "Aplicação de gerenciamento de finanças",
      feats: ["feat1", "feat2", "feat3"]
    }
    
  }, { 
    title: "jd15",
    features: {
      tools: ["godot", "vscode", "github"],
      description: "Jogo dos 15",
      feats: ["feature one", "feature two", "feature three"]
    }
  }];

//mudar aside style para estilo condicional usando o styled-componets
  return (
    <Container>
      <Aside
        features={projects[currProject].features}
        type={"features"}
      />

      <SlideShow
        projectName={projects[currProject].title}
        currProject={currProject}
      />

      <Aside
        features={projects[currProject].features}
        type={"tools"}
      />

      <ProjectsNavBar 
        currProject={currProject}
        projects={projects} 
        setCurrProject ={setCurrProject} 
      />
    </Container>
  );
}