import { useEffect, useState } from "react"
import { getAllTickets } from "./services/ticketService"
import "./app.css"

export const App = () => {
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
      {filteredTickets.map(ticket => {
        return (
          <section className="ticket" key={ticket.id}> 
            <header className="ticket-info">#{ticket.id}</header>
            <div>{ticket.description}</div>
            <footer>
              <div>
                <div className="ticket-info">Emergency</div>
                <div>{ticket.emergency ? "yes" : "no"}</div>
              </div>
            </footer>
          </section>
        )
      })}
    </article>

  </div>
  ) 
}
