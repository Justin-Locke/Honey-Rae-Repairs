import { useParams } from "react-router-dom"
import { getSingleEmployee } from "../../services/employeeService"
import { useEffect, useState } from "react"

export const EmployeeDetails = () => {
    const [currentEmployee, setCurrentEmployee] = useState({})

    const { employeeId } = useParams()
    
    useEffect(() => {
        getSingleEmployee(employeeId).then((employee) => {
            setCurrentEmployee(employee[0])
        })
    }, [currentEmployee])

    return (
        <section className="employee">
            <header className="employee-header">
                { currentEmployee?.user?.fullName || "Unkown Employee" }
            </header>
            <section>
                <span className="employee-info">Email </span>
                <span>{ currentEmployee?.user?.email || "N/A" } </span>   
            </section>
            <section>
                <span className="employee-info">Specialty </span>
                <span>{ currentEmployee?.specialty || "N/A" }</span>
            </section>             
            <section>
                <span className="employee-info">Rate </span>
                <span>{ currentEmployee?.rate ? `$${currentEmployee.rate}/hr` : "N/A" }</span>
            </section>
            <footer className="employee-footer">
                Currently working on { currentEmployee?.employeeTickets?.length || 0 } tickets
            </footer>
            
        </section>
    )
}