"use server";

import { md5 } from "js-md5";

export default async function getSignature(string) {
    const secretKey = process.env.WAYFORPAYSECRET;

    const signature = md5.hmac(secretKey, string);

    return signature;
}
