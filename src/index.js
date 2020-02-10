import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLoaction from './useLocation.jsx';

const App = () => {
	const [ lat, errorMeassage ] = useLoaction();
	let content;
	if (errorMeassage) {
		content = <div>Error: {errorMeassage}</div>;
	} else if (lat) {
		content = <SeasonDisplay lat={lat} />;
	} else {
		content = <Spinner message="Please accept location request!" />;
	}

	return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
