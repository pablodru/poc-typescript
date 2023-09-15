import { Request, Response, NextFunction } from "express";
import { invalidDataError } from "@/errors/invalidData.error";
import { ObjectSchema } from "joi";

export function validate(schema: ObjectSchema, type: 'body' | 'params') {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req[type], {
        abortEarly: false,
      });
  
      if (!error) {
        next();
      } else {
        let errorMessage = '';
        error.details.forEach((d) => (errorMessage += d.message + ' '));
        throw invalidDataError(errorMessage);
      }
    };
  }