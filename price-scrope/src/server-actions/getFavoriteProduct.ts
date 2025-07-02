"use server";

import { DEV_SERVER } from "@/utils/constant";
import { Product } from "..";
import { cookies } from "next/headers";

async function getFavoriteProduct(): Promise<Product[]> {
    const res = await fetch(`${DEV_SERVER}/favorite`, {
        next: { tags: ["favorite"] },
        headers: {
            "Content-type": "application/json",
            "Authorization": (await cookies()).get("token")?.value as string
        },
        cache: "no-cache"

    });

    if (!res.ok) {
        return [];
    }

    return res.json();
}

export default getFavoriteProduct;