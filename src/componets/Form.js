export default function Form(proops) {
  const {
    updateForm,
    submitForm,
    formValues,
    memberToEdit,
    editMember,
  } = proops;

  const onChange = (e) => {
    const { name, value } = e.target;
    updateForm(name, value);
  };

  const onSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    if (memberToEdit) {
      editMember();
    }
    submitForm();
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={onChange}
            placeholder="Type Your Name"
          />
        </label>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={onChange}
              placeholder="example@email.com"
            />
          </label>
          <div>
            <label>
              Role:
              <select name="role" value={formValues.role} onChange={onChange}>
                <option value="">---Select Role---</option>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="TL">TL</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <button>Submit</button>
    </form>
  );
}
