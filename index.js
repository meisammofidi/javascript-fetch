//By default fetch using GET method
async function getAll() {
  // solution 1 - Using promise with then
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => console.log(data));

  // solution 2 - Using Async/await
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos');
    const jesult = await result.json();
    console.log(jesult);
  } catch (error) {
    console.error(error.message);
  }
}

async function getUserById(Id) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${Id}`)
    // .then((res) => {
    //   if (res.ok) console.log('SUCCESS');
    //   else console.log(`FAILED. There is no item with ${Id}`);
    // })
    .then((res) => res.json())
    .then((data) => console.log(data));

  // solution 2 - Using Async/await
  try {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${Id}`
    );
    if (!result.ok)
      throw new Error(`Request failed with status (${result.status})`);
    const jesult = await result.json();
    console.log(jesult);
  } catch (error) {
    console.error(error.message);
  }
}

async function insertItem() {
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
      console.log(`insert done successfully, ${JSON.stringify(data)}`)
    );

  // solution 2 - Using Async/await
  try {
    const insertedItem = await fetch(
      'https://jsonplaceholder.typicode.com/todos',
      {
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
      }
    );

    console.log(insertedItem);
  } catch (error) {
    console.error(error.message);
  }
}

getAll();
getUserById(20);
insertItem();
