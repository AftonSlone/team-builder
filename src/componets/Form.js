export default function Form() {
  const onChange = (e) => {
    const { name, value } = e.target;
    update(name, value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group inputs">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={null}
            onChange={onChange}
            placeholder="Type Your Name"
          />
        </label>
      </div>
    </form>
  );
}
