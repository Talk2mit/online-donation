import { useLoaderData } from "react-router-dom";
import DonationCard from "../../components/DonationCard/DonationCard";
import Banner from "../../Components/Banner/Banner";
import React, { useState } from 'react';
const Home = () => {
  const donations = useLoaderData();
  
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const handleSearchClick = () => {
    const result = donations.filter((donation) =>
      donation.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (result.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
  setSearchResult(result);
  };
  return (
    <div>
      <div>
        <Banner searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearchClick={handleSearchClick}></Banner>
      </div>
      <div className="py-5 px-4 md:px-6 lg:px-20 xl:px-32">
        {noResults ? (
          <p className="font-bold text-xl text-center">Searching categories dose not found, Try again.</p>
        ) : (
          <DonationCard donations={searchResult.length > 0 ? searchResult : donations} />
        )}
      </div>
    </div>
  );
};

export default Home;
