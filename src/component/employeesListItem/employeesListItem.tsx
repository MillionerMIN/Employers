import './employeeListItem.scss';

type EmployeesListItemType = {
  id: string;
  name: string;
  salary: string;
  increase?: boolean;
  rise?: boolean;
  deleteItem: (id: string) => void;
  onToggleIncrease: () => void;
  onToggleRise: () => void;
};

export const EmployeesListItem = (props: EmployeesListItemType) => {
  const { id, name, salary, deleteItem, onToggleIncrease, onToggleRise, increase, rise } =
    props;

  return (
    <li
      className={
        'list-group-item d-flex justify-content-between ' +
        `${increase && ' increase '}` +
        `${rise && ' like '}`
      }
    >
      <span
        className="list-group-item-list"
        onClick={onToggleRise}
        data-toggle="rise"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + '$'}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          onClick={onToggleIncrease}
          data-toggle="increase"
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button
          type="button"
          className="btn-trash btn-sm"
          onClick={() => deleteItem(id)}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};
