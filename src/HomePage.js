import React from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "./queries";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
//import { SpinnerCircular } from 'spinners-react';

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

 // if (loading) return <p>Loading...</p>;
  //if (error) return <p>Error: {error.message}</p>;

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center fw-bolder p-5" style={{ height: "100vh" }}>
       <ClipLoader color="#ff0500" size={80} /> 
       
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <h1 className="my-4 text-center fw-bolder text-uppercase pt-4 text-danger">Countries List</h1>
      <div className="row">
        {data.countries.map((country) => (
          <div className="col-md-4 mb-3 text-center text-uppercase p-5" key={country.code}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{country.name}</h5>
                <p className="card-text">
                  <strong>Capital:</strong> {country.capital || "N/A"}
                </p>
                <Link to={`/country/${country.code}`}>
                  <button className="btn btn-primary text-uppercase">Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
