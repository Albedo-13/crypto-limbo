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

export const unixTimestampToDate = (timestamp) => {
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return new Date(timestamp).toLocaleString("en-GB", options);
}
