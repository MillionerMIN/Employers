import { EmployeesListItem } from '../employeesListItem/employeesListItem';
import './employeesList.scss';

type EmployeesListType = {
  data: {
    id: number
    name: string;
    salary: number;
    increase?: boolean;
  }[];
};


export const EmployeesList = (props: EmployeesListType) => {
  const {data} = props;


const elements = data.map((item) => {
  const {id, ...itemProps} = item
return <EmployeesListItem key={id} {...itemProps} />;
}
        );

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
};
