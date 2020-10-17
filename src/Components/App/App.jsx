import React from 'react';
import Number from '../Number/Number';
import Ticket from '../Ticket/Ticket';
import './App.css';
import ticketOperations from '../../localScripts/fetch';
import { checkRow, sessionRetrieveTicket, sessionStoreTicket } from '../../localScripts/helperFunctions';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      ticket: {
        field1: [],
        field2: [],
        field3: [],
        field4: [],
        field5: [],
        field6: [],
        field7: [],
        field8: [],
        field9: [],
        field10: [],
        field11: [],
        field12: [],
        field13: [],
        field14: [],
        field15: [],
        field16: [],
        field17: [],
        field18: [],
        field19: [],
        field20: [],
        field21: [],
        field22: [],
        field23: [],
        field24: [],
        field25: [],
        field26: [],
        field27: []
      },
      calledNumber: '34', // CHANGE
      status: '',
      username: 'noise82' // CHANGE
    };
    this.generateNewTicket = this.generateNewTicket.bind(this);
    this.markSelected = this.markSelected.bind(this);
    this.handleBingo = this.handleBingo.bind(this);
  }

  async generateNewTicket() {
    const newTicket = await ticketOperations.fetchNewTicket();
    this.setState({
      status: '',
      ticket: newTicket
    });
  }

  markSelected(e) {
    if (e.target.innerHTML === this.state.calledNumber) {
      const changedTicket = this.state.ticket;
      changedTicket[e.target.id][0] = 'match';
      this.setState({
        ticket: changedTicket
      });
      // POST updated ticket
    } else {
      this.setState({
        status: 'Incorrect selection - not a match with the called number'
      });
    }
  }

  handleBingo(e) {
    if (checkRow(this.state.ticket, 'topRow') || checkRow(this.state.ticket, 'midRow') || checkRow(this.state.ticket, 'botRow')) {
      // POST BINGO ticket
      // Status = show confirmation from server
      this.setState({ status: 'YAY BINGO, YA MOFO!' });
    } else {
      this.setState({ status: 'NAY BINGO, YA MOFO!' });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.state.ticket !== prevProps.ticket) {
      sessionStoreTicket(JSON.stringify(this.state.ticket));
    }
  }

  componentDidMount() {
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
        <Ticket status={this.state.status} ticket={this.state.ticket} handleSelect={this.markSelected} generateNewTicket={this.generateNewTicket} />
        <Number calledNumber={this.state.calledNumber} />

        <section id="bingo-button-container">
          <button id="bingo-button" onClick={this.handleBingo}>BINGO</button>
        </section>



      </div>

    );
  }
}

export default App;
