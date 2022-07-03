import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function Routing(props) {
  const list = props.mvlist;

  const { id } = useParams();

  const filter = () => {
    return list.find((el) => el.id === +id);
  };

  return (
    <div className="px-16">
      <Link to={"/"}>
        <button>
          <FontAwesomeIcon icon={faArrowLeftLong} className="pr-5" />
          Back to home
        </button>
      </Link>
      <div className="p-10 ">
        <h1 className="text-3xl pb-8 uppercase">{filter().title}</h1>
        <div className="flex justify-between items-center">
          <ReactPlayer
            className="pb-10"
            url={filter().trailer}
            muted={true}
            controls={true}
            width="70%"
          />
          <p className="w-4/6 pl-20 text-lg">{filter().description}</p>
        </div>
      </div>
    </div>
  );
}
