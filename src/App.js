import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Default_Header.js';
import Footer from './Default_Footer.js';

import Home from './Home.js';
import Projects from './Projects.js';
import About from './About.js';
import Contact from './Contact.js';

import Project_Page from './projects/Project_Page.js';
import Blog_Post_Page from './blog/Blog_Post_Page.js';

import './App.css';

function App() {
  return (
    <body>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blog/thoughts-from-early-in-my-career" element={<Blog_Post_Page postSlug="thoughts-from-early-in-my-career"/>}></Route>
          <Route path="/projects/volume_by_speed" element={<Project_Page projectin="volumeBySpeed"/>}></Route>
          <Route path="/projects/photo_sort" element={<Project_Page projectin="photoSort"/>}></Route>
          <Route path="/projects/zero_four_website" element={<Project_Page projectin="zeroFourTechWebsite"/>}></Route>
          <Route path="/projects/alexhixson_com" element={<Project_Page projectin="alexhixson.com"/>}></Route>
          <Route path="/projects/morsecoding" element={<Project_Page projectin="morsecoding"/>}></Route>
          <Route path="/projects/music_translator" element={<Project_Page projectin="musicTranslator"/>}></Route>
          <Route path="/projects/cpuScheduling" element={<Project_Page projectin="cpuScheduling"/>}></Route>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </body>
  );
}

export default App;
