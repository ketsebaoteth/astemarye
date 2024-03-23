export const validatepassword = (password,senderror) => {
    if (password.length < 8) {
        senderror("password too short")
    } else {
        return true;
    }
}