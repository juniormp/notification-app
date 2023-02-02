import httpStatus from "http-status";
import Joi from "joi";
import MessageType from "../../model/MessageType.js";

const sendMessageValidator = (req, res, next) => {
  const schema = Joi.object().keys({
    category: Joi.string()
      .valid(MessageType.Finance, MessageType.Movies, MessageType.Sports)
      .required(),

    message: Joi.string().min(1).max(300).required(),
  });

  const {error, value} = schema.validate(req.body);

  if (error) {
    const err = new Error(error.message);
    err.status = httpStatus.BAD_REQUEST;
    next(err);
  }

  return value;
};

export default sendMessageValidator;
