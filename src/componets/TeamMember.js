import React from "react";

export default function TeamMember(props) {
  const { name, email, role } = props.teamMember;
  return (
    <div>
      <h2>Name: {name} </h2>
      <h3>Email: {email}</h3>
      <h3>Role: {role}</h3>
      <div>
        <button
          onClick={() => {
            props.setMemberToEdit(props.teamMember);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
