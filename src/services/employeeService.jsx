export const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees?_expand=user").then((res) => res.json())
}

export const getSingleEmployee = (employeeId) => {
    return fetch(`http://localhost:8088/employees?userId=${employeeId}&_expand=user&_embed=employeeTickets`).then((res) => res.json())
}