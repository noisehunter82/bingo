import React from 'react';
import './Ticket.css';

class Ticket extends React.Component {

  render() {
    return (
      <section id="ticket-container">
        <button id="new-ticket-button" onClick={this.props.generateNewTicket}>NEW TICKET</button>
        <p id="status">{this.props.status}</p>

        <table id="ticket-data">
          <tbody>
            <tr>
              <td id="field1" className={this.props.ticket.field1[0]} onClick={this.props.handleSelect}>{this.props.ticket.field1[1]}</td>
              <td id="field2" className={this.props.ticket.field2[0]} onClick={this.props.handleSelect}>{this.props.ticket.field2[1]}</td>
              <td id="field3" className={this.props.ticket.field3[0]} onClick={this.props.handleSelect}>{this.props.ticket.field3[1]}</td>
              <td id="field4" className={this.props.ticket.field4[0]} onClick={this.props.handleSelect}>{this.props.ticket.field4[1]}</td>
              <td id="field5" className={this.props.ticket.field5[0]} onClick={this.props.handleSelect}>{this.props.ticket.field5[1]}</td>
              <td id="field6" className={this.props.ticket.field6[0]} onClick={this.props.handleSelect}>{this.props.ticket.field6[1]}</td>
              <td id="field7" className={this.props.ticket.field7[0]} onClick={this.props.handleSelect}>{this.props.ticket.field7[1]}</td>
              <td id="field8" className={this.props.ticket.field8[0]} onClick={this.props.handleSelect}>{this.props.ticket.field8[1]}</td>
              <td id="field9" className={this.props.ticket.field9[0]} onClick={this.props.handleSelect}>{this.props.ticket.field9[1]}</td>
            </tr>
            <tr>
              <td id="field10" className={this.props.ticket.field10[0]} onClick={this.props.handleSelect}>{this.props.ticket.field10[1]}</td>
              <td id="field11" className={this.props.ticket.field11[0]} onClick={this.props.handleSelect}>{this.props.ticket.field11[1]}</td>
              <td id="field12" className={this.props.ticket.field12[0]} onClick={this.props.handleSelect}>{this.props.ticket.field12[1]}</td>
              <td id="field13" className={this.props.ticket.field13[0]} onClick={this.props.handleSelect}>{this.props.ticket.field13[1]}</td>
              <td id="field14" className={this.props.ticket.field14[0]} onClick={this.props.handleSelect}>{this.props.ticket.field14[1]}</td>
              <td id="field15" className={this.props.ticket.field15[0]} onClick={this.props.handleSelect}>{this.props.ticket.field15[1]}</td>
              <td id="field16" className={this.props.ticket.field16[0]} onClick={this.props.handleSelect}>{this.props.ticket.field16[1]}</td>
              <td id="field17" className={this.props.ticket.field17[0]} onClick={this.props.handleSelect}>{this.props.ticket.field17[1]}</td>
              <td id="field18" className={this.props.ticket.field18[0]} onClick={this.props.handleSelect}>{this.props.ticket.field18[1]}</td>
            </tr>
            <tr>
              <td id="field19" className={this.props.ticket.field19[0]} onClick={this.props.handleSelect}>{this.props.ticket.field19[1]}</td>
              <td id="field20" className={this.props.ticket.field20[0]} onClick={this.props.handleSelect}>{this.props.ticket.field20[1]}</td>
              <td id="field21" className={this.props.ticket.field21[0]} onClick={this.props.handleSelect}>{this.props.ticket.field21[1]}</td>
              <td id="field22" className={this.props.ticket.field22[0]} onClick={this.props.handleSelect}>{this.props.ticket.field22[1]}</td>
              <td id="field23" className={this.props.ticket.field23[0]} onClick={this.props.handleSelect}>{this.props.ticket.field23[1]}</td>
              <td id="field24" className={this.props.ticket.field24[0]} onClick={this.props.handleSelect}>{this.props.ticket.field24[1]}</td>
              <td id="field25" className={this.props.ticket.field25[0]} onClick={this.props.handleSelect}>{this.props.ticket.field25[1]}</td>
              <td id="field26" className={this.props.ticket.field26[0]} onClick={this.props.handleSelect}>{this.props.ticket.field26[1]}</td>
              <td id="field27" className={this.props.ticket.field27[0]} onClick={this.props.handleSelect}>{this.props.ticket.field27[1]}</td>
            </tr>
          </tbody>
        </table>

      </section>);
  }
}



export default Ticket;
