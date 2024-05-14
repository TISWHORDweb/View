
const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
        return "Password must not contain Whitespaces.";
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
        return "Password must have at least one Uppercase Character.";
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
        return "Password must have at least one Lowercase Character.";
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
        return "Password must contain at least one Digit.";
    }
    const isContainsSymbol = /(?=.*[!@#$%^&*])/
    if (!isContainsSymbol.test(value)) {
        return "Password must contain at least one Special Symbol.";
    }

    //   const isValidLength = /^.{6}$/;
    //   if (!isValidLength.test(value)) {
    //     return "Password must be atleast 6 Characters Long.";
    //   }

    return null;
}


const DateConverter = (timestamp) => {
    const date = new Date(timestamp);

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Extracting date components
    const year = date.getFullYear();
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    // const seconds = date.getSeconds();

    // Creating a formatted date string
    const formattedDate = `${month} ${day}, ${year}`;

    return formattedDate;
}

const Check = () => {
    const Check = localStorage.getItem('userLoggedIn');
    return Check
}



export { Check, DateConverter, checkPasswordValidity }
