import { CatchAsync } from "../utils/Util";
import * as cheerio from "cheerio";

interface product {
    name: string;
    img: string;
    price: string;
    href: string;
}

const search = CatchAsync(async (req, res) => {
    const searchTerm = (req?.query?.p as string)?.trim();

    const [
        daraz,
        pikabo,
        starTech,
        techlandbd,
        skyland,
        pchouse,
        ultratech,
        binarylogic,
    ] = await Promise.all([
        DarazInfo(searchTerm),
        PikaboInfo(searchTerm),
        ecommerce_product({
            url: `https://www.startech.com.bd/product/search?search=${encodeURIComponent(searchTerm)}`,
            nameClass: "h4.p-item-name",
            parentClass: "div.p-item",
            priceClass: "div.p-item-price",
        }),
        ecommerce_product({
            url: `https://www.techlandbd.com/index.php?route=product/search&search=${encodeURIComponent(searchTerm)}`,
            nameClass: "div.name",
            parentClass: "div.product-layout",
            priceClass: "div.p-item-price",
        }),
        ecommerce_product({
            url: `https://www.skyland.com.bd/index.php?route=product/search&search=${encodeURIComponent(searchTerm)}`,
            nameClass: "div.name",
            parentClass: "div.product-layout",
            priceClass: "span.price-new",
        }),
        ecommerce_product({
            url: `https://www.pchouse.com.bd/index.php?route=product/search&search=${encodeURIComponent(searchTerm)}`,
            nameClass: "div.name",
            parentClass: "div.product-layout",
            priceClass: ".price-new",
        }),
        ecommerce_product({
            url: `https://www.ultratech.com.bd/index.php?route=product/search&search=${encodeURIComponent(searchTerm)}`,
            nameClass: "div.name",
            parentClass: "div.product-layout",
            priceClass: ".price-new",
        }),
        ecommerce_product({
            url: `https://www.binarylogic.com.bd/search/${encodeURIComponent(searchTerm)}`,
            nameClass: "h4.p-item-name",
            parentClass: "div.col-md-3",
            priceClass: ".current_price",
        }),
    ]);

    const allProducts: product[] = [
        ...binarylogic,
        ...ultratech,
        ...pchouse,
        ...skyland,
        ...techlandbd,
        ...starTech,
        ...daraz,
        ...pikabo,
    ];

    const filtered = allProducts.filter(
        (p) => p.name && p.price && p.img && p.href
    );

    const sorted = filtered.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^\d.]/g, ""));
        const priceB = parseFloat(b.price.replace(/[^\d.]/g, ""));
        return priceA - priceB;
    });

    res.send(sorted);
});

export default search;

async function ecommerce_product({
    url,
    parentClass,
    nameClass,
    priceClass,
}: {
    url: string;
    parentClass: string;
    nameClass: string;
    priceClass: string;
}) {
    const $ = await cheerio.fromURL(url);
    const products: product[] = [];

    $(parentClass).each((_, el) => {
        const $$ = cheerio.load(el);

        const info: product = {
            name: $$(nameClass).text().trim(),
            price: $$(priceClass).text().trim(),
            img: $$(el).find("img").attr("src")?.trim() || "",
            href: $$(el).find("a").attr("href")?.trim() || "",
        };

        if (info.name && info.price && info.img && info.href) {
            products.push(info);
        }
    });

    return products;
}

const DarazInfo = async (searchTerm: string) => {
    const url = `https://www.daraz.com.bd/catalog/?ajax=true&page=1&q=${encodeURIComponent(searchTerm)}`;
    const res = await fetch(url);
    const response = await res.json();

    const products: product[] = [];

    for (const item of response?.mods?.listItems || []) {
        const info: product = {
            name: item?.name || "",
            price: item?.price || "",
            href: item?.itemUrl || "",
            img: item?.image || "",
        };

        if (info.name && info.price && info.img && info.href) {
            products.push(info);
        }
    }

    return products;
};

const PikaboInfo = async (searchTerm: string) => {
    const url = `https://searchserverapi.com/getresults?api_key=6W7Z0N7U0T&q=${encodeURIComponent(searchTerm)}&queryCorrection=true&suggestions=true&maxResults=20`;
    const res = await fetch(url);
    const response = await res.json();

    const products: product[] = [];
    
    for (const item of response?.items || []) {
        const info: product = {
            name: item?.title || "",
            price: item?.price || "",
            href: item?.link || "",
            img: item?.image_link || "",
        };

        if (info.name && info.price && info.img && info.href) {
            products.push(info);
        }
    }

    return products;
};
