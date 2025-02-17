
import "./app.css"
import { CustomersList } from "./components/customers/CustomersList"
import { EmployeesList } from "./components/employees/EmployeesList"
import { TicketList } from "./components/tickets/TicketList"

export const App = () => {
  return <>
    {/* <TicketList /> */}
    {/* <CustomersList /> */}
    <EmployeesList />
  </>
}
