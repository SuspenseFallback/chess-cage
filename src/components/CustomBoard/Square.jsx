import React from "react";

const Square = ({ row, column }) => {
  return <div className="square" data-row={row} data-column={column}></div>;
};

export default Square;
