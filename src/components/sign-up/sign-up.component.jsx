import { useState } from "react";
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input.component";
import Button from "../buttons/button.component";
import { SignUpContainer } from "./sign-up-form.styles.jsx";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignupForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			return alert("Password does not match");
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			await createUserDocumentFromAuth(user, { displayName });
		} catch (error) {
			if (error.code === "auth/email-already-in-use")
				alert("Cannot create user, email already in use");
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		// Spreading the object formFields and then modifying only one value.
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignUpContainer>
			<h2>Don't have an account? Sign-up below</h2>
			<span>Sign-up with your email and Password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Display Name'
					type='text'
					required
					name='displayName'
					onChange={handleChange}
					value={displayName}
				/>

				<FormInput
					label='Email'
					type='email'
					required
					name='email'
					onChange={handleChange}
					value={email}
				/>

				<FormInput
					label='Password'
					type='password'
					required
					name='password'
					onChange={handleChange}
					value={password}
				/>

				<FormInput
					label='Confirm Password'
					type='password'
					required
					name='confirmPassword'
					onChange={handleChange}
					value={confirmPassword}
				/>

				<Button type='submit'>Sign-up</Button>
			</form>
		</SignUpContainer>
	);
};

export default SignupForm;
