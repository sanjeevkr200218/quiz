export default function formatTime(milliseconds: number) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const seconds = totalSeconds % 60;
  let formattedSeconds =
    seconds < 10 ? `0${Math.floor(seconds)}` : `${Math.floor(seconds)}`;
  if (milliseconds < 100) {
    formattedSeconds = "00";
  }

  return `00:${formattedSeconds}`;
}
