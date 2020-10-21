
const RandomNumbers = {

  orderedArray: [],
  topRow: [],
  midRow: [],
  botRow: [],

  generateArray() {
    this.orderedArray = [];
    for (let number = 1; number < 91; number++) {
      this.orderedArray.push(number.toString());
    }
  },

  randomSelection(targetArray, sourceArray, value) {
    const resultArray = targetArray;
    let counter = value;
    while (counter > 0) {
      const randomIndex = Math.floor(Math.random() * sourceArray.length);
      const randomNumber = sourceArray.splice(randomIndex, 1);
      resultArray.push(randomNumber[0]);
      counter--;
    };
    return resultArray;
  },

  pullRandomFiveNumbers(array) {
    const emptyStringsArray = ['', '', '', ''];
    const randomNineUnmixed = RandomNumbers.randomSelection(emptyStringsArray, array, 5);
    return randomNineUnmixed;
  },

  mixNumbers(array) {
    const emptyArray = [];
    const mixedNumbers = RandomNumbers.randomSelection(emptyArray, array, array.length);
    return mixedNumbers;
  },

  getNewTicketObject() {
    RandomNumbers.generateArray();
    let randomNine = RandomNumbers.pullRandomFiveNumbers(this.orderedArray);
    this.topRow = RandomNumbers.mixNumbers(randomNine);
    randomNine = RandomNumbers.pullRandomFiveNumbers(this.orderedArray);
    this.midRow = RandomNumbers.mixNumbers(randomNine);
    randomNine = RandomNumbers.pullRandomFiveNumbers(this.orderedArray);
    this.botRow = RandomNumbers.mixNumbers(randomNine);
    const newTicket = {
     
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
  }

};

module.exports = RandomNumbers;
