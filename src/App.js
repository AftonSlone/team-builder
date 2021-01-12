import "./App.css";
import Form from "./componets/Form";
import { useState, useEffect } from "react";
import TeamMember from "./componets/TeamMember";

function App() {
  const [team, setTeam] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState(null);
  console.log(memberToEdit);

  const initialFormValues = {
    name: "",
    email: "",
    role: "",
  };
  const [formValues, setFormValues] = useState(initialFormValues);
  useEffect(() => {
    if (memberToEdit) {
      setFormValues(memberToEdit);
    }
  }, [memberToEdit]);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const editMember = () => {
    setTeam(
      team.map((teamMate) => {
        if (teamMate.id === memberToEdit.id) {
          console.log("found");
          return (teamMate = formValues);
        } else {
          return teamMate;
        }
      })
    );
    setMemberToEdit(null);
  };

  const submitForm = () => {
    let uniqueName = true;
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
      id: Date.now(),
    };
    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role)
      return;
    team.forEach((name) => {
      if (name.name === newTeamMember.name) {
        uniqueName = false;
      }
    });

    if (uniqueName) {
      setTeam([...team, newTeamMember]);
    }
    setFormValues(initialFormValues);
  };
  return (
    <div>
      {team.map((teamMember) => {
        return (
          <TeamMember
            key={teamMember.id}
            teamMember={teamMember}
            setMemberToEdit={setMemberToEdit}
          />
        );
      })}
      <Form
        updateForm={updateForm}
        submitForm={submitForm}
        formValues={formValues}
        memberToEdit={memberToEdit}
        editMember={editMember}
      />
    </div>
  );
}

export default App;
