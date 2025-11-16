// TODO: REMOVE THE COMMENT
// * problem 1:
const formatValue = (value: string | number | boolean) => {
    if (typeof value === "string") {
        const uppercase = value.toUpperCase();
        return uppercase
    } else if (typeof value === "number") {
        const multiple = value * 10;
        return multiple;
    } else if (typeof value === "boolean") {
        if (value) {
            return false;
        } else {
            return true;
        }
    }
};


// problem 2:
