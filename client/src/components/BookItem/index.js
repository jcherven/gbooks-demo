import React from "react";

function BookItem(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.image} style={{ margin: "0 auto" }} />
      <h2>{props.title}</h2>
      <h3>Author(s): {props.author}</h3>
      <p>Description: {props.description}</p>
      <p>Link: {props.link}</p>
    </div>
  );
}

export default BookItem;
