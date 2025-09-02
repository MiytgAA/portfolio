async function fetchUserData() {
    try {
        const response = await fetch('https://reqres.in/api/user');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('User Data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

// Panggil fungsi untuk mendapatkan data
fetchUserData()