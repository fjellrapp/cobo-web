export const isStrongPassword = (passowrd: string) => {
	const matcher = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
	return matcher.test(passowrd);
};

export const verifyPassword = (password: string, verifyPassword: string) => {
	return password === verifyPassword;
};
