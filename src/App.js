import "./App.css";
import Form from "./componets/Form";
import { useState } from "react";

function App() {
  const [team, setTeam] = useState([]);

  const initialFormValues = {
    name: "",
    email: "",
    role: "",
  };
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
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
        return <p key={teamMember.id}>{JSON.stringify(teamMember)}</p>;
      })}
      <Form
        updateForm={updateForm}
        submitForm={submitForm}
        formValues={formValues}
      />
    </div>
  );
}

export default App;
