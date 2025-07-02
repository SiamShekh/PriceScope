"use server";

import { DEV_SERVER } from "@/utils/constant";
import { Product } from "..";
import { revalidateTag } from "next/cache";

async function MarkDemanded(product: Product) {
    revalidateTag("demand");
    
    const res = await fetch(`${DEV_SERVER}/demand`, {
        next: { tags: ["demand"] },
        body: JSON.stringify(product),
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        cache: "no-cache"

    });

    if (!res.ok) {
        return false;
    }

    return true;
}

export default MarkDemanded;