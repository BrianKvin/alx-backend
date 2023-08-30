import redis from 'redis';
import util from 'util';

const client = redis.createClient();

client.on('error', (error) => {
  console.log(`Redis client not connected to the server: ${err}`);
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

const displaySchoolValue = async schoolName => {
  const getAsync = util.promisify(client.get).bind(client);
  console.log(await getAsync(schoolName));
};

displaySchoolValue('Holberon');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
