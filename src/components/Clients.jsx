import { useQuery } from "@apollo/client";
import { FaUser, FaPlus } from "react-icons/fa";
import { GET_CLIENTS } from "../queries/clientQueries";
import ClientRow from "./ClientRow";
import Spinner from "./Spinner";

function Clients(props) {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) {
    console.log(error);
    return <p>Error :( </p>;
  }

  return (
    <div className="card card-body p-0">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h4 className="mb-0">Clients</h4>
        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="btn btn-primary rounded-3"
        >
          <FaUser className="me-1" />
          Add New
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      </div>

      <nav className="mx-2" aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Clients;
