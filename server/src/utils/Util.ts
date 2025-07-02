import { NextFunction, Request, RequestHandler, Response } from "express";

const NotFound = (req: Request, res: Response, _next: NextFunction) => {
    res.send({
        code: 200,
        msg: `${req?.path} is not found`,
        data: [],
        path: req?.path
    })
};

const ErrorHandler = (err: Error, req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof Error) {
        res.send({
            code: 400,
            error: err?.message,
            msg: "Something went wrong",
            path: req?.path
        })
    }
};

export const CatchAsync = (fx: RequestHandler) => {
    return (req: Request, res: Response, next: NextFunction) => Promise.resolve(fx(req, res, next)).catch(next);
}

const Utils = {
    NotFound,
    ErrorHandler
}

export default Utils;