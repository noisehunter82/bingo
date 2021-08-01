import React from 'react';
import './Ticket.css';

class Ticket extends React.Component {

  componentDidUpdate(prevProps) {
    if (this.props.status !== prevProps.status) this.props.resetStatus();
  }

  render() {
    return (
      <section id="ticket-container">
        <button id="new-ticket-button" onClick={this.props.getNewTicket}>NEW TICKET</button>
        <p id="status" >{this.props.status}</p>

        <table id="ticket-data">
          <tbody>
            <tr>
              <td id="field1" className={this.props.ticket.field1.class} onClick={this.props.handleSelect}>{this.props.ticket.field1.value}</td>
              <td id="field2" className={this.props.ticket.field2.class} onClick={this.props.handleSelect}>{this.props.ticket.field2.value}</td>
              <td id="field3" className={this.props.ticket.field3.class} onClick={this.props.handleSelect}>{this.props.ticket.field3.value}</td>
              <td id="field4" className={this.props.ticket.field4.class} onClick={this.props.handleSelect}>{this.props.ticket.field4.value}</td>
              <td id="field5" className={this.props.ticket.field5.class} onClick={this.props.handleSelect}>{this.props.ticket.field5.value}</td>
              <td id="field6" className={this.props.ticket.field6.class} onClick={this.props.handleSelect}>{this.props.ticket.field6.value}</td>
              <td id="field7" className={this.props.ticket.field7.class} onClick={this.props.handleSelect}>{this.props.ticket.field7.value}</td>
              <td id="field8" className={this.props.ticket.field8.class} onClick={this.props.handleSelect}>{this.props.ticket.field8.value}</td>
              <td id="field9" className={this.props.ticket.field9.class} onClick={this.props.handleSelect}>{this.props.ticket.field9.value}</td>
            </tr>
            <tr>
              <td id="field10" className={this.props.ticket.field10.class} onClick={this.props.handleSelect}>{this.props.ticket.field10.value}</td>
              <td id="field11" className={this.props.ticket.field11.class} onClick={this.props.handleSelect}>{this.props.ticket.field11.value}</td>
              <td id="field12" className={this.props.ticket.field12.class} onClick={this.props.handleSelect}>{this.props.ticket.field12.value}</td>
              <td id="field13" className={this.props.ticket.field13.class} onClick={this.props.handleSelect}>{this.props.ticket.field13.value}</td>
              <td id="field14" className={this.props.ticket.field14.class} onClick={this.props.handleSelect}>{this.props.ticket.field14.value}</td>
              <td id="field15" className={this.props.ticket.field15.class} onClick={this.props.handleSelect}>{this.props.ticket.field15.value}</td>
              <td id="field16" className={this.props.ticket.field16.class} onClick={this.props.handleSelect}>{this.props.ticket.field16.value}</td>
              <td id="field17" className={this.props.ticket.field17.class} onClick={this.props.handleSelect}>{this.props.ticket.field17.value}</td>
              <td id="field18" className={this.props.ticket.field18.class} onClick={this.props.handleSelect}>{this.props.ticket.field18.value}</td>
            </tr>
            <tr>
              <td id="field19" className={this.props.ticket.field19.class} onClick={this.props.handleSelect}>{this.props.ticket.field19.value}</td>
              <td id="field20" className={this.props.ticket.field20.class} onClick={this.props.handleSelect}>{this.props.ticket.field20.value}</td>
              <td id="field21" className={this.props.ticket.field21.class} onClick={this.props.handleSelect}>{this.props.ticket.field21.value}</td>
              <td id="field22" className={this.props.ticket.field22.class} onClick={this.props.handleSelect}>{this.props.ticket.field22.value}</td>
              <td id="field23" className={this.props.ticket.field23.class} onClick={this.props.handleSelect}>{this.props.ticket.field23.value}</td>
              <td id="field24" className={this.props.ticket.field24.class} onClick={this.props.handleSelect}>{this.props.ticket.field24.value}</td>
              <td id="field25" className={this.props.ticket.field25.class} onClick={this.props.handleSelect}>{this.props.ticket.field25.value}</td>
              <td id="field26" className={this.props.ticket.field26.class} onClick={this.props.handleSelect}>{this.props.ticket.field26.value}</td>
              <td id="field27" className={this.props.ticket.field27.class} onClick={this.props.handleSelect}>{this.props.ticket.field27.value}</td>
            </tr>
          </tbody>
        </table>

      </section>);
  }
}



export default Ticket;
