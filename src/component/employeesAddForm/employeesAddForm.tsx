import './employeesAddForm.scss';
export const EmployeesAddForm = () => {
  return (
    <div className="app-add-form">
      <h3>Add new employee</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="What is your name?"
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="What's your under the $?"
        />
        <button type="submit" className="btn btn-outline-light">
          Add
        </button>
      </form>
    </div>
  );
};
