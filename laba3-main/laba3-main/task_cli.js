const { program } = require('commander');
const fs = require('fs');
const { pipeline } = require('stream');
const { Transform } = require('stream');
const { performTask } = require('./tasks');

program
  .option('-i, --input <путь>', 'путь к входному файлу')
  .option('-o, --output <путь>', 'путь к выходному файлу')
  .requiredOption('-t, --task <номер>', 'номер задачи')
  .parse(process.argv);

const options = program.opts();
const taskNumber = options.task;
const inputPath = options.input;
const outputPath = options.output;

function createTransformStream() {
  return new Transform({
    transform(chunk, encoding, callback) {
      const inputData = chunk.toString().trim();
      try {
        const result = performTask(taskNumber, inputData);
        callback(null, result + '\n');
      } catch (error) {
        callback(new Error(`Ошибка выполнения задачи: ${error.message}`));
      }
    }
  });
}

async function main() {
  let inputStream;
  let outputStream;

  if (inputPath) {
    if (!fs.existsSync(inputPath)) {
      console.error(`Ошибка: файл ${inputPath} не существует`, 'stderr');
      process.exit(1);
    }
    try {
      inputStream = fs.createReadStream(inputPath);
    } catch (error) {
      console.error(`Ошибка: невозможно прочитать файл ${inputPath}`, 'stderr');
      process.exit(1);
    }
  } else {
    inputStream = process.stdin;
    console.log('Введите данные (Ctrl+D для завершения на Unix, Ctrl+Z на Windows):');
  }

  if (outputPath) {
    try {
      outputStream = fs.createWriteStream(outputPath);
    } catch (error) {
      console.error(`Ошибка: невозможно записать в файл ${outputPath}`, 'stderr');
      process.exit(1);
    }
  } else {
    outputStream = process.stdout;
  }

  const transformStream = createTransformStream();

  pipeline(
    inputStream,
    transformStream,
    outputStream,
    (error) => {
      if (error) {
        console.error(`Ошибка: ${error.message}`, 'stderr');
        process.exit(1);
      }
      if (!inputPath) {
        console.log('Задача выполнена. Введите новые данные:');
        main();
      }
    }
  );
}

main();