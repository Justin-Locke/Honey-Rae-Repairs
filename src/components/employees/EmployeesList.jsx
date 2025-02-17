import { useEffect, useState } from "react"
import { getStaffUsers } from "../../services/userService"
import { User } from "../users/User"
import "./Employees.css"

export const EmployeesList= () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then((employeesArray) => {
            setEmployees(employeesArray)
        })
    }, [])

    return <>
        <div className="employees">
            {employees.map((employeesObj) => {
                return (
                    <User user={employeesObj} key={employeesObj.id} />
                )
            })}

        </div>
    </>
}