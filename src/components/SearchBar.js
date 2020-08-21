import React, { useState } from "react";

export default ({ onTermSubmit }) => {
  const [Term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onTermSubmit(Term);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={onSubmit}>
        <div className="ui icon input" style={{ marginTop: "30px" }}>
          <input
            className="prompt"
            type="text"
            placeholder="Search Videos..."
            autoFocus
            onChange={(e) => setTerm(e.target.value)}
            style={{ width: "500px" }}
          />
          <i className="search icon"></i>
        </div>
      </form>
    </div>
  );
};
