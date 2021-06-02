import "./App.css";
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials";
import Hire from "./Components/Hire";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Panel from "./Components/Panel";
import Project from "./Components/Project";
import AboutPanel from "./Components/AboutPanel";
import SkillsPanel from "./Components/SkillsPanel";
import BlogPanel from "./Components/BlogPanel";
import AddSkill from "./Components/AddSkill";
import Blog from './Components/Blog';
import AddBlog from './Components/AddBlog'
function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <About />
            <Skills />
            <Testimonials />
            <Project/>
            <Hire />
            <Footer />
          </Route>
          <Route exact path="/Skills" component={Skills}>
            <About />
            <Skills />
            <Testimonials />
            <Project/>
            <Hire />
            <Footer />
          </Route>
          <Route exact path="/testimonials">
            <About />
            <Skills />
            <Testimonials />
            <Project/>
            <Hire />
            <Footer />
          </Route>
          <Route exact path="/Blog">
            <Blog/>
          </Route>
          <Route exact path="/Footer">
            <About />
            <Skills />
            <Testimonials />
            <Project/>
            <Hire />
            <Footer />
          </Route>
          <Route exact path="/Panel">
            <Panel/>
            <AboutPanel/>
          </Route>
          <Route exact path="/Panel/AboutPanel">
            <Panel/>
            <AboutPanel/>
          </Route>

          <Route exact path="/Panel/SkillsPanel">
            <Panel/>
            <SkillsPanel/>
          </Route>
          <Route exact path="/Panel/BlogPanel">
            <Panel/>
            <BlogPanel/>
          </Route>

          <Route exact path="/Panel/AddSkill">
            <Panel/>
            <AddSkill/>
          </Route>

          <Route exact path="/Panel/AddBlog">
            <Panel/>
            <AddBlog/>
          </Route>

          

          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
