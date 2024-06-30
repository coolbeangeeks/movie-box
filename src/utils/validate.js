export const validateform=(email,password)=>{
    const email_id= /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);
    const password_=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/.test(password)

    if(!email_id) return 'Please enter a valid email'
    if(!password_) return 'Please enter a valid password'

    return null;


}