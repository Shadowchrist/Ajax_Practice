const getElement = document.querySelector("#get_services");
const getURL = "http://localhost:3000/employees/1";
makePromiseCall("GET", getURL, true)
    .then(responseText => {
        getElement.textContent = "Get User Data: " + responseText;
    })
    .catch(error => getElement.textContent = "GET Error Status: " + JSON.stringify(error));

const deleteElement = document.querySelector("#delete_services");
const deleteURL = "http://localhost:3000/employees/4";
makePromiseCall("DELETE", deleteURL, false)
    .then(responseText => {
        deleteElement.textContent = "User Deleted: " + responseText;
    })
    .catch(error => deleteElement.textContent = "DELETE Error Status: " + JSON.stringify(error));

const postElement = document.querySelector("#post_services");
const postURL = "http://localhost:3000/employees";
const employeeData = { "name": "Harry", "salary": 5000 };
makePromiseCall("POST", postURL, true, employeeData)
    .then(responseText => {
        postElement.textContent = "User Added: " + responseText;
    })
    .catch(error => postElement.textContent = "POST Error Status: " + JSON.stringify(error));