export const convertScssToObject = (string) => {
  // INPUT EXAMPLE:
  // :export {\n error: #f74e2c;\n success: #06b470;\n extra: #ffba3a;}
  const props = string
    .replaceAll("\n", "")
    .split(/[;:{} ]+/)
    .slice(2, -1);

  const stringifiedProps = JSON.stringify(props)
    .replace("[", "{")
    .replace("]", "}")
    .replaceAll(",", ":")
    .replaceAll(/#\w{6}":/g, (match) => match.slice(0, -1) + ",");

  return JSON.parse(stringifiedProps);
}

export const formatDigit = (number) => number.toLocaleString("en-US");

export const formatPercentage = (number) => number.toFixed(2);

export const addZeroToNumber = (number) => number < 10 ? `0${number}` : `${number}`;

export const comparator = (a, b, orderBy, modifier) => {
  if (a[orderBy] <= b[orderBy]) {
    return -1 * modifier;
  }
  if (a[orderBy] > b[orderBy]) {
    return 1 * modifier;
  }
  return 0;
};

// TODO: remove default arguments
export const unixTimestampToDate = (timestamp = 1695367775, dataFormat="date") => {
  // TODO: adapt to toolbar (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)

  // 1 day from current time = 5 minute interval data
  // 2 - 90 days from current time = hourly data
  // above 90 days from current time = daily data (00:00 UTC)

  let options;
  switch (dataFormat) {
    case "time":
      options = {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      break;
    case "date":
      options = {
        // weekday: "short",
        day: "numeric",
        month: "short",
        year: "2-digit",
      };
      break;
    default:
      options = {
      };
      break;
  }
  return new Date(timestamp).toLocaleString("en-GB", options);
}
// console.log(unixTimestampToDate());
