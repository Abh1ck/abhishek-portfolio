import { useState } from 'react';
import './GRISection.css';

const griSlides = [
  { title: 'GRI Operations Co-Lead', label: 'ROLE · 2026–2027', description: 'A visual from my Operations Co-Lead role with the Centre for Grassroots Research and Innovation.', image: '/images/gri-role.jpeg', alt: 'GRI Operations Co-Lead role poster' },
  { title: 'Teacher’s Day & Engineer’s Day', label: 'GRI COMMUNITY · PHOTO 01', description: 'A group moment with students and faculty during the campus celebration.', image: '/images/grp1.png', alt: 'Students and faculty gathered outside a campus building' },
  { title: 'GRI Community', label: 'GRI COMMUNITY · PHOTO 02', description: 'A group photograph capturing the people and community behind the work.', image: '/images/grp2.png', alt: 'A larger student and faculty group photograph' },
];

export default function GRISection() {
  const [activeGri, setActiveGri] = useState(0);
  const activeSlide = griSlides[activeGri];
  const goTo = (index) => setActiveGri((index + griSlides.length) % griSlides.length);

  return (
    <section className="gri-section section-wrap section-block" id="gri">
      <div className="section-kicker" data-reveal><span>06 / GRI JOURNEY</span><span>People · Purpose · Leadership</span></div>
      <div className="gri-heading" data-reveal>
        <div>
          <p className="eyebrow"><span className="status-dot" /> CENTRE FOR GRASSROOTS RESEARCH AND INNOVATION</p>
          <h2>My journey with <span>GRI.</span></h2>
        </div>
        <p>From community moments to my Operations Co-Lead role, these snapshots capture part of my campus journey. Use the arrows or dots to explore.</p>
      </div>
      <div className="gri-carousel" data-reveal aria-label="GRI photos and role poster carousel">
        <div className="gri-stage">
          {griSlides.map((slide, index) => {
            const offset = (index - activeGri + griSlides.length) % griSlides.length;
            const position = offset === 0 ? 'gri-card-active' : offset === 1 ? 'gri-card-next' : offset === griSlides.length - 1 ? 'gri-card-previous' : 'gri-card-hidden';
            return (
              <button className={`gri-card ${position}`} key={slide.image} type="button"
                onClick={() => goTo(offset === 0 ? activeGri + 1 : index)}
                aria-label={offset === 0 ? `Advance from ${slide.title}` : `Show ${slide.title}`}
                aria-current={offset === 0 ? 'true' : undefined} tabIndex={position === 'gri-card-hidden' ? -1 : 0}>
                <img src={slide.image} alt={slide.alt} draggable="false" />
                <span className="gri-card-shade" />
                <span className="gri-card-index">0{index + 1} / 0{griSlides.length}</span>
                <span className="gri-card-open" aria-hidden="true">↗</span>
              </button>
            );
          })}
        </div>
        <div className="gri-carousel-controls">
          <div className="gri-dots" aria-label="Choose GRI image">
            {griSlides.map((slide, index) => <button key={slide.image} type="button" className={index === activeGri ? 'gri-dot gri-dot-active' : 'gri-dot'} onClick={() => goTo(index)} aria-label={`Show ${slide.title}`} aria-pressed={index === activeGri} />)}
          </div>
          <div className="gri-arrows">
            <button type="button" onClick={() => goTo(activeGri - 1)} aria-label="Previous GRI image">←</button>
            <button type="button" onClick={() => goTo(activeGri + 1)} aria-label="Next GRI image">→</button>
          </div>
        </div>
        <div className="gri-caption" aria-live="polite">
          <div><p className="project-category">{activeSlide.label}</p><h3>{activeSlide.title}</h3></div>
          <p>{activeSlide.description}</p>
        </div>
      </div>
      <div className="gri-footnote" data-reveal><span>GRI / FET / JAIN UNIVERSITY</span><span>MORE PHOTOS CAN BE ADDED LATER ↗</span></div>
    </section>
  );
}
