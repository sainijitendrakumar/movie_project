import React from "react";

function HomePostCard({ item }) {
  const handleClick = () => {};
  return (
    <div
      onClick={handleClick}
      className="full cursor-pointer p-4 bg-gray-200 rounded-lg shadow hover:shadow-lg transition"
      style={{
        width: "200px",
        height: "315px",
        borderRadius: "8px",
        margin: "5px",
      }}
    >
      <div className="flex content-center ">
        <img
          src={item.img_url}
          alt={item.title}
          width="170px"
          height="250px"
          title={item.title}
          loading="eager"
          style={{
            width: "170px",
            height: "250px",
            borderRadius: "8px",
          }}
        />
      </div>
      <div className="p-1 flex justify-center items-center">
        <h2
          className="mt-1 text-center font-bold tracking-tight text-gray-500 dark:text-white"
          style={{
            lineHeight: "1.2",
          }}
        >
          {item.title}
        </h2>
      </div>
    </div>
  );
}

export default HomePostCard;
