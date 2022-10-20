const newBtn = document.getElementById("newBtn");
const ft_list = document.getElementById("ft_list");

let todoCookies = document.cookie;
if (todoCookies.length !== 0) {
    todoCookies = todoCookies.split(";");
    todoCookies.forEach((text) => {
        text = text.split("=");
        insert_new_list(text[0], text[1]);
    });
}

newBtn.onclick = () => {
    let todo_text = prompt("Add todo");
    if (todo_text.trim() === "") {
        alert("Invalid Input");
        return;
    }

    let id = new Date().getTime();
    document.cookie = `${id}=${todo_text};`;
    insert_new_list(id, todo_text);
};

function insert_new_list(id, text) {
    let todo = document.createElement("p");
    todo.innerHTML = text;
    todo.onclick = () => {
        let isConfirm = confirm("Are you sure to delete this TODO");
        if (isConfirm) {
            todo.remove();
            document.cookie = `${id}=; Expires=Fri, 10 Dec 2004 06:22:23 GMT;`;
        }
    };

    ft_list.prepend(todo);
}