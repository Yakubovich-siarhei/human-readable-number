module.exports = function toReadable (number) {
  const a = ['','one ','two ','three ','four ', 'five ','six ','seven ',
              'eight ','nine ','ten ','eleven ','twelve ','thirteen ',
              'fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
  const b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  if (number === 0) {
    return 'zero';
  }

  if (number < 10) {
    return a[number];
  }

}
