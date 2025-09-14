function createPhoneNumber(numbers) {
  if (!Array.isArray(numbers) || numbers.length !== 10) {
    throw new Error('Ожидается массив из 10 чисел');
  }
  const areaCode = numbers.slice(0, 3).join('');
  const firstPart = numbers.slice(3, 6).join('');
  const secondPart = numbers.slice(6).join('');
  return `(${areaCode}) ${firstPart}-${secondPart}`;
}

function performTask(taskNumber, inputData) {
  let result;
  switch (taskNumber) {
    case '1':
      const numbers = JSON.parse(inputData);
      result = createPhoneNumber(numbers);
      break;
    default:
      throw new Error('Неизвестный номер задачи');
  }
  return result;
}

module.exports = { performTask };