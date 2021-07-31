const sessionStoreTicket = (ticket) => {
  sessionStorage.setItem('ticket', ticket);
};

const sessionRetrieveTicket = () => {
  return sessionStorage.getItem('ticket');
};

const checkRow = (object, calledNumber, row) => {
  let start;
  let counter = 0;
  let winningRow = [];
  // selects which row will be tested
  switch (row) {
    case 'topRow':
      start = 1;
      break;
    case 'midRow':
      start = 10;
      break;
    case 'botRow':
      start = 19;
      break;
    default:
      start = 1;
  };
  // counts fields with class 'match' and pushes their values to an array
  for (let number = start; number < start + 9; number++) {
    const field = `field${number}`;
    if (object[field].class === 'match') {
      counter++;
      winningRow.push(object[field].value);
    }
  }
  //section below verifies that there are 5 selected fields in one row and one of them matches current called number
  const includesCalledNumber = winningRow.includes(calledNumber);

  if (counter !== 5 || !includesCalledNumber) {
    return false;
  }
  return true;

};

export { sessionStoreTicket, sessionRetrieveTicket, checkRow };