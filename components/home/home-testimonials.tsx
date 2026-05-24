import { HomeStarRating } from "@/components/home/home-icons";
import { homeRedesign } from "@/data/home-redesign";

export function HomeTestimonials() {
  const { testimonials } = homeRedesign;

  return (
    <section className="home-testimonials" aria-labelledby="home-testimonials-heading">
      <div className="home-container">
        <h2 id="home-testimonials-heading" className="home-testimonials__heading">
          <span className="home-testimonials__heading-mark">LOVED</span>
          {" BY THOUSANDS"}
        </h2>
        <ul className="home-testimonials__grid">
          {testimonials.quotes.map((lines, index) => (
            <li key={lines.join(" ")} className="home-testimonials__item">
              <blockquote className="home-testimonials__quote">
                <div className="home-testimonials__stars" aria-hidden>
                  <HomeStarRating variant="testimonials" />
                </div>
                <p className="home-testimonials__quote-text">
                  <span className="home-testimonials__quote-mark" aria-hidden>
                    &ldquo;
                  </span>
                  <span className="home-testimonials__quote-copy home-testimonials__quote-copy--stack">
                    {lines.map((line, lineIndex) => (
                      <span key={line} className="home-testimonials__quote-line">
                        {lineIndex > 0 ? <br /> : null}
                        {line}
                      </span>
                    ))}
                  </span>
                  <span className="home-testimonials__quote-copy home-testimonials__quote-copy--flow">
                    {lines.join(" ")}
                  </span>
                  <span className="home-testimonials__quote-mark" aria-hidden>
                    &rdquo;
                  </span>
                </p>
                <span className="home-testimonials__index" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
