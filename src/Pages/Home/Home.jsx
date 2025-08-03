import React, { useState, useEffect } from "react";
import { databases } from "../../Appwrite/Auth";
import conf from "../../conf/conf";
import { useNavigate } from "react-router-dom";
import HomePostCard from "../../Components/Moviecard/HomePostCard";
import { Helmet } from "react-helmet";
import { Query } from "appwrite";
// import './style.css'

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const promise = databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      [Query.orderDesc("$createdAt")]
    );

    promise.then(
      function (res) {
        setData(res.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const handleCardClick = (movie) => {
    navigate(`/movie/${movie.title}`, { state: movie });
  };

  const Loader = ({ text = "Loading..." }) => {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg text-gray-600 font-medium">{text}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>
          Watch & Download Latest HD Movies | Bollywood, South, Hollywood -
          SeeHDMovie
        </title>
        <meta
          name="description"
          content="Download the latest Hollywood, Bollywood, and South Indian movies in HD quality. Fast downloads, no registration required. New releases updated daily!"
        />
        <link rel="canonical" href="https://seehdmovie.xyz/" />
      </Helmet>
      <h1 className="font-bold text-2xl sm:text-4xl text-center text-red-600 my-2">
        Watch & Download Latest HD Movies Free - SeeHDMovie
      </h1>
      <div className="w-full flex flex-wrap card ">
        {data &&
          data.length !== 0 &&
          data.map((movie) => (
            <div
              key={movie.$id}
              className="lala m-3 rounded-md"
              onClick={() => handleCardClick(movie)}
            >
              <HomePostCard item={movie} />
            </div>
          ))}
      </div>
      {data.length === 0 && <Loader />}
    </>
  );
}

export default Home;
