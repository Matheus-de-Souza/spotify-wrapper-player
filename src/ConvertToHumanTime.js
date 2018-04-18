export default function convertToHumanTime(miliseconds) {
  let seconds = parseInt((miliseconds / 1000) % 60, 10);
  const minutes = parseInt(miliseconds / (60 * 1000), 10);

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  return `${minutes}:${seconds}`;
}
