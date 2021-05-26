//By default fetch using GET method
function getAll() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function getUserById(Id) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${Id}`)
    // .then((res) => {
    //   if (res.ok) console.log('SUCCESS');
    //   else console.log(`FAILED. There is no item with ${Id}`);
    // })
    .then(res => res.json())
    .then((data) => console.log(data));
}

function insertItem() {
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: 1,
      id: 10,
      title: 'A chorse at home',
      completed: true,
    }),
  })
    .then((res) => res.json())
    .then((data) =>
      console.log(`insert done successfully, ${data}`)
    );
}

getAll();
getUserById(8);
insertItem();
