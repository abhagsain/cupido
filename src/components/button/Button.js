import React from "react";

export default function Button(props) {
  return (
    <a href="#s" className="btn btn-animated margin-top-2">
      {props.label || "SIGN UP"}
    </a>
  );
}
