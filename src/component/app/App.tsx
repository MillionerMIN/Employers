import { AppInfo } from '../appInfo/appInfo';
import './app.scss';
import '../searchPanel/searchPanel.scss';
import { SearchPanel } from '../searchPanel/serchPanel';
import { AppFilter } from '../appFilter/appFilter';
import { EmployeesList } from '../employeesList/employeesList';
import { EmployeesAddForm } from '../employeesAddForm/employeesAddForm';



function App() {
  const data = [
    { name: 'John C.', salary: 1000, increase: false },
    { name: 'Alex B.', salary: 1500, increase: false },
    { name: 'Vladimir L.', salary: 10000, increase: true },
  ];
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
