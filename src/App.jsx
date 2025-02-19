
import "./app.css"
import { CustomersList } from "./components/customers/CustomersList"
import { EmployeesList } from "./components/employees/EmployeesList"
import { NavBar } from "./components/nav/NavBar"
import { TicketList } from "./components/tickets/TicketList"
import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "./components/welcome/Welcome"
import { CustomerDetails } from "./components/customers/CustomerDetails"
import { EmployeeDetails } from "./components/employees/EmployeeDetails"

export const App = () => {
  return (
  <Routes>
    <Route path="/" element={
        <>
          <NavBar />
          <Outlet />
        </>
      }
    >
      <Route index element={<Welcome />}/>
      <Route path="tickets" element={<TicketList />} />
      <Route path="customers">
        <Route index element={<CustomersList />} />
        <Route path=":customerId" element={<CustomerDetails />} />
      </Route> 
      <Route path="employees">
        <Route index element={<EmployeesList />} />
        <Route path=":employeeId" element={<EmployeeDetails />} />
      </Route>
    </Route>
  </Routes>
  )
}
