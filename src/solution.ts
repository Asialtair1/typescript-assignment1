
const formatValue = (value: string | number | boolean): string | number | boolean => {
    if (typeof value === "string") {
        const uppercase = value.toUpperCase();
        return uppercase
    } else if (typeof value === "number") {
        const multiple = value * 10;
        return multiple;
    }
    return !value;
};



const getLength = (value: string | any[]): number => {
    if (typeof value === "string") {
        const length = value.length;
        return length;
    } else if (Array.isArray(value)) {
        return value.length;
    }
    return 0
}


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `Name: ${this.name} , Age: ${this.age}`
    }
}


type Item = {
    title: string;
    rating: number
};

const filterByRating = (items: Item[]): Item[] => {
    const filteredItem = items.filter(item => item.rating >= 4);
    return filteredItem;
};


type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean
};

const filterActiveUsers = (users: User[]): User[] => {
    const activeUser = users.filter(user => user.isActive === true);
    return activeUser;
};


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean
};

const printBookDetails = (book: Book): void => {
    const available = book.isAvailable ? "Yes" : "No";
    console.log(`Title : ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${available}`)
};


type ArrayType = (number | string)[];

const getUniqueValues = (
    arr1: ArrayType,
    arr2: ArrayType
): ArrayType => {

    let result: ArrayType = [];

    const isExists = (array: ArrayType, value: string | number): boolean => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true;
            }
        }
        return false;
    };

    for (let i = 0; i < arr1.length; i++) {
        if (!isExists(result, arr1[i]!)) {
            result[result.length] = arr1[i]!;
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!isExists(result, arr2[i]!)) {
            result[result.length] = arr2[i]!;
        }
    }

    return result;
};

type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {

    const total = products.map(product => {
        const total = product.price * product.quantity;
        if (product.discount) {
            return total * (1- product.discount / 100);
        }
        return total;
    }).reduce((accumulator, current) => accumulator + current, 0);
    return total;
};