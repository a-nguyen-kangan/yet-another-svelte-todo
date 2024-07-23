export async function fetchTodos() {
        
    // goes to online datastore and fetches todo items
    // await: waits for the promise to resolve - ensures that the data is available before proceeding
    const result = await fetch('https://665e45471e9017dc16ef83fe.mockapi.io/api/Todo');
    console.log("Result:", result);
    
    // if the result is not ok, log the error and return
    if (!result.ok) {
        console.error("Error fetching data:", result);
        return;
    }

    // parse the result as JSON
    const data = await result.json();
    console.log("Data:", data);
    return data;
}

export async function getTodosFunctional() {
    const result = await fetch('https://665e45471e9017dc16ef83fe.mockapi.io/api/Todo')
        .then(response => response.json())
        .catch(error => console.error("Error fetching data:", error));

    return result;
}

export async function addTodos(newItem: any) {
    const result = await fetch('https://665e45471e9017dc16ef83fe.mockapi.io/api/Todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
        }
    );

    if (!result.ok) {
        console.error("Error adding data:", result);
        return;
    }

    const response = await result.json();
    return response;

}