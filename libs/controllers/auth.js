import call from './call';

/**
 * Parse cookies from document.cookie string
 * @returns {Object} Object with cookie key-value pairs
 */
function parseCookies() {
	return Object.fromEntries(
		document.cookie
			.split('; ')
			.filter(Boolean)
			.map((cookie) => {
				const [key, ...valueParts] = cookie.split('=');
				const value = valueParts.join('='); // Handle = in cookie value
				return [key, decodeURIComponent(value)];
			})
	);
}

export default class Auth {
	constructor() {
		this.isLoggedIn = false;
		this.user = null;
		this.user_image = null;
		this.cookie = null;

		this.cookie = parseCookies();
		this.isLoggedIn = this.cookie.user_id && this.cookie.user_id !== 'Guest';
	}

	async login(email, password) {
		let res = await call('login', {
			usr: email,
			pwd: password,
		});
		if (res) {
			this.isLoggedIn = true;
			return res;
		}
		return false;
	}

	async logout() {
		await call('logout');
		this.isLoggedIn = false;
		window.location.reload();
	}

	async resetPassword(email) {
		console.log('resetting password');
		// Implement if you want
	}
}
