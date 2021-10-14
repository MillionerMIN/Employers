import { EmployeesListItem } from '../employeesListItem/employeesListItem';
import './employeesList.scss';

type EmployeesListType = {
  data: {
    id: string;
    name: string;
    salary: string;
    increase?: boolean;
  }[];
  deleteItem: (id: string) => void;
};

export const EmployeesList = (props: EmployeesListType) => {
  const { data, deleteItem } = props;

  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        deleteItem={deleteItem}
        id={id}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};
