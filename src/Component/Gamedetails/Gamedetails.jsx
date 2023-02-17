import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Gamedetails() {
  let { id } = useParams();
  let [all, setAll] = useState(null);
  console.log(id);

  //   useEffect(() => {
  //     getGamedetails(id);
  //   }, []);
  //   async function getGamedetails(allId) {
  //     let { data } = await axios.get(
  //       `https://www.freetogame.com/$(allId)?api/games`
  //     );
  //     console.log(data);
  //     setAll(data);
  //   }
  return (
    <>
      {all !== null ? (
        <div className="row">
          <div className="col-md-4">
            <img src={"https://www.freetogame.com/g/540" + all.id} />
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
