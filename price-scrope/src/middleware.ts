import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtDecode } from "jwt-decode";

interface Decodedvalue {
    id: number
    name: string
    email: string
    photo: string
    createdAt: string
    iat: number
}

export async function middleware(request: NextRequest) {
    const token = (await cookies()).get("token");
    const decoded: Decodedvalue = jwtDecode(token?.value as string || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30");

    if (decoded?.email) {
        if (request?.nextUrl?.pathname === "/login") {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }

    } else {

        if (request?.nextUrl?.pathname !== "/login") {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }
}

export const config = {
    matcher: ['/login', "/dashboard/:path*"],
}