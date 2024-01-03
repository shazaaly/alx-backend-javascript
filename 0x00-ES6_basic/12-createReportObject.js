export default function createReportObject(employeesList) {
  console.log(employeesList);
  return {
    'allEmployees ': { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },

  };
}
