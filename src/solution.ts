// TODO: REMOVE THE COMMENT
// * problem 1:
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


// problem 2:
const getLength = (value: string | any[]): number => {
    if (typeof value === "string") {
        const length = value.length;
        return length;
    } else if (Array.isArray(value)) {
        return value.length;
    }
    return 0
}

// problem 3:
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

// problem 4:
type Item = {
    title: string;
    rating: number
};

const filterByRating = (items: Item[]): Item[] => {
    const filteredItem = items.filter(item => item.rating >= 4);
    return filteredItem;
};

// problem no 5:
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
