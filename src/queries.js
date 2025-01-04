import { gql } from "@apollo/client";

// Query to get the list of countries
export const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      capital
    }
  }
`;

// Query to get details of a specific country
export const GET_COUNTRY_DETAILS = gql`
  query ($code: ID!) {
    country(code: $code) {
      name
      capital
      currency
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`;
