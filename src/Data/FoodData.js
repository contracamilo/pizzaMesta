export function formatPrice(price) {
    return price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });
}

export const foodItems = [{
        name: "Cheese Pizza",
        img: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        section: "Pizza",
        price: 1
    },
    {
        name: "Pepperoni Pizza",
        img: "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        section: "Pizza",
        price: 1.5
    },
    {
        name: "Chicken Pizza",
        img: "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        section: "Pizza",
        price: 2
    },
    {
        img: "https://images.pexels.com/photos/1376962/pexels-photo-1376962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        name: "Veggie Pizza",
        section: "Pizza",
        price: 2
    },
    {
        img: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        name: "Burger",
        section: "Sandwich",
        price: 3
    },
    { img: "https://images.pexels.com/photos/133578/pexels-photo-133578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", name: "Gyro", section: "Sandwich", price: 4.5 },
    {
        img: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        name: "Shrimp PoBoy",
        section: "Sandwich",
        price: 6
    },
    {
        img: "https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        name: "Fries",
        section: "Sides",
        price: 1
    },
    {
        price: 1,
        name: "Soda",
        section: "Drinks",
        choices: ["Coke", "Sprite", "Root Beer"]
    }
];

export const foods = foodItems.reduce((res, food) => {
    if (!res[food.section]) {
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {});