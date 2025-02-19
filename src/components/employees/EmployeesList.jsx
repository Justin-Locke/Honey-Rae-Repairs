import { useEffect, useState } from "react"
import { getStaffUsers } from "../../services/userService"
import { User } from "../users/User"
import "./Employees.css"
import { Link } from "react-router-dom"

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
                    <Link to={`/employees/${employeesObj.id}`} key={employeesObj.id}>
                        <User user={employeesObj} key={employeesObj.id} />
                    </Link>
                )
            })}

        </div>
    </>
}