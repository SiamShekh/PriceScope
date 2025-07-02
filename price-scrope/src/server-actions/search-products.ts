"use server";

import { DEV_SERVER } from "@/utils/constant";

async function SearchProducts(search: string) {
    const res = await fetch(`${DEV_SERVER}/search?p=${search}`, {
        next: { tags: ["search"] },
        cache: "no-cache"
    });

    if (!res.ok) {
        return false;
    }

    return await res.json();
}

export default SearchProducts;