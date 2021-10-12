import { EmployeesListItem } from '../employeesListItem/employeesListItem';
import './employeesList.scss';

export const EmployeesList = () => {
  return (
    <ul className="app-list list-group">
      <EmployeesListItem />
      <EmployeesListItem />
      <EmployeesListItem />
    </ul>
  );
};
