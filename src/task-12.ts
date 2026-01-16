// Є функція sendDoneStatus:

// function sendDoneStatus(callback) {
//   callback("done");
// }

// Завдання:

// Типізуйте параметр callback, щоб це була функція,
// яка приймає рядок і повертав void.

function sendDoneStatus(callback: (s: string) => void): void {
  callback("Herring");
}

function heil(name: string) {
  console.log(`Heil, ${name}`);
}

sendDoneStatus(heil);
