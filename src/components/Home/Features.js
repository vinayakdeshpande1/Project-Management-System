import React from "react";

const Features = () => {
  return (
    <div className="bg-indigo text-white">
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-9">
            <div className="row justifiy-content-end">
              <div className="col-md-8">
                <span>
                  <img
                    src="holder.js/800x300?bg=5a5a50&auto=yes&text=Project%20Features"
                    className="img-fluid ml-auto"
                    alt="Feature 1"
                  />
                </span>
              </div>
              <div className="col-md-4 my-auto text-left">
                <p>Create a new project, set deadlines and more..</p>
                <p>View project Progress</p>
                <p>Create new milestones</p>
                <p>Assign Tasks to group members</p>
              </div>
            </div>
          </div>
          <div className="col-md-1" />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-1" />
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-4 my-auto text-right">
                <p>Add Members to project</p>
                <p>Better UI</p>
                <p>Set Project Status </p>
                <p>View Project Progress</p>
              </div>
              <div className="col-md-8">
                <span>
                  <img
                    src="holder.js/800x300?bg=5a5a50&auto=yes&text=Project%20Features&align=left"
                    className="img-fluid"
                    alt="Feature 2"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-1" />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Features;
