import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import { app } from './data';
import Courses from './components/Courses';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

// class App extends React.Component {
// const ({image_background_1}) = hero
//   render() {
//     return (
//       <div>
//         const {image_background_1} = header;
//         <div className="flex_2" style={{ backgroundImage: `url(${image_background_1})` }}></div>
//         <Header />
//         <main>
//           <Hero />
//         </main>
//       </div>
//     );
//   }
// }

const App = () => {
  const { image_background_1, image_background_2 } = app;
  return (
    <div>
      <div className="Box_App">
        <div
          className="background_1"
          style={{ backgroundImage: `url(${image_background_1})` }}></div>
      </div>
      <div className="Box_App">
        <div
          className="background_2"
          style={{ backgroundImage: `url(${image_background_2})` }}></div>
      </div>

      <main>
        <Header />
        <Hero />
        <About />
        <Advantages />
        <Courses />
        <Reviews />
        <Footer />
      </main>
    </div>
  );
};

export default App;
