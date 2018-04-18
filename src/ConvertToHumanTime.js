export default function convertToHumanTime(miliseconds) {
  let seconds = (miliseconds / 1000) % 60;
  const minutes = Math.floor(miliseconds / (60 * 1000));

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  return `${minutes}:${seconds}`;
}
