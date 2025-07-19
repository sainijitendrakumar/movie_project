import React from "react";
import { useLocation, useParams } from "react-router-dom";

function Movieprofile() {
  const location = useLocation();
  const movie = location.state;
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold ">
          Download | {movie.title} | {movie.language} | Full Movie 720p
        </h1>
        <p className="text-xl font-semibold text-center">{movie.discription}</p>
        <img
          src={movie.img_url}
          alt={movie.title}
          className="flex "
          style={{
            width: "500px",
            height: "auto",
            borderRadius: "8px",
            margin: "5px",
          }}
        />
        <h2 className="font-bold text-4xl text-gray-800">
          Download | {movie.title} | {movie.language} | Full Movie 720p
        </h2>
        <p className="font-bold text-3xl my-3">
          Click on the Below Download Button to Download file
        </p>
        <h3 className="text-red-700 text-2xl font-bold my-2">
          {" "}
          : DOWNLOADS LINKS :{" "}
        </h3>
        <h4 className="text-red-700 text-xl font-bold my-2">
          -: {movie.title} :-
        </h4>
        <div className="my-0.5">
          <a
            className="text-violet-500 text-2xl font-bold"
            href={movie.movie_drive_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Drive URL [720p Link]
          </a>
        </div>
        <div className="my-0.5">
          <a
            className="text-violet-500 text-2xl font-bold"
            href={movie.telegram_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram link [720p Link]
          </a>
        </div>
      </div>
    </div>
  );
}

export default Movieprofile;
