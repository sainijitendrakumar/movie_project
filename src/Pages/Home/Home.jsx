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

  const BlankPage = () => {
    return (
      <div className="w-full h-screen flex flex-wrap items-center justify-center">
        <div className="">
          <h1 className="text-2xl">
            No post to show. Please Log In and Add post.
          </h1>
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>seehdmovie</title>
        <meta
          name="description"
          content="Download the latest Hollywood, Bollywood, and South Indian movies in HD quality. Fast downloads, no registration required. New releases updated daily!"
        />
        <link rel="canonical" href="https://seehdmovie.xyz/" />
      </Helmet>
      <h1 className="font-bold text-4xl text-center text-red-600 my-2">
        Latest Movies & Web Series
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
      {data.length === 0 && <BlankPage />}
    </>
  );
}

export default Home;
