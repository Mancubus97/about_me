import React from 'react';
import ImageSlideshow from './ImageSlideshow.tsx';
import type { Project } from '../types/project.ts'
import plants1 from '../assets/plants1.jpg'
import plants2 from '../assets/plants2.jpg'
import { useNavigate } from 'react-router-dom'

export default function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="contact-row">
        <button className="nav-button project-button">
          Contact
        </button>
        <div className="">
          <textarea placeholder="Tell me about your project!" rows={16} cols={100} />
        </div>
      </div>
    </section>
  );
}
