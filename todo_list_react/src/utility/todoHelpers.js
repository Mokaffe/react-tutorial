export const generateId = () => {
    return Math.floor(Math.random() * 9000) + 1000;
}

export const addTodo = (list, item) => {
    return list.concat(item);
};

export const partial = (fn, ...args) => fn.bind(null, ...args);