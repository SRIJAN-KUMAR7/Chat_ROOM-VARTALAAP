
import React from "react";

const NewUser = ({ newUser, onChange, onSubmit }) => {
  return (
    <div className="card bg-dark text-white">
      <div className="card-body">
        <h3 className="card-title">Enter Your Username</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={newUser}
              onChange={onChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Join Chat
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
