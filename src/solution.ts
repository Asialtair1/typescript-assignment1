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
const getLength  = (value : string | any[]): number => {
    if (typeof value === "string"){
        const length = value.length;
        return length;
    }else if(Array.isArray(value)){
        return value.length;
    }
    return 0
}

// problem 3:
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getDetails(): string{
        return `Name: ${this.name} , Age: ${this.age}`
    }
}

