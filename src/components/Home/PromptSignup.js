import React from "react";
import { NavLink } from "react-router-dom";

const PromptSignup = (props) => {
  return (
    <div className="jumbotron marginRow">
      <div className="container-fluid text-center">
        <br />
        <br />
        <br />
        {/*<p>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
           adipisci.
           </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p> */}
        <p className="fs-4" style={{fontWeight: 800}}>The #1 software development tool used by agile teams</p>
        <button className="btn btn-lg btn-dark-green">
          <NavLink to="/signup" className="text-white">
            <i className="fa fa-sign-in" aria-hidden="true" /> SignUp for Free
          </NavLink>
        </button>
        <p className="font-weight-bold mt-3">Get Staterd it's Free (forever)</p>
        <br />
        <br />
        {/* <p>Lorem ipsum dolor sit amet.</p> */}
      </div>
    </div>
  );
};

export default PromptSignup;
