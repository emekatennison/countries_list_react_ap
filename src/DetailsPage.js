import React from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY_DETAILS } from "./queries";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DetailsPage = () => {
  const { code } = useParams();
  const { loading, error, data } = useQuery(GET_COUNTRY_DETAILS, {
    variables: { code },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const country = data.country;

  return (
    <div className="container my-4 text-center text-uppercase p-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title pt-4 pb-4">{country.name}</h2>
          <p className="card-text">
            <strong>Capital:</strong> {country.capital || "N/A"}
          </p>
          <p className="card-text">
            <strong>Currency:</strong> {country.currency || "N/A"}
          </p>
          <p className="card-text">
            <strong>Continent:</strong> {country.continent.name}
          </p>
          <p className="card-text">
            <strong>Languages:</strong> {country.languages.map((lang) => lang.name).join(", ") || "N/A"}
          </p>
         {/*<Link to={`/country/${country.code}`}>
              <button className="btn btn-primary fw-bolder text-uppercase p-2 mx-3">Details</button>
            </Link> */}
          <Link to="/">
            <button className="btn btn-danger mx-3 text-uppercase">Back to List</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
