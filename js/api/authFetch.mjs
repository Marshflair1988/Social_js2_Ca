import { load } from "../storage/index.mjs"

export function headers() {
    const token = load("token");

    return {
        'Content-Type': 'application/json',
        'authorization': `bearer ${token}`,
    }
}

export async function authFetch (url, options = {}) {
    return fetch(url, {
        ...options, 
        headers: headers()
    })
}