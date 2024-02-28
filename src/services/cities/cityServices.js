import { setQuery } from '../helper/helper' ;

const weatherToday = async (path, token) => {
	return await setQuery(path, 'get', {}, { Authorization: token });
};
const weatherAllPeriodTrip = async (path, token) => {
	return await setQuery(path, 'get', {}, { Authorization: token });
};
export {  weatherAllPeriodTrip, weatherToday };
