import httpStatus from "http-status";

const ErrorHandler = (err, req, res, next) => {
  const errStatus = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
  const errMsg = err.message || "Something went wrong";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === "development" ? err.stack : {},
  });
};

export default ErrorHandler;
