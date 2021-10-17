import { stringify } from 'querystring';
import { EmployeesListItem } from '../employeesListItem/employeesListItem';
import './employeesList.scss';

type EmployeesListType = {
  data: {
    id: string;
    name: string;
    salary: string;
    increase?: boolean;
    rise?: boolean;
  }[];
  deleteItem: (id: string) => void;
  onToggleIncrease: (id: string) => void;
  onToggleRise: (id: string) => void;
};

export const EmployeesList = (props: EmployeesListType) => {
  const { data, deleteItem, onToggleIncrease, onToggleRise } = props;

  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        deleteItem={deleteItem}
        onToggleIncrease={() => onToggleIncrease(id)}
        onToggleRise={() => onToggleRise(id)}
        id={id}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};
