
export const validateData = (email, password,name) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isNameValid = /^[a-zA-Z\s]{2,50}$/.test(name);
    
if(!isNameValid) return "name is not valid!";
    if(!isEmailValid) return "email is not valid!";
    if(!isPasswordValid) return "password is not valid!";

    return null;
}