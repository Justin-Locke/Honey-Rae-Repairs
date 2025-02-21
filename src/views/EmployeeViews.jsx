import { Outlet, Route, Routes } from "react-router-dom"
import { EmployeeNavBar } from "../components/nav/EmployeeNavBar"
import { TicketList } from "../components/tickets/TicketList"
import { Welcome } from "../components/welcome/Welcome"
import { CustomersList } from "../components/customers/CustomersList"
import { CustomerDetails } from "../components/customers/CustomerDetails"
import { EmployeesList } from "../components/employees/EmployeesList"
import { EmployeeDetails } from "../components/employees/EmployeeDetails"
import { EmployeeForm } from "../components/forms/EmployeeForm"

export const EmployeeViews = ({ currentUser }) => {
    return (
        <Routes>
  <Route path="/" element={
        <>
          <EmployeeNavBar />
          <Outlet />
        </>
      }
    >
      <Route index element={<Welcome />}/>
      <Route path="tickets" element={<TicketList currentUser={currentUser} />} />
      
      <Route path="customers">
        <Route index element={<CustomersList />} />
        <Route path=":userId" element={<CustomerDetails />} />
      </Route> 
      
      <Route path="employees">
        <Route index element={<EmployeesList />} />
        <Route path=":userId" element={<EmployeeDetails />} />
      </Route>
      
      <Route path="profile" element={<EmployeeForm currentUser={currentUser}/>} />

    </Route>
    </Routes>
    )
}