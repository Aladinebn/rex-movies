import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  return (
    <div>
      <div className="flex flex-col p-2 h-80  ">
        <img
          className="min-w-full"
          src={`../images/${props.posterURL}`}
          alt=""
        />
        <div className="text-center py-5">
          <h1 className="text-lg uppercase">{props.title}</h1>
          <div className="pt-1">
            <span className="pr-1 ">
              <FontAwesomeIcon icon={faStar} color="#EC994B" />
            </span>
            {props.rating}
          </div>
        </div>
      </div>
      <Link to={`/${props.id}`}>
        <button className="mt-8 ">view trailer</button>
      </Link>
    </div>
  );
}
