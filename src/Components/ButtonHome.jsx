import React from "react";
import { Link } from "react-router-dom";

function ButtonHome(props) {
  return (
    <Link to="/pesankursi">
      <button className="bg-secondary w-full font-semibold text-primary h-16 text-2xl rounded my-1">
        {props.Text}
      </button>
    </Link>
  );
}

export default ButtonHome;
