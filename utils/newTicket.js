// This will have to generate a ticket batch (6 tickets)
const RandomNumbers = {

  orderedArray: [],
  topRow: [],
  midRow: [],
  botRow: [],

  // Creates ordered array of numbers 1 - 91 inclusive
  generateArray() {
    this.orderedArray = [];
    for (let number = 1; number < 91; number++) {
      this.orderedArray.push(number.toString());
    }
  },

  // Moves a count of randomly selected numbers from source array to target array.
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
  addRandomFiveToBlanks(array) {
    const emptyStringsArray = ['', '', '', ''];
    const randomNineUnmixed = RandomNumbers.randomSelection(emptyStringsArray, array, 5);
    return randomNineUnmixed;
  },

  // Shuffles numbers and blanks.
  shuffleArray(array) {
    const emptyArray = [];
    const mixedNumbers = RandomNumbers.randomSelection(emptyArray, array, array.length);
    return mixedNumbers;
  },

  // Creates 3 new rows and assebles a single ticket
  getNewTicketObject() {
    RandomNumbers.generateArray();
    let randomNineFields = RandomNumbers.addRandomFiveToBlanks(this.orderedArray);
    this.topRow = RandomNumbers.shuffleArray(randomNineFields);
    randomNineFields = RandomNumbers.addRandomFiveToBlanks(this.orderedArray);
    this.midRow = RandomNumbers.shuffleArray(randomNineFields);
    randomNineFields = RandomNumbers.addRandomFiveToBlanks(this.orderedArray);
    this.botRow = RandomNumbers.shuffleArray(randomNineFields);
    const newTicket = {
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
    return newTicket;
  },

  getNewTicketBatch() {
    // Needs to be written
  }

};

module.exports = RandomNumbers;
