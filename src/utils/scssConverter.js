export const convertScssToObject = (string) => {
  let properties = string
    .replaceAll("\n", "")
    .split(/[;:{} ]+/)
    .slice(2, -1);  console.log("properties:", properties);

  const parsed = JSON.stringify(properties)
    .replace("[", "{")
    .replace("]", "}")
    .replaceAll(",", ":")
    .replaceAll(/#\w{6}":/g, (match) => match.slice(0, -1) + ",");
  console.log("parsed:", parsed)

  const parsed2 = JSON.parse(parsed);
  console.log(parsed2);
  return parsed2;

  // console.log(JSON.parse('{"success": "#06b470", "error": "#f74e2c"}'));
}

// convertScssToObject("{ error: #f74e2c; success: #06b470; extra: #ffba3a;}");
convertScssToObject(" :export {  error: #f74e2c;  success: #06b470;  extra: #ffba3a;}");

// :export {  error: #f74e2c;  success: #06b470;  extra: #ffba3a;}
