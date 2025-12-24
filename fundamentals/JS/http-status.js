// Common HTTP status codes

const OK = 200;
const NOT_FOUND = 404;
const SERVER_ERROR = 500;
const CREATED = 201;
const BAD_REQUEST = 400;

// Function to get status message based on code
function getStatusMessage(statusCode) {
  switch (statusCode) {
    case OK:
      return "OK";
    case CREATED:
      return "Created";
    case BAD_REQUEST:
      return "Bad Request";
    case NOT_FOUND:
      return "Not Found";
    case SERVER_ERROR:
      return "Internal Server Error";
    default:
      return "Unknown Status Code";
  }
}

// Example usage
const statusCodes = [200, 201, 400, 404, 500, 123];

statusCodes.forEach((code) => {
  const message = getStatusMessage(code);
  console.log(`HTTP Status ${code}: ${message}`);
});

export { OK, NOT_FOUND, SERVER_ERROR, CREATED, BAD_REQUEST, getStatusMessage };
