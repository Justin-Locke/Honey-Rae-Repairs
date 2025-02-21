export const getAllTickets = () => {
    return fetch("http://localhost:8088/serviceTickets?_embed=employeeTickets").then((res => res.json()))
}

export const assignTicket = (employeeticket) => {
    return fetch(`http://localhost:8088/employeeTickets`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeticket)
    })
}

export const updateTicket = (ticket) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticket.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ticket)
    })
}

export const deleteTicket = (ticketId) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
        method: "DELETE"
    })
}