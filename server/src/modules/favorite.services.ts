import { Prisma } from "..";
import { CatchAsync } from "../utils/Util";

const AddFavorite = CatchAsync(async (req, res) => {
    const body = req?.body;

    await Prisma.$transaction(async (transaction) => {
        const product = await transaction.favorite.findFirst({
            where: {
                href: body?.href,
                userId: req?.user?.id
            }
        });

        if (product) {
            return product;
        } else {
            const p = await transaction.favorite.create({
                data: {
                    userId: req?.user?.id,
                    name: body?.name,
                    price: body?.price,
                    img: body?.img,
                    href: body?.href,
                }
            });

            return p;
        }
    });

    res.send({ status: "success" });
});

const GetFavorite = CatchAsync(async (req, res) => {
    const product = await Prisma.favorite.findMany({
        where: {
            userId: req?.user?.id
        }
    });

    res.send(product);
});

const RemoveFromFavorite = CatchAsync(async (req, res) => {
    const product = await Prisma.favorite.delete({
        where: {
            id: req?.body?.id
        }
    });

    res.send(product);
});

const favorite = {
    AddFavorite,
    GetFavorite,
    RemoveFromFavorite
};

export default favorite