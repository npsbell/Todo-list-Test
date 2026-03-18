import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="not-found-illustration">
          <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background circle */}
            <circle cx="100" cy="100" r="80" fill="#f3f4f6" opacity="0.5" />

            {/* Sad face */}
            <circle cx="75" cy="85" r="8" fill="#667eea" />
            <circle cx="125" cy="85" r="8" fill="#667eea" />

            {/* Sad mouth */}
            <path
              d="M 70 130 Q 100 110 130 130"
              stroke="#667eea"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />

            {/* Tear */}
            <ellipse
              cx="135"
              cy="95"
              rx="4"
              ry="8"
              fill="#667eea"
              opacity="0.6"
            />
          </svg>
        </div>

        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-description">
          Oops! The page you're looking for doesn't exist.
          <br />
          It might have been moved or deleted.
        </p>

        <Link to="/" className="btn btn-primary btn-large">
          🏠 Back to Home
        </Link>
      </div>
    </div>
  );
};
