import './appFilter.scss'

export const AppFilter = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-light">
        All employees
      </button>
      <button type="button" className="btn btn-outline-light">
        At improving
      </button>
      <button type="button" className="btn btn-outline-light">
        More than 1000$
      </button>
    </div>
  );
};
