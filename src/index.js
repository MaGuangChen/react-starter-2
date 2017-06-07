import React from 'react';
import ReactDOM from 'react-dom';
//import App from './app/App';
//import Form from './test/Form';
//import Custcomcomp from './Custcomcomp';
//import Updating from './Updating';
//import Form from './test2/Form';
//import DoubleSelect from './select/DoubleSelect';
//import GithubItem from './GithubItem';
//import TodoApp from './ToDoList';
import ShoppingCartApp from './test3/ShoppingCartApp';
/*
	let area = [
	{id:0, value:"不拘", "opt":[{id:"00",value:"不拘"}]},
	{id:1, value:"國內", "opt":[{id:"10",value:"不拘"},{id:"11",value:"北部"},{id:"12",value:"中部"},{id:"13",value:"南部"},{id:"14",value:"東部"}]},
	{id:2, value:"國外", "opt":[{id:"20",value:"不拘"},{id:"21",value:"美國"},{id:"22",value:"英國"},{id:"23",value:"日本"},{id:"24",value:"韓國"}]}
	];
*/

let todolist = [
	{id: 1, name: 'Prod A ', price: 500, qty:3, isCompleted: true},
	{id: 2, name: 'Prod B ', price: 300, qty:3, isCompleted: true},
	{id: 3, name: 'Prod C ', price: 800, qty:3, isCompleted: false},
];

/*
ReactDOM.render(
	//<Form/>
	//<App />
	//<DoubleSelect area={area}/>
	//<GithubItem/>
 , document.getElementById('content')
);
*/

ReactDOM.render(
	<ShoppingCartApp todos={todolist}/>,
	document.getElementById('content')
);