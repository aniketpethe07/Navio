import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/aniketpethe07`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      <div className="p-4">
        <h1 className="text-3xl text-gray-700 p-7">
          Github Following: {data.following}
        </h1>
        <img src={data.avatar_url} alt="" className="mx-auto w-48" />
      </div>
    </>
  );
};

export default Github;
