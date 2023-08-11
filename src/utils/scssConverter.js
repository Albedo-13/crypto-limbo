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
