
import { useState } from "react";
import "./SIHSection.css";

const LINKEDIN_POST = "https://lnkd.in/p/d_ezidXf";

const gallery = [
  {
    image: "/images/sih/project-screen-1.png",
    title: "Project interface",
    type: "PROTOTYPE",
    description: "Add a screenshot of your main project screen.",
  },
  {
    image: "/images/sih/project-screen-2.png",
    title: "Key feature",
    type: "PROJECT SCREEN",
    description: "Show one of the important features you developed.",
  },
  {
    image: "/images/sih/team-photo-1.jpg",
    title: "The SIH team",
    type: "TEAM",
    description: "A photograph of your team during the hackathon.",
  },
  {
    image: "/images/sih/project-screen-3.png",
    title: "User workflow",
    type: "PROTOTYPE",
    description: "Show another screen or the project workflow.",
  },
  {
    image: "/images/sih/sih-certificate.jpg",
    title: "SIH recognition",
    type: "CERTIFICATE",
    description: "Add your actual SIH certificate here.",
  },
  {
    image: "/images/sih/team-photo-2.jpg",
    title: "Behind the project",
    type: "MEMORIES",
    description: "Add another team or event photograph.",
  },
];

const features = [
  {
    number: "01",
    title: "Patient identification",
    description:
      "A planned entry point for identifying the patient and starting their clinical journey.",
  },
  {
    number: "02",
    title: "Clinical history",
    description:
      "A structured interview flow to help collect patient history and symptoms.",
  },
  {
    number: "03",
    title: "Document access",
    description:
      "A place for medical documents and reports to be uploaded and reviewed.",
  },
  {
    number: "04",
    title: "Structured information",
    description:
      "Organize collected information so healthcare professionals can review it.",
  },
];

