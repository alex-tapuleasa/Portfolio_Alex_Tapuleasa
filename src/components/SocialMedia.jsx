import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="https://github.com/alex-tapuleasa" target='_blank' rel='noreferrer'><BsGithub /></a>
        </div>
        <div>
            <a href="https://www.facebook.com/tapuleasa.alexandru" target='_blank' rel='noreferrer'><FaFacebookF /></a>
        </div>
        <div>
            <BsLinkedin />
        </div>
    </div>
  )
}

export default SocialMedia