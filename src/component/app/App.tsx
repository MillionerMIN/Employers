import { AppInfo } from '../appInfo/appInfo';
import './app.scss';
import '../searchPanel/searchPanel.scss';
import { SearchPanel } from '../searchPanel/serchPanel';
import { AppFilter } from '../appFilter/appFilter';
import { EmployeesList } from '../employeesList/employeesList';
import { EmployeesAddForm } from '../employeesAddForm/employeesAddForm';

function App() {
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
