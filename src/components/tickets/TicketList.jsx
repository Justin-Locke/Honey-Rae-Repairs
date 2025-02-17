import { useEffect } from "react"
import { useState } from "react"
import { getAllTickets } from "../../services/ticketService"
import "./Tickets.css"
import { Ticket } from "./Ticket"

export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([])
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
  
    useEffect(() => {
      getAllTickets().then(ticketsArray => {
        setAllTickets(ticketsArray);
        console.log("Tickets set!");
      })
    }, []) // Empty array makes it run only on initial render of component
  
    useEffect(() => {
      console.log("State Changed")
      if (showEmergencyOnly) {
        console.log("ONLY EMERGENcY")
        const emergencyTickets = allTickets.filter(
          (ticket) => ticket.emergency === true
        )
        setFilteredTickets(emergencyTickets)
      } else {
        console.log("Show All")
        setFilteredTickets(allTickets);
      }
    }, [showEmergencyOnly, allTickets])
  
    return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <div>
        <button 
          className="filter-btn btn-primary" 
          onClick={() => {
            setShowEmergencyOnly(true)
          }}>Emergency</button>
        <button 
          className="filter-btn btn-info"
          onClick={() => {
            setShowEmergencyOnly(false)
          }}>Show All</button>
  
      </div>
  
      <article className="tickets">
        {filteredTickets.map((ticketObj) => {
          return (
            <Ticket ticket={ticketObj} name="Joe" key={ticketObj.id}/>
          )
        })}
      </article>
  
    </div>
    ) 
}