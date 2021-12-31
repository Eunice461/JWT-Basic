class CustomAPIError extends Error {
  constructor(message) {
    super(message)
  }
}

module.exports = CustomAPIError



// A DIFFERENT METHOD FOR ERROR HANDING, WE USE THIS WHEN WE WENT IT TO HANDLE ALL THE GIVEN ERRORS
// class CustomAPIError extends Error {
// 	constructor(message, statusCode) {
// 		super(message);
// 		this.statusCode = statusCode;
// 	}
// }

// module.exports = CustomAPIError;
