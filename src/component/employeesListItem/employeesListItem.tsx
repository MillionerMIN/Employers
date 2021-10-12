import './employeeListItem.scss';

type EmployeesListItemType = {
  name: string;
  salary: number;
  increase?: boolean;
};

export const EmployeesListItem = (props: EmployeesListItemType) => {
  const { name, salary, increase } = props;
  return (
    <li
      className={
        'list-group-item d-flex justify-content-between ' +
        `${increase && 'increase'}`
      }
    >
      <span className="list-group-item-list">{name}</span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + '$'}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-cookie btn-sm">
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};
