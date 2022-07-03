/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-array-constructor */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

export default function NavBar(props) {
  return (
    <div className="bg-nav nav-shadow max-w-full mt-0 mb-16 mx-auto">
      <div className="flex justify-between items-center p-0 ">
        <div className="p-0">
          <Link to={"/"} className="flex justify-between items-center p-4 ">
            <img src="../images/logo.png" className="w-40" />
            <h1 className="text-4xl nav-title italic ">
              R<span className="text-letter ">e</span>X MOVIES
            </h1>
          </Link>
        </div>
        <div className="flex flex-col pr-16">
          <ReactStars
            count={5}
            onChange={props.rating}
            size={35}
            value={props.searchRating}
          />
          <div className="group">
            <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
            <input
              onChange={props.search}
              placeholder="Search"
              type="search"
              className="input"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
