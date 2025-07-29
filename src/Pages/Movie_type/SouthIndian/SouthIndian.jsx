import React, { useState, useEffect } from "react";
import { databases } from "../../../Appwrite/Auth";
import conf from "../../../conf/conf";
import { useNavigate } from "react-router-dom";
import HomePostCard from "../../../Components/Moviecard/HomePostCard";
import { Helmet } from "react-helmet";
import { Query } from "appwrite";

function SouthIndian() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const promise = databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      [
        Query.equal("movie-type", "south-indian"), // Filter only Bollywood movies
        Query.orderDesc("$createdAt"),
      ]
    );

    promise.then(
      (res) => {
        setData(res.documents);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const handleCardClick = (movie) => {
    navigate(`/movie/${movie.title}`, { state: movie });
  };

  const BlankPage = () => (
    <div className="w-full h-screen flex flex-wrap items-center justify-center">
      <h1 className="text-2xl">No Bollywood movies found.</h1>
    </div>
  );
  return (
    <div>
      <Helmet>
        <title>Bollywood Movies | seehdmovie</title>
        <meta
          name="description"
          content="Download the latest Bollywood movies in HD quality. Fast downloads, no registration required."
        />
        <link rel="canonical" href="https://seehdmovie.xyz/bollywood" />
      </Helmet>
      <h1 className="font-bold text-4xl text-center text-red-600 my-2">
        Latest South Indian Movies
      </h1>
      <div className="w-full flex flex-wrap card">
        {data && data.length !== 0 ? (
          data.map((movie) => (
            <div
              key={movie.$id}
              className="lala m-3 rounded-md"
              onClick={() => handleCardClick(movie)}
            >
              <HomePostCard item={movie} />
            </div>
          ))
        ) : (
          <BlankPage />
        )}
      </div>
    </div>
  );
}

export default SouthIndian;
