import { Request, RequestHandler, Response } from "express";
import { CatchAsync } from "../utils/Util";
import jwt from "jsonwebtoken";
import { Prisma } from "..";
import { jwt_secret } from "../constant";

const Registration = CatchAsync(async (req, res) => {
    const tx = await Prisma.$transaction(async (tx) => {
        const user = await tx.user.findFirst({
            where: {
                email: req?.body?.email
            }
        });

        if (user?.email) {
            const token = jwt.sign(user, jwt_secret);
            return { token, user };
        } else {
            const user = await Prisma.user.create({
                data: {
                    name: req?.body?.name,
                    email: req?.body?.email,
                    photo: req?.body?.photo,
                }
            });

            const token = jwt.sign(user, jwt_secret);

            return { token, user };
        }
    });

    res.send(tx);
});

const user = {
    Registration
}

export default user;