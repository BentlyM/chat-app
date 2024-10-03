const formatDate = (date: string) => {
	const _date = new Date(date);

	let hours : number | string = _date.getHours();
	const minutes = String(_date.getMinutes()).padStart(2, '0');

	const period = hours >= 12 ? 'PM' : 'AM'; 
	hours = hours % 12; 
	hours = hours ? String(hours).padStart(2, '0') : '12'; 

	return `(${hours}:${minutes} ${period})`; 
};

export { formatDate };
