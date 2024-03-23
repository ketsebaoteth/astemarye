export const phonenumbervalidator = (phonenumber, senderror) => {
    // Regular expression to match valid digits (0-9)
    const validDigitsRegex = /^[\d+]+$/;

    if (phonenumber.startsWith("+251")) {
        if (phonenumber.length !== 13) {
            senderror("Invalid number");
            return false;
        }
    }else if(phonenumber.startsWith("09")){
        if (phonenumber.length!== 10) {
            senderror("Invalid number");
            return false;
        }
    }


    // Check if all characters are valid digits
    if (!validDigitsRegex.test(phonenumber)) {
        senderror("Contains invalid characters");
        return false;
    }

    // Check phone number prefix
    if (!phonenumber.startsWith("+251") && !phonenumber.startsWith("09")) {
        senderror("Phone number from an invalid provider");
        return false;
    }

    // All checks passed, the phone number is valid
    return true;
};
