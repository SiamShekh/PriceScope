import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { jwt_secret } from "../constant";

const AuthenticateUser: RequestHandler = async (req, res, next) => {
    const token = req.headers?.authorization || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";

    jwt.verify(token, jwt_secret, (err, decode: any) => {
        if (err instanceof Error) {
            throw new Error(err?.message);
            return;
        }

        if (decode?.email) {
            req.user = decode;
            next();
        } else {
            throw new Error("user not found");
        }
    });
}

export default AuthenticateUser;