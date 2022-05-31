import {
	signInWithGooglePopup,
	createUserDocfromAuth,
} from "../../utils/firebase/firebase";

export default function SignIn() {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocfromAuth(user);
	};

	return (
		<>
			<h1>Sign-In Page</h1>
			<button onClick={logGoogleUser}>Sign-In with Google</button>
		</>
	);
}
