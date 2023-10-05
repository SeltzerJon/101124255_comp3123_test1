const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs'); 

// Check if the Logs directory exists
if (fs.existsSync(logsDir)) {

  const files = fs.readdirSync(logsDir);

  console.log('Files to delete:');
  files.forEach((file) => {
    console.log(file);
  });

  // Remove all the files in the Logs directory
  files.forEach((file) => {
    const filePath = path.join(logsDir, file);
    fs.unlinkSync(filePath);
  });

  fs.rmdirSync(logsDir);
  console.log('Logs directory removed.');
} else {
  console.log('Logs directory does not exist.');
}
