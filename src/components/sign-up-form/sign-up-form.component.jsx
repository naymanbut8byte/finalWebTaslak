import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import "../sign-up-form/sign-up.css";

const defaultFormFields = {
    displayName: '',
    email:'',
    password:'',
    confirmPassword:'',
}

const SignUpForm = () => {
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;

    // console.log(formFields);

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormFields({...formFields,[name]:value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Şifre kontrolü
        if (password !== confirmPassword) {
            alert("Şifrenizi kontrol ediniz!");
            return;
        }

        // Firestore'a user'ı kaydetme
        try {

            // Google Authentication
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            // User'ı Firestore'a kaydetme
            await createUserDocumentFromAuth (user,{displayName});            

        } catch (error) {
            if (error.code === "auth/weak-password") {
                alert("Şifreniz en az 6 karakter olmalı");
            }
            if (error.code === "auth/email-already-in-use") {
                alert("Bu kullanıcı adı daha önce kullanılmış");

            }
        }
    }

    return ( 
        <div className="sign-up">
            <h1>Kayıt Ol</h1>
            <form className="form" onSubmit={handleSubmit}>

                <label className="lbl">Kullanıcı Adı</label>
                <input
                type="text"
                required
                name='displayName'
                value={displayName}
                onChange={handleChange}
                />

                <label>E-Mail</label>
                <input
                type="text"
                required
                name='email'
                value={email}
                onChange={handleChange}
                />

                <label>Şifre</label>
                <input
                type="password"
                required
                name='password'
                value={password}
                onChange={handleChange}
                />

                <label>Şifreyi Onayla</label>
                <input
                type="password"
                required
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                />

                <button id="btn" type="submit">Kayıt Ol</button>
            </form>
        </div>
     );
}
 
export default SignUpForm;