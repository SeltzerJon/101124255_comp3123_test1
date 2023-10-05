const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs'); 

// Create the Logs directory if it doesn't exist
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
  console.log('Logs directory created.');
}


process.chdir(logsDir);


for (let i = 1; i <= 10; i++) {
  const fileName = `log${i}.txt`;
  const filePath = path.join(logsDir, fileName);
  const text = `This is log file ${i}.`;

  fs.writeFileSync(filePath, text);
  console.log(`Created ${fileName}`);
}
