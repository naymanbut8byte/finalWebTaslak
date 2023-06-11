import {createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import "../sign-in/sign-in.css";
const SignIn = () => {
    const logGoogleUser = async () =>{
   
        const {user} = await signInWithGooglePopup();
        
        await createUserDocumentFromAuth(user);
    }
    return ( 
        <div className="sign-in">
            <SignUpForm/>
            <button className="buttons"  onClick={logGoogleUser}>
                Google ile giriş
            </button>
        </div>
    );
}
 
export default SignIn;