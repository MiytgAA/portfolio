function mengambilID(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = {
          1: { name: 'Raziq', age: 16 },
          2: { name: 'Habaib', age: 18 },
        };
        
        const user = users[userId];
        
        if (user) {
          resolve(user);
        } else {
          reject('User not found');
        }
      }, 3000);
    });
  }
  
  
  mengambilID(1)
  .then((user) => {
    console.log('User ditemukan:', user);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  mengambilID(2)
  .then((user) => {
    console.log('User ditemukan:', user);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

mengambilID(3)
  .catch((error) => {
    console.error('Error:', error);
  });
