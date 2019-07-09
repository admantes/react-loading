import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Loading from './Loading';

function App() {
	const [isLoading, setLoading] = useState(true);
	
	
	const finishLoading = ()=>{
		setLoading(false);
	}
	
	useEffect( ()=> {
		
		setTimeout( ()=>{
			setLoading(false);
		}, 5000 );
	
	});
	
	
	if(isLoading){
		 return (
			<div>
			<Loading /> 
			<button onClick={finishLoading}> Finish Loading </button>
		 </div>
		  ); 
	}else{
		return (
		<div> Loaded </div>
		);
	}
	
 
}

export default App;
