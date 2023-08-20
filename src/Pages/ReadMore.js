import React, { useContext } from "react";
import { MyContaxt } from "../App";

export const ReadMore = (props) => {
  const movieId = props.movieId;
  const context = useContext(MyContaxt);

  return (
    <>
      {context.movies.map((movie, index) =>
        movie.id === movieId ? (
          <div key={index} className="row my-2 ">
            <div className="col-md-12 d-flex justify-content-center   ">
              <div
                style={{ width: "60rem" }}
                className=" bg-white p-2 rounded-1"
              >
                <img
                  className="rounded-top-1"
                  style={{ height: "28rem", width: "100%" }}
                  src={movie.img}
                />
                <h3>{movie.title}</h3>
                <h3>{movie.genre}</h3>
                <button
                  onClick={() => props.onReadMore()}
                  className=" btn btn-sm btn-primary"
                >
                  Go Back...
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
    </>
  );
};
