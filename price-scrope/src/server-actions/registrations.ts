"use server";

import { DEV_SERVER } from "@/utils/constant";
import { cookies } from "next/headers";

async function registration(data: any) {
    const res = await fetch(`${DEV_SERVER}/user/signup`, {
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        next: { tags: ["user"] },
        cache: "no-cache"

    });

    if (!res.ok) {
        return false;
    }

    const response = await res.json();
    if (response?.token) {
        (await cookies()).set("token", response?.token);
    }

    return true;
}

export default registration;