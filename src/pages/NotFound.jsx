import { FaExclamation } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <h1 className="text-danger">
        <FaExclamation className="text-danger" size={50} />
        404
      </h1>
      <h2 className="text-danger">Page Not Found</h2>
      <p className="text-danger">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
}
