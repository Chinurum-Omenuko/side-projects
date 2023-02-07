const http = new XMLHttpRequest();
const url = "https://reqres.in/api/users/2";

http.open("GET", url);
http.send();