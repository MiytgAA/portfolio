// async function fetchApi () {
//     const response = fetch ('https://reqres.in/api/user')

//     console.log(await response)

//     const dataAsli = await result.json()
//     console.log(dataAsli)
// }

// fetchApi()

async function fetchApi() {
    try {
        const response = await fetch('https://reqres.in/api/users'); // Perbaiki URL juga
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const dataAsli = await response.json();
        console.log(dataAsli);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

fetchApi();
