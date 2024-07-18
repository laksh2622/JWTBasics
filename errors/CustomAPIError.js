class CustomAPIError extends Error {


    constructor(message) {
        super(message);

    }
}
export default CustomAPIError;

//defines a new class called CustomAPIError.
// extends java inbuild class Error
// constructor with 2 parameter
//this.statusCode = statusCode: This line assigns the statusCode parameter value to the statusCode property of the CustomAPIError instance.
//super(message), which invokes the constructor of the parent Error class and sets the error message.