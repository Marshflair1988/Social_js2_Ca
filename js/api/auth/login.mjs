import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "post";

/*export async function login(profile) {
	const loginURL = API_SOCIAL_URL + action;
	const body = JSON.stringify(profile);

	const response = await fetch(loginURL, {
		headers: {
			"Content-Type": "application/json",
		},
		method,
		body,
	});

    const result = await response.json();
    

	if (response.ok) {
		return result;
	}

	throw new Error(result.errors[0].message);


}

const { accessToken, ...user } = await response.json;

    storage.save("token", result.accessToken);

    storage.save("profile", user);

    alert("You are now logged in!");*/

    export async function login(profile) {
        const loginURL = API_SOCIAL_URL + action;
        const body = JSON.stringify(profile);
    
        const response = await fetch(loginURL, {
            headers: {
                "Content-Type": "application/json",
            },
            method,
            body,
        });
    
        if (response.ok) {
            const result = await response.json();
            storage.save("token", result.accessToken);
            const { accessToken, ...user } = result;
            storage.save("profile", user);
            alert("You are now logged in!");
            return result;
        } else {
            const result = await response.json();
            throw new Error(result.errors[0].message);
        }
    }