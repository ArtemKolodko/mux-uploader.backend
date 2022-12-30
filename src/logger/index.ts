import winston from "winston";

export const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "./logs/app.log" }),
    new winston.transports.Console(),
  ],
});
