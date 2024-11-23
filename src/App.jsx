import React from 'react';
import Home from './components/Home';
import Profile from './components/Profile';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Home 
        title="Accogliente appartamento in centro a Chiesina Uzzanese" 
        description="Un appartamento moderno e spazioso nel cuore della città" 
        imageUrl="link_to_image.jpg" 
        pricePerNight={100} 
      />
      <Profile 
        name="Claudio Monti" 
        bio="Gestisco un bellissimo appartamento in Toscana. Amo viaggiare e conoscere nuove persone!" 
        avatarUrl="https://i.postimg.cc/xd4Xcxwq/IMG-20240620-151108975.jpg" 
      />
      <Contact />
    </div>
  );
};7
import './styles.css';

export default App;

