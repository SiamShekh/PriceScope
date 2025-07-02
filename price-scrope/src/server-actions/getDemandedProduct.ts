"use server";

import { DEV_SERVER } from "@/utils/constant";
import { Product } from "..";

async function getDemandedProduct(): Promise<Product[]> {
    const res = await fetch(`${DEV_SERVER}/demand`, {
        next: { tags: ["demand"] },
        cache: "no-cache"

    });

    if (!res.ok) {
        return [];
    }

    return res.json();
}

export default getDemandedProduct;