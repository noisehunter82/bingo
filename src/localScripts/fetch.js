const ticketOperations = {
  async fetchNewTicket() {
    return fetch('http://localhost:8080/ticket', {
      method: 'get',
      headers: {
        "Accept": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .catch(err => console.log(err));
  }
};

export default ticketOperations;