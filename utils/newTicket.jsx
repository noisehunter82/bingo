
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
     
        field1: ['', this.topRow[0]],
        field2: ['', this.topRow[1]],
        field3: ['', this.topRow[2]],
        field4: ['', this.topRow[3]],
        field5: ['', this.topRow[4]],
        field6: ['', this.topRow[5]],
        field7: ['', this.topRow[6]],
        field8: ['', this.topRow[7]],
        field9: ['', this.topRow[8]],
        field10: ['', this.midRow[0]],
        field11: ['', this.midRow[1]],
        field12: ['', this.midRow[2]],
        field13: ['', this.midRow[3]],
        field14: ['', this.midRow[4]],
        field15: ['', this.midRow[5]],
        field16: ['', this.midRow[6]],
        field17: ['', this.midRow[7]],
        field18: ['', this.midRow[8]],
        field19: ['', this.botRow[0]],
        field20: ['', this.botRow[1]],
        field21: ['', this.botRow[2]],
        field22: ['', this.botRow[3]],
        field23: ['', this.botRow[4]],
        field24: ['', this.botRow[5]],
        field25: ['', this.botRow[6]],
        field26: ['', this.botRow[7]],
        field27: ['', this.botRow[8]]
      
    };
    return newTicket;
  }

};

module.exports = RandomNumbers;
