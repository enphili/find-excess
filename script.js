const findExcess = str => {
	const suite = 'абвгдеёжзийклм';
	let counterErr = 0;
	str.split('').findIndex(elem => {
		if (suite.indexOf(elem) < 0) counterErr++;
	});
	return `исключения/весь_массив: ${counterErr}/${str.length}`;

	// return `исключения/весь_массив: ${str.match(/[^а-я]/g).length}/${str.length}`; // если эталонный набор это часть алфавита
};

console.log(findExcess('фку"@аак1клапа33вмфыф`саужд43зшщусмы!ьтйц№;атьбывв')); // 30/50
