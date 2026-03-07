// Check input to see if the pattern matches a URL or domain format
function getHostType(input) {

  const value = input.trim();

  const ipRegex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
  const domainRegex = /^(?!-)(?:[a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}$/;

  if (ipRegex.test(value)) return "ip";
  if (domainRegex.test(value)) return "domain";
  
  return "invalid";

}

// Check input element, and add update the custom validity message if the value is valid or not.
function checkValidity(inputElement) {
    if (inputElement.value === "") {
        inputElement.setCustomValidity("Please enter an IP address or domain");
        return false;
    }
    else if (inputElement.value !== "" && getHostType(inputElement.value) === "invalid" ) {
        inputElement.setCustomValidity("Please enter a valid IP address or domain");
        return false;
    }
    else {
        inputElement.setCustomValidity("");
        return true;
    }
}

export { getHostType, checkValidity }