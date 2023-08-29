/**
 * @function stringToMillisecond
 * @param cssDuration
 * @returns {number}
 */
export function stringToMillisecond(cssDuration: string | number = "1s"): number {
  const duration = String(cssDuration);
  const numericValue = parseFloat(duration);
  const unit = duration.match(/[a-z]+/)?.toString();
  if (unit == "s") {
    return numericValue * 1000;
  } else if (unit == "ms") {
    return numericValue;
  } else {
    return numericValue;
  }
}
