import { EmployeesListItem } from '../employeesListItem/employeesListItem';
import './employeesList.scss';

type EmployeesListType = {
  data: {
    id: string;
    name: string;
    salary: number;
    increase?: boolean;
  }[];
  deleteUser: (id: string) => void;
};

export const EmployeesList = (props: EmployeesListType) => {
  const { data, deleteUser } = props;

  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        deleteUser={deleteUser}
        id={id}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};
