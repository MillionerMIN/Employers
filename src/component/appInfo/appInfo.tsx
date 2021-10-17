import './appInfo.scss';

type AppInfoType = {
  employees: number;
  increased: number;
};

export const AppInfo = (props: AppInfoType) => {
  const { employees, increased } = props;

  return (
    <div className="app-info">
      <h1>Mainstreaming employees compony </h1>
      <h2>All number employees: {employees} </h2>
      <h2>the prize to get: {increased}</h2>
    </div>
  );
};
