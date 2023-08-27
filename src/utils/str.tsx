export function stringToMillisecond(cssDuration: string = "1s"): number {
  const numericValue = parseFloat(cssDuration);
  const unit = cssDuration.match(/[a-z]+/)?.toString();
  if (unit == "s") {
    return numericValue * 1000;
  } else if (unit == "ms") {
    return numericValue;
  } else {
    return numericValue;
  }
}
