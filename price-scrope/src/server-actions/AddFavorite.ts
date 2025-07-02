"use server";

import { DEV_SERVER } from "@/utils/constant";
import { Product } from "..";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

async function AddFavorite(product: Product) {
    revalidateTag("favorite");
    
    const res = await fetch(`${DEV_SERVER}/favorite`, {
        next: { tags: ["favorite"] },
        body: JSON.stringify(product),
        headers: {
            "Content-type": "application/json",
            "Authorization": (await cookies()).get("token")?.value as string
        },
        method: "POST",
        cache: "no-cache"
    });

    if (!res.ok) {
        return false;
    }

    return true;
}

export default AddFavorite;