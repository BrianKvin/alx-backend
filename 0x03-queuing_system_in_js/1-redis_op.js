import redis from 'redis';

const client = redis.createClient();

client.on('error', (error) => {
  console.log(`Redis clien not connected to the server: ${error.message}`);
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

function displaySchoolValue(schoolName) {
  client.get(schoolName, (err, res) => {
    if (err) {
      console.error('Error:', err);
      return;
    }
    console.log('Value for', schoolName, ':', res);
  });
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
