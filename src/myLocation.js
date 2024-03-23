import React from "react";
import "./style.css";

function MyLocation({ time, address, date }) {

  return (
    <div className="text-container margin-bottom margin-top2">
      <div className="subtitle3 date margin-bottom2 date">{date}</div>
      <div className="subtitle2 uper-case margin-top ">{time}</div>
      <div className="body1 address margin-top2"> 
      {address && address.split(';').map((line, index) => (
            <React.Fragment key={index}>
            {line}
            <br />
            </React.Fragment>
        ))}
      </div>
      </div>
  );
}

export default MyLocation;


