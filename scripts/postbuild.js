import { exec } from 'shelljs';

console.log('Building App for heroku...');
exec('NODE_ENV=production && babel-node ./scripts/setup.js');
console.log('Build Complete!');
