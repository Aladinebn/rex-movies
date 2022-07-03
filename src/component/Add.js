import React from "react";

export default function Add(props) {
  return (
    <div className="flex flex-col justify-center items-center m-10 p-10 rounded-xl bg-form">
      <h1 className="text-5xl text-center text-title ">ADD A MOVIE</h1>
      <div className="w-2/5 p-5 flex flex-col">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Movie"
          onChange={props.change}
          name="title"
          value={props.title}
        />
        <label htmlFor="posterURL">Poster</label>
        <input
          type="url"
          placeholder="Poster"
          onChange={props.change}
          name="posterURL"
          value={props.posterURL}
        />
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          placeholder="Description"
          onChange={props.change}
          name="description"
          value={props.description}
        />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          min={0}
          max={5}
          step="0.1"
          onChange={props.change}
          name="rating"
          value={props.rating}
        />
        <button className="my-2.5" onClick={props.add}>
          add
        </button>
      </div>
    </div>
  );
}
