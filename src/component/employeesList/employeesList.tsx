import { EmployeesListItem } from '../employeesListItem/employeesListItem';
import './employeesList.scss';

type EmployeesListType = {
  data: {
    name: string;
    salary: number;
    increase?: boolean;
  }[];
};


export const EmployeesList = (props: EmployeesListType) => {
  const { data } = props;


const elements = data.map((item, index) => 
        <EmployeesListItem key={index} {...item} />);

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
};
