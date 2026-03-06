// Check input to see if the pattern matches a URL or domain format
function getHostType(input) {

  const value = input.trim();

  const ipRegex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
  const domainRegex = /^(?!-)(?:[a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}$/;

  if (ipRegex.test(value)) return "ip";
  if (domainRegex.test(value)) return "domain";
  
  return "invalid";

}

export { getHostType }