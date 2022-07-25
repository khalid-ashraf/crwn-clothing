import SignupForm from "../../components/sign-up/sign-up.component";
import SigninForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.jsx";
import { AuthenticationContainer } from "./authentication.styles.jsx";

const Authentication = () => {
	return (
		<AuthenticationContainer>
			<SigninForm />
			<SignupForm />
		</AuthenticationContainer>
	);
};

export default Authentication;