export default function SIHSection() {
  const [active, setActive] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const current = gallery[active];

  function move(direction) {
    setActive((previous) =>
      (previous + direction + gallery.length) % gallery.length
    );
  }

  function getPosition(index) {
    let difference = index - active;

    if (difference > gallery.length / 2) {
      difference -= gallery.length;
    }

    if (difference < -gallery.length / 2) {
      difference += gallery.length;
    }

    return difference;
  }

  return (
    <section className="sih-section" id="sih">
      <div className="sih-container">
        {/* Section heading */}
        <div className="sih-topline">
          <span>06 / HACKATHON EXPERIENCE</span>
          <span>IDEA · TEAMWORK · BUILDING</span>
        </div>

        {/* Hero */}
        <div className="sih-hero">
          <div className="sih-hero-copy">
            <span className="sih-kicker">
              SMART INDIA HACKATHON
            </span>

            <h2>
              Turning a real-world
              <br />
              problem into a{" "}
              <span>solution.</span>
            </h2>

            <p className="sih-intro">
              SIH gave me an opportunity to think about a real problem,
              collaborate with a team, and work towards a technology-based
              solution.
            </p>

            <div className="sih-tags">
              <span>Healthcare Technology</span>
              <span>Problem Solving</span>
              <span>Team Collaboration</span>
            </div>

            <a
              className="sih-button sih-button-primary"
              href={LINKEDIN_POST}
              target="_blank"
              rel="noreferrer"
            >
              View my LinkedIn post <span>↗</span>
            </a>
          </div>

          <div className="sih-hero-art">
            <div className="sih-orbit sih-orbit-one" />
            <div className="sih-orbit sih-orbit-two" />

            <div className="sih-art-card">
              <span className="sih-art-label">PROJECT SHOWCASE</span>

              <div className="sih-art-icon">+</div>

              <h3>Technology with purpose.</h3>
              <p>Research. Design. Develop. Improve.</p>

              <div className="sih-art-bottom">
                <span>SIH</span>
                <span>YOUR PROJECT · YOUR JOURNEY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Problem and solution */}
        <div className="sih-overview">
          <div className="sih-section-heading">
            <span className="sih-kicker">THE IDEA</span>
            <h3>
              Start with the problem.
              <br />
              <span>Build with purpose.</span>
            </h3>
          </div>

          <div className="sih-overview-grid">
            <article className="sih-info-card">
              <span className="sih-card-number">01 / PROBLEM</span>
              <h4>What challenge are we solving?</h4>
              <p>
                Clinical history and medical information can be difficult to
                collect consistently. The project explores a more structured
                digital workflow for collecting and accessing patient
                information.
              </p>
            </article>

            <article className="sih-info-card sih-info-highlight">
              <span className="sih-card-number">02 / APPROACH</span>
              <h4>A more organized clinical journey</h4>
              <p>
                The concept brings patient entry, clinical history-taking,
                and medical document access into a single kiosk-style
                experience. Update this description to match your team's
                final SIH proposal.
              </p>
            </article>
          </div>
        </div>

        {/* Features */}
        <div className="sih-features">
          <div className="sih-section-heading">
            <span className="sih-kicker">PROJECT CONCEPT</span>
            <h3>
              What the idea <span>includes.</span>
            </h3>
          </div>

          <div className="sih-feature-grid">
            {features.map((feature) => (
              <article className="sih-feature" key={feature.number}>
                <span>{feature.number}</span>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>

          <p className="sih-disclaimer">
            These are editable concept descriptions, not a claim that every
            feature was completed or implemented in the SIH prototype.
          </p>
        </div>

        {/* Gallery */}
        <div className="sih-gallery-section">
          <div className="sih-gallery-heading">
            <div>
              <span className="sih-kicker">THE PROJECT IN PICTURES</span>
              <h3>
                From idea to <span>prototype.</span>
              </h3>
              <p>
                Explore project screens, team moments, and your achievements.
              </p>
            </div>

            <div className="sih-gallery-controls">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous gallery image"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Next gallery image"
              >
                →
              </button>
            </div>
          </div>

          <div className="sih-carousel">
            {gallery.map((item, index) => {
              const position = getPosition(index);
              const isActive = position === 0;

              return (
                <button
                  type="button"
                  key={item.image}
                  className={[
                    "sih-gallery-card",
                    isActive ? "is-active" : "",
                    Math.abs(position) > 1 ? "is-hidden" : "",
                    position === -1 ? "is-left" : "",
                    position === 1 ? "is-right" : "",
                  ].join(" ")}
                  onClick={() => {
                    if (!isActive) {
                      setActive(index);
                    } else {
                      setSelectedImage(item);
                    }
                  }}
                  aria-label={`${item.title}. ${
                    isActive ? "Open image" : "Bring image forward"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <div className="sih-image-frame">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading={Math.abs(position) > 1 ? "lazy" : "eager"}
                      onError={(event) => {
                        event.currentTarget.style.opacity = "0";
                        event.currentTarget.parentElement.classList.add(
                          "sih-image-missing"
                        );
                      }}
                    />

                    <div className="sih-image-placeholder">
                      <span>+</span>
                      <strong>{item.type}</strong>
                      <small>Add your image file</small>
                    </div>

                    <span className="sih-image-count">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(gallery.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="sih-gallery-card-copy">
                    <span>{item.type}</span>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="sih-gallery-footer">
            <div className="sih-dots">
              {gallery.map((item, index) => (
                <button
                  type="button"
                  key={item.image}
                  className={active === index ? "is-active" : ""}
                  onClick={() => setActive(index)}
                  aria-label={`Show ${item.title}`}
                />
              ))}
            </div>

            <span>
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(gallery.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* My role */}
        <div className="sih-role">
          <div className="sih-role-heading">
            <span className="sih-kicker">MY CONTRIBUTION</span>
            <h3>
              What I brought <span>to the team.</span>
            </h3>
          </div>

          <div className="sih-role-content">
            <p>
              My focus was on frontend development and the user interface
              experience, turning the project concept into a clear digital
              workflow. I also worked on understanding the problem and
              presenting the idea.
            </p>

            <div className="sih-role-list">
              <span>↗ Frontend development</span>
              <span>↗ UI/UX and user flow</span>
              <span>↗ Project presentation</span>
              <span>↗ Team collaboration</span>
            </div>
          </div>

          <p className="sih-disclaimer">
            Edit this list to reflect your exact responsibilities and the work
            you personally completed.
          </p>
        </div>

        {/* LinkedIn spotlight */}
        <div className="sih-linkedin-section">
          <div className="sih-linkedin-card">
            <div className="sih-linkedin-header">
              <div className="sih-linkedin-icon">in</div>
              <div>
                <strong>Abhishek Kumar</strong>
                <span>Computer Science Student · SIH Project</span>
              </div>
              <span className="sih-linkedin-badge">LINKEDIN</span>
            </div>

            <div className="sih-linkedin-body">
              <span className="sih-kicker">MY PROJECT STORY</span>
              <h3>
                Sharing the journey.
                <br />
                <span>Learning through building.</span>
              </h3>

              <p>
                Explore my original LinkedIn post for the project update,
                photos, and the story I shared with my network.
              </p>

              <div className="sih-post-preview">
                <div className="sih-post-preview-top">
                  <span>PROJECT UPDATE</span>
                  <span>SIH</span>
                </div>
                <div className="sih-post-preview-mark">↗</div>
                <strong>Ideas become stronger when teams build together.</strong>
                <span>Open the original post to see its actual content.</span>
              </div>
            </div>

            <div className="sih-linkedin-actions">
              <a
                href={LINKEDIN_POST}
                target="_blank"
                rel="noreferrer"
              >
                <span>♡</span> Like
              </a>
              <a
                href={LINKEDIN_POST}
                target="_blank"
                rel="noreferrer"
              >
                <span>▢</span> Comment
              </a>
              <a
                href={LINKEDIN_POST}
                target="_blank"
                rel="noreferrer"
              >
                <span>↗</span> Share
              </a>
            </div>

            <a
              className="sih-button sih-button-primary sih-linkedin-cta"
              href={LINKEDIN_POST}
              target="_blank"
              rel="noreferrer"
            >
              View original LinkedIn post ↗
            </a>

            <p className="sih-disclaimer">
              These are links to your post, not live LinkedIn reaction buttons.
              Reaction and comment counts are not fabricated.
            </p>
          </div>
        </div>
      </div>

      {/* Image lightbox */}
      {selectedImage && (
        <div
          className="sih-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="sih-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="sih-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={selectedImage.image} alt={selectedImage.title} />
            <h3>{selectedImage.title}</h3>
            <p>{selectedImage.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
