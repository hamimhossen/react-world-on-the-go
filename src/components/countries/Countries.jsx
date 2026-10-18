import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleSetVisitedCountries = (country) => {
        console.log("handle visited country clicked", country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    };

    const countries = use(countriesPromise);
    //const countries = countriesData.Countries;
    console.log(countries);
    return (
        <div>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <ol>
                {visitedCountries.map((country) => (
                    <li>{country.name.common}</li>
                ))}
            </ol>
            <div className="countries">
                {/* <h2>Countries Length: {countries.length}</h2> */}

                {countries.map((country) => (
                    <Country
                        country={country}
                        handleSetVisitedCountries={handleSetVisitedCountries}
                    ></Country>
                ))}
            </div>
        </div>
    );
};

export default Countries;
