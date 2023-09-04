
export const validateEmail = (email:string):boolean => {
    const regExp = new RegExp( /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    return regExp.test(email)
}

export const validatePassword = (password:string):boolean =>{
    const regExp = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/);

    return regExp.test(password)
}