import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import './About.scss';
import { client, urlFor} from '../../client';
import { AppWrapp, MotionWrapp } from '../../wrapper';


const Abouts = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() =>  {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, [])
  
  return (
    <>
      <h2 className="head-text"> I Know That <span> Good Apps</span> <br /> means <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map ((abouts, index) => (
          <motion.div
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: 'tween'}}
          className='app__profile-item'
          key={abouts.title + index}
          >
            <img src={urlFor(abouts.imgUrl)} alt="about.title" />
            <h2 className="bolt-text" style={{marginTop: 20}}> {abouts.title}</h2>
            <p className="p-text" style={{marginTop: 10}}> {abouts.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrapp(
  MotionWrapp(Abouts, 'app__about'),
  'about',
  "app__whitebg"
);