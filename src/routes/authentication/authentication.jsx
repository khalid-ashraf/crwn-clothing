import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
	signInWithGooglePopup,
	signInWithGoogleRedirect,
	createUserDocumentFromAuth,
	auth,
} from "../../utils/firebase/firebase";
import SignupForm from "../../components/sign-up/sign-up.component";

const Authentication = () => {
	useEffect(() => {
		const fetchData = async () => {
			const res = await getRedirectResult(auth);
			if (res) {
				const userDocRef = await createUserDocumentFromAuth(res.user);
			}
		};
		fetchData().catch(console.error);
	}, []);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
			<button onClick={signInWithGoogleRedirect}>
				Sign in with Google Redirect
			</button>

			<SignupForm />
		</div>
	);
};

export default Authentication;
