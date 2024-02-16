import { NavBar } from "./NavBar/Nav";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export const Home = ()=>{
  return(<>
        <NavBar/>
       <Header/>
         <Skills/>
       <Projects/>  
       <Contact/>
      

        </>)
}


