const sessionStoreTicket = (ticket) => { 
  sessionStorage.setItem('ticket', ticket);
};

const sessionRetrieveTicket = () => { 
  return sessionStorage.getItem('ticket');
};

const checkRow = (object, row) => { 
  let start;
  let counter = 0;

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
  
  for (let number = start; number < start + 9; number++){
    const field = `field${number}`;
    if (object[field][0] === 'match') {
      counter++;
    }
  }
  if (counter === 5) {
    return true;
  } else {
    return false;
  }
}; 

export { sessionStoreTicket, sessionRetrieveTicket, checkRow };