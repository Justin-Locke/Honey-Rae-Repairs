import { useEffect } from "react"
import { useState } from "react"
import { getAllTickets } from "../../services/ticketService"
import "./Tickets.css"
import { Ticket } from "./Ticket"
import { TicketFilterBar } from "./TicketFilterBar"

export const TicketList = ({ currentUser }) => {
    const [allTickets, setAllTickets] = useState([])
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
    const [showOpenOnly, setShowOpenOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const getAndSetTickets = () => {
        getAllTickets().then((ticketsArray) => {
          if (currentUser.isStaff) {
            setAllTickets(ticketsArray);
          } else {
            const customerTickets = ticketsArray.filter(ticket => ticket.userId === currentUser.id)
            setAllTickets(customerTickets)
          }
      })
    }

    useEffect(() => {
      getAndSetTickets()
    }, [currentUser]) // Empty array makes it run only on initial render of component
  
    useEffect(() => {
      if (showEmergencyOnly) {
        const emergencyTickets = allTickets.filter(
          (ticket) => ticket.emergency === true
        )
        setFilteredTickets(emergencyTickets)
      } else {
        setFilteredTickets(allTickets);
      }
    }, [showEmergencyOnly, allTickets])

    useEffect(() => {
      if (showOpenOnly) {
        const openTickets = allTickets.filter(
          (ticket) => ticket.dateCompleted === ""
        )
        setFilteredTickets(openTickets)
      } else {
        setFilteredTickets(allTickets)
      }
    }, [showOpenOnly, allTickets])

    useEffect(() => {
      const foundTickets = allTickets.filter((ticket) => 
        ticket.description.toLowerCase().includes(searchTerm.toLowerCase()))
      setFilteredTickets(foundTickets)
    }, [searchTerm, allTickets])
  
    return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      
      <TicketFilterBar 
      setShowEmergencyOnly={setShowEmergencyOnly}
      setShowOpenOnly={setShowOpenOnly} 
      setSearchTerm={setSearchTerm}
      currentUser={currentUser}/>
      <article className="tickets">
        {filteredTickets.map((ticketObj) => {
          return (
            <Ticket 
            ticket={ticketObj} 
            currentUser={currentUser}
            getAndSetTickets={getAndSetTickets}
            key={ticketObj.id}/>
          )
        })}
      </article>
  
    </div>
    ) 
}