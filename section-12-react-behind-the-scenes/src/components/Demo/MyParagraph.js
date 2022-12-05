import React from "react";

const MyParagraph = (props) => {
  console.log('My paragraph is running...')
  return <p>{props.children}</p>
};

export default MyParagraph;