"use server";

import { DEV_SERVER } from "@/utils/constant";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

async function RemoveFromFavorite(id: Number): Promise<boolean> {
    revalidateTag("favorite");

    const res = await fetch(`${DEV_SERVER}/favorite`, {
        next: { tags: ["favorite"] },
        body: JSON.stringify({ id: id }),
        headers: {
            "Content-type": "application/json",
            "Authorization": (await cookies()).get("token")?.value as string
        },
        method: "DELETE",
        cache: "no-cache"

    });

    if (!res.ok) {
        return false;
    }

    return true;
}

export default RemoveFromFavorite;