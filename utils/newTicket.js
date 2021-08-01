const NewTicket = {

  orderedArray: [],
  topRow: [],
  midRow: [],
  botRow: [],

  // Creates ordered array of numbers 1 - 90 inclusive
  generateArray() {
    const array = [];
    for (let number = 1; number < 91; number++) {
      array.push(number.toString());
    }
    return array;
  },

  // Moves a count of randomly selected numbers from source array to target array. Used by both fucntions below.
  randomSelection(targetArray, sourceArray, count) {
    const resultArray = targetArray;
    for (let i = count; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * sourceArray.length);
      const randomNumber = sourceArray.splice(randomIndex, 1);
      resultArray.push(randomNumber[0]);
    };
    return resultArray;
  },

  // Adds 5 random numbers to 4 blank fields.
  addRandomFiveToBlanks() {
    const emptyStringsArray = ['', '', '', ''];
    return NewTicket.randomSelection(emptyStringsArray, this.orderedArray, 5);
   
  },

  // Shuffles numbers and blanks.
  shuffleArray(array) {
    const emptyArray = [];
    return NewTicket.randomSelection(emptyArray, array, array.length);
   
  },

  // Creates 3 new rows and assebles a single ticket
  getNewTicketObject() {
    this.orderedArray = NewTicket.generateArray();
    let unshuffledNineFields = NewTicket.addRandomFiveToBlanks();
    this.topRow = NewTicket.shuffleArray(unshuffledNineFields);
    unshuffledNineFields = NewTicket.addRandomFiveToBlanks();
    this.midRow = NewTicket.shuffleArray(unshuffledNineFields);
    unshuffledNineFields = NewTicket.addRandomFiveToBlanks();
    this.botRow = NewTicket.shuffleArray(unshuffledNineFields);
    return {
      // this needs to be refactored
      field1: { class: '', value: this.topRow[0] },
      field2: { class: '', value: this.topRow[1] },
      field3: { class: '', value: this.topRow[2] },
      field4: { class: '', value: this.topRow[3] },
      field5: { class: '', value: this.topRow[4] },
      field6: { class: '', value: this.topRow[5] },
      field7: { class: '', value: this.topRow[6] },
      field8: { class: '', value: this.topRow[7] },
      field9: { class: '', value: this.topRow[8] },
      field10: { class: '', value: this.midRow[0] },
      field11: { class: '', value: this.midRow[1] },
      field12: { class: '', value: this.midRow[2] },
      field13: { class: '', value: this.midRow[3] },
      field14: { class: '', value: this.midRow[4] },
      field15: { class: '', value: this.midRow[5] },
      field16: { class: '', value: this.midRow[6] },
      field17: { class: '', value: this.midRow[7] },
      field18: { class: '', value: this.midRow[8] },
      field19: { class: '', value: this.botRow[0] },
      field20: { class: '', value: this.botRow[1] },
      field21: { class: '', value: this.botRow[2] },
      field22: { class: '', value: this.botRow[3] },
      field23: { class: '', value: this.botRow[4] },
      field24: { class: '', value: this.botRow[5] },
      field25: { class: '', value: this.botRow[6] },
      field26: { class: '', value: this.botRow[7] },
      field27: { class: '', value: this.botRow[8] }

    };
    
  },


};


module.exports = NewTicket;
