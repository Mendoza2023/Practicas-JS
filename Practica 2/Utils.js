
export const hasPermission = (employee, date, permissions) => {
    const permission = permissions.find(item => item.date===date && item.employee===employee);
    return (permission!=null);
}

export default  function addDays(date, days) {
    const dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() + days);
    return dateCopy;
}