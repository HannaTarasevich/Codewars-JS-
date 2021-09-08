/*Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.*/

function humanReadable(seconds) {
  let array = [0, 0, 0];
  let hours = Math.floor(seconds / 3600);
  array[0] = hours < 10 ? `0${hours}` : hours;
  let minutes = Math.floor((seconds % 3600) / 60);
  array[1] = minutes < 10 ? `0${minutes}` : minutes;
  let second = Math.floor(seconds % 60);
  array[2] = second < 10 ? `0${second}` : second;
  return array.join(':');
}
