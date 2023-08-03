import React from 'react';
import {BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://www.linkedin.com/in/arun-kumar-9771b1127/">
             <BsLinkedin />
            </a>
        </div>
        <div>
            <a href="https://www.instagram.com/arrow_a9/">
              <BsTwitter />
            </a>
        </div>
        <div>
            <a href="https://www.instagram.com/arrow_a9/">
              <BsInstagram />
            </a>
        </div>
    </div>
  )
}

export default SocialMedia;