import React from 'react';
import Number from '../Number/Number';
import Ticket from '../Ticket/Ticket';
import './App.css';
import ticketOperations from '../../scripts/fetch';
import { checkRow, sessionRetrieveTicket, sessionStoreTicket } from '../../scripts/helperFunctions';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const socket = new W3CWebSocket('ws://127.0.0.1:8080');

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      ticket: {
        field1: {},
        field2: {},
        field3: {},
        field4: {},
        field5: {},
        field6: {},
        field7: {},
        field8: {},
        field9: {},
        field10: {},
        field11: {},
        field12: {},
        field13: {},
        field14: {},
        field15: {},
        field16: {},
        field17: {},
        field18: {},
        field19: {},
        field20: {},
        field21: {},
        field22: {},
        field23: {},
        field24: {},
        field25: {},
        field26: {},
        field27: {}
      },
      calledNumber: '',
      status: '',
      userId: '' //CHANGE

    };
    this.getNewTicket = this.getNewTicket.bind(this);
    this.markSelected = this.markSelected.bind(this);
    this.handleBingo = this.handleBingo.bind(this);
    this.unload = this.unload.bind(this);
    this.handleResetStatus = this.handleResetStatus.bind(this);
  }

  async getNewTicket() {
    const newTicket = await ticketOperations.fetchNewTicket();
    sessionStoreTicket(JSON.stringify(newTicket));
    this.setState({
      status: '',
      ticket: newTicket
    });
  }

  markSelected(e) {
    if (e.target.innerHTML === this.state.calledNumber) {
      const changedTicket = this.state.ticket;
      changedTicket[e.target.id].class = 'match';
      ticketOperations.sendTicketUpdate(changedTicket); // POST updated ticket
      sessionStoreTicket(JSON.stringify(changedTicket)); // save updated ticket to local session
      this.setState({
        ticket: changedTicket
      });
    } else {
      this.setState({
        status: 'Incorrect selection - not a match with the called number'
      });
    }
  }

  handleBingo(e) {
    if (checkRow(this.state.ticket, this.state.calledNumber, 'topRow') || checkRow(this.state.ticket, this.state.calledNumber, 'midRow') || checkRow(this.state.ticket, this.state.calledNumber, 'botRow')) {
      // POST BINGO ticket
      // Status = show confirmation from server
      this.setState({ status: 'BINGO!' });
    } else {
      this.setState({ status: 'NO BINGO!' });
    }

  }

  // Clears status field after 3 seconds
  handleResetStatus(e) {
    setTimeout(() => {
      this.setState({
        status: ''
      })
    }, 3000);

  }

  // Closes WebSocket when user closes page/browser
  unload(e) {
    socket.send('Bingo says: BYE!');
    socket.close();
  }

  componentDidMount() {

    socket.onopen = () => {
      socket.send('Bingo says: HELLO!');
    };

    socket.onmessage = (message) => {
      console.log(message['data']);
      if (this.calledNumber === message['data']) return;
      this.setState({ calledNumber: message['data'] });
    };

    window.onbeforeunload = this.unload;

    const savedTicket = JSON.parse(sessionRetrieveTicket());
    if (savedTicket) {
      this.setState({
        ticket: savedTicket
      });
    }
  }


  render() {

    return (

      <div id="main-box">
        <Ticket resetStatus={this.handleResetStatus} status={this.state.status} ticket={this.state.ticket} handleSelect={this.markSelected} getNewTicket={this.getNewTicket} />

        <Number calledNumber={this.state.calledNumber} />

        <section id="bingo-button-container">
          <button id="bingo-button" onClick={this.handleBingo}>BINGO</button>
        </section>



      </div>

    );
  }

}

export default App;
