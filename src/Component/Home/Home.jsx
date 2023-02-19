import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const dataItem = async () => {
      const res = await axios.get(
        "https://www.freetogame.com/api/filter?tag=3d.mmorpg.fantasy.pvp"
      );
      const data = await res.data;
      console.log(data);
      setItems(data);
    };
    dataItem();
  }, []);

  return (
    <>
      <section className="games-header text-center">
        <div className=" mb-2">
          <h1 className="heading">
            <p>
              Find &amp; track the best
              <span className="ps-2 play">free-to-play</span> games!
            </p>
          </h1>
          <p className="lead text-muted">
            Track what you've played and search for what to play next! Plus get
            free premium loot!{" "}
          </p>
          <p>
            <Link className="btn btn-outline-secondary btn-md ml-0" to="/all">
              Browse Games
            </Link>
          </p>
        </div>
      </section>
      <div className="row g-3">
        <h3 className="recommandation m-5">
          <i className="fas fa-robot px-2"></i>Personalized Recommendations
        </h3>
        {items
          ? items.map((item) => {
              return (
                <div key={item.id} className="col-md-4">
                  <div className="item">
                    <img src={item.thumbnail} className="w-100" alt="" />
                    <h3>{item.title}</h3>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}
