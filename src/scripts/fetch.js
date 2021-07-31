let userId = 'noise82'; //to be changed
let token = '';//

const ticketOperations = {

  async fetchNewTicket() {
    return fetch(`http://localhost:8080/api/users/${userId}/ticket`, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token  // ?????
      }
    })
      .then(async response => {
        if (response.ok) {
          const jsonResponse = await response.json();
          return jsonResponse.ticket;
        }
      })
      .catch(err => console.log(err));
  },

  async sendTicketUpdate(ticketObject) {
    const ticket = ticketObject;
    await fetch(`http://localhost:8080/api/users/${userId}/ticket`, {
      'method': 'put',
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({ ticket })
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
    }).then(responseBody => {
      return responseBody;
    }).catch(err => console.log(err));
  }
};

export default ticketOperations;