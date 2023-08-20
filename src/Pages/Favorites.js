import React, { useContext, useState } from "react";
import { MyContaxt } from "../App";

import { ReadMore } from "./ReadMore";

export const Favorites = () => {
  const context = useContext(MyContaxt);

  const [isReadMore, setIsReadMore] = useState(false);
  const [movieId, setMovieId] = useState();
  let readMore = (id) => {
    setMovieId(id);
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      {isReadMore ? (
        <ReadMore movieId={movieId} onReadMore={readMore} />
      ) : (
        <div className="row my-2 g-2">
          {context.movies.map((movie, index) =>
            movie.like ? (
              <div key={index} className="col-lg-3">
                <div
                  style={{ height: "26rem" }}
                  className="card overflow-hidden "
                >
                  <div className=" card-img-top">
                    <img
                      src={movie.img}
                      style={{
                        width: "100%",
                        height: "180px",
                        backgroundColor: "aqua",
                      }}
                    ></img>
                  </div>
                  <div className=" card-body ">
                    <div
                      style={{ fontSize: "13px" }}
                      className=" card-subtitle "
                    >
                      <h6>{movie.title}</h6>
                      <p>
                        <strong>Genre: </strong>
                        {movie.genre.map((q) => q + " ")}
                      </p>
                      <p>{movie.KH.substring(0, 60)}</p>
                    </div>
                  </div>

                  <div className=" card-footer ">
                    <button
                      onClick={() => readMore(movie.id)}
                      className=" btn btn-sm btn-primary"
                    >
                      Read More...
                    </button>
                    <button
                      onClick={() => context.like(movie.id)}
                      className=" btn btn-sm btn-primary  mx-1 float-end "
                    >
                      {movie.like ? "liked" : "like"}
                    </button>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      )}
    </>
  );
};
