import axios from 'axios';
const controller = new AbortController();
const token ='TR9V49QVZMVNT4E55PNC8N2MM'
let city = 'London,Uk'
let pathTodayWeather ='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'
	+city+'/today?unitGroup=metric&include=days&key='
	+token+'&contentType=json'

async function setQuery(
	url,
	method = 'get',
	body = null,
	headers = {
		Accept: 'application/json',
		'Content-Type': 'application/json;charset=utf-8',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT,DELETE',
	}
) {
	setLoading(true);
	try {
		let options = {
			baseURL: pathTodayWeather,
			headers: headers,
			responseType: 'json',
		};
		let data = JSON.parse(JSON.stringify(body));
		let res = '';

		if (method === 'post') {
			res = await axios.post(url, data, options);
		}
		if (method === 'put') {
			res = await axios.put(url, data, options);
		}

		if (method === 'get') {
			res = await axios.get(url, options);
		}

		if (method === 'delete') {
			res = await axios.delete(url, options);
		}
		if (method === 'patch') {
			res = await axios.patch(url, body, options);
		}
		controller.abort();
		return res;
	} catch (e) {
		setLoading(false);
		setError(e);
		return Error('Server error 500');
	}
}
function setLoading(status) {
	return status;
}

function setError(status) {
	return status;
}

export { setQuery, setLoading, setError };
