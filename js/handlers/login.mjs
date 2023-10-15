import { login } from "../api/auth/login.mjs";

export function setLoginFormListener() {
	const form = document.querySelector("#loginForm");

	if (form) {
		form.addEventListener("submit", async (event) => {
			event.preventDefault();
			const form = event.target;
			const formData = new FormData(form);
			const profile = Object.fromEntries(formData.entries());

			console.log(profile);

			//Send it to the API
			try {
				const response = await login(profile);
				console.log(response);
				// get token from response and save in storage
				// redirect to some page
			} catch (error) {
				console.log(error);
				// the error in the html
				document.querySelector("#message").innerHTML = error.message;
			}
		});
	}
}
