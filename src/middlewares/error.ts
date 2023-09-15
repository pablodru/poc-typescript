import { ErrorHandler } from "@/protocols/protocols";
import { NextFunction, Request, Response } from "express";

export default function errorHandler(error: ErrorHandler, req: Request, res: Response, next: NextFunction) {
    if (error.type === "InvalidDataError") {
        return res.status(422).send(error.message);
    }

    return res.status(500).send(error.message ? error.message : "Desculpe, erro interno");
}