import { useParams } from "react-router-dom"
import { getEmployeeByUserId } from "../../services/employeeService"
import { useEffect, useState } from "react"

export const EmployeeDetails = () => {
    const [employee, setEmployee] = useState({})
    const { userId } = useParams()
    
    useEffect(() => {
        getEmployeeByUserId(userId).then((data) => {
            const employeeObj = data[0]
            setEmployee(employeeObj)
        })
    }, [userId])

    return (
        <section className="employee">
            <header className="employee-header">
                { employee.user?.fullName }
            </header>
            <div>
                <span className="employee-info">Email : </span>
                { employee.user?.email }  
            </div>
            <div>
                <span className="employee-info">Specialty : </span>
                { employee.specialty }
            </div>             
            <div>
                <span className="employee-info">Rate : </span>
                { employee.rate }
            </div>
            <footer className="employee-footer">
                Currently working on { employee.employeeTickets?.length || 0 } tickets
            </footer>         
        </section>
    )
}