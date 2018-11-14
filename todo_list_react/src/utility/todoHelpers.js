export const generateId = () => {
    return Math.floor(Math.random() * 9000) + 1000;
}

export const addTodo = (list, item) => {
    return list.concat(item);
  };