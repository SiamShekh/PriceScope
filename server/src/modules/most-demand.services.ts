import { Prisma } from "..";
import { CatchAsync } from "../utils/Util";

const AddFavorite = CatchAsync(async (req, res) => {
    const body = req?.body;

    await Prisma.$transaction(async (transaction) => {
        const product = await transaction.most_demand.findFirst({
            where: {
                href: body?.href
            } 
        });

        if (product) {

            const p = await transaction.most_demand.update({
                where: { id: product?.id },
                data: { interested: { increment: 1 } }
            });

            return p;
        } else {
            const p = await transaction.most_demand.create({
                data: body
            });

            return p;
        }
    });

    res.send({ status: "success" });
});

const GetDemandedProduct = CatchAsync(async (req, res) => {
    const products = await Prisma.most_demand.findMany({
        take: 20,
        orderBy: {interested: "desc"}
    })

    res.send(products);
});

const demand = {
    AddFavorite,
    GetDemandedProduct
};

export default demand;