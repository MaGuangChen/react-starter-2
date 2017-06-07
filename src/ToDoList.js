import React, { Component } from 'react';

export default class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: this.props.todos,
            filteredTodos: this.props.todos
        }

        this.handleAllClicked = this.handleAllClicked.bind(this);
        this.handleCompletedClicked = this.handleCompletedClicked.bind(this);
        this.handleUnCompletedClicked = this.handleUnCompletedClicked.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    }

    handleAddTodo(e, text){
        e.preventDefault();

        let todo =  {id: this.state.todos.length+1, name: text, isCompleted: false};

        this.setState({
            todos : this.state.todos.concat(todo),
            filteredTodos : this.state.filteredTodos.concat(todo)
        })
    }

    handleUpdateTodo(id, e){
        console.log('handleUpdateTodo-id:' + id);
        console.log('handleUpdateTodo-e:' + e);

        this.setState((prevState)=>({
            todos : prevState.todos.map((item, i) => {

                if(item.id == id){
                    item.isCompleted = !item.isCompleted
                }
                return item
            }),
            filteredTodos : prevState.filteredTodos.map((item, i) => {

                if(item.id == id){
                    item.isCompleted = !item.isCompleted  
                }
                 return item
            })

        }))
    }

    handleDeleteTodo(id, e){
        e.preventDefault();
        this.setState((prevState)=>({
            todos : prevState.todos.filter((item, i) => {
                if(item.id !== id){
                    return item
                }
            }),
            filteredTodos : prevState.todos.filter((item, i) => {

                if(item.id !== id){
                    return item
                }
            })

        }))
    }


    handleAllClicked(e){
        e.preventDefault();

        this.setState(()=>({
            filteredTodos : this.state.todos
        }))       
    }

    handleUnCompletedClicked(e){
        e.preventDefault();

        let filteredTodos = this.state.todos.filter((item)=>{
            if(!item.isCompleted){
                return item
            }
        })

        this.setState(()=>({
            filteredTodos : filteredTodos
        }))
    }

    handleCompletedClicked(e){
        e.preventDefault();
        let filteredTodos = this.state.todos.filter((item)=>{
            if(item.isCompleted){
                return item
            }
        })
        this.setState(()=>({
            filteredTodos : filteredTodos
        }))
    }

    render() {
        return (
            <div>
                <TodoForm handleAddTodo={this.handleAddTodo}/>
                <TodoList todos={this.state.filteredTodos} 
                handleUpdateTodo={this.handleUpdateTodo}
                handleDeleteTodo={this.handleDeleteTodo}/>
                <TodoFilter handleAllClicked={this.handleAllClicked}
                            handleCompletedClicked={this.handleCompletedClicked}
                            handleUnCompletedClicked={this.handleUnCompletedClicked}/>
            </div>)

    }
}

/** class */
class TodoForm extends Component{
    constructor(props){
        super(props);
        this.state = {text : ''}
        this.onTextChange = this.onTextChange.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    onTextChange(e){
        this.setState({
            text : e.target.value
        })

    }

    handleAddTodo(e){

        this.props.handleAddTodo(e, this.state.text);

    }

    render(){
        return (
            <div>
                <input type="text" onChange={this.onTextChange}></input>
                <a href="#" onClick={this.handleAddTodo}>新增</a>
                
                </div>
        )
    }

}

/**
function TodoForm(props) {

    function handleAddTodo(e){

    }

    return (
        <div>
        <input type="text"></input>
        <a href="#">新增</a>
        
        </div>
        )
}

 */


class TodoItem extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            isCompleted : this.props.isCompleted
        }

        
    }

    onCheckedChange(e,id){
        console.log('onCheckedChange-e:' + e);
        console.log('onCheckedChange-id:' + id);
        this.setState((prevState)=>({
            isCompleted : !prevState.isCompleted
        }))


        this.props.handleUpdateTodo(e, id)
    }

    handleDeleteTodo(e, id){

        this.props.handleDeleteTodo(e, id);
    }


    render(){

    return (<div>
        <input type="checkbox" checked={this.state.isCompleted} onChange={this.onCheckedChange.bind(this,this.props.id)}></input>
        {this.props.name}
        <a href="#" onClick={this.handleDeleteTodo.bind(this,this.props.id)}>刪除</a>
    </div>)
    }
}


/*
function TodoItem(props) {
    
    return (<div>
        <input type="checkbox" checked={props.isCompleted}></input>
        {props.name}
        <a href="#">刪除</a>
    </div>)
}

*/


function TodoList(props) {

    let todoItems = props.todos.map((todo) => {
        console.log(todo);
        return <TodoItem key={todo.id} id={todo.id} name={todo.name} isCompleted={todo.isCompleted} {...props}/>
    });

    
    console.log(props.todos);
    return (<div>
        {todoItems}
    </div>)
}


function TodoFilter(props){

    function handleAllClicked(e){

        props.handleAllClicked(e);


    }

    function handleUnCompletedClicked(e){
         props.handleUnCompletedClicked(e);
        

    }

    function handleCompletedClicked(e){
        props.handleCompletedClicked(e);
       
    }

    return (
        <div>
            <ul style={{listStyle:'none', paddingLeft: 0}}>
                <li style={{float:'left',padding:'3px'}}><a href="#" onClick={handleAllClicked}>全部</a></li>
                <li style={{float:'left',padding:'3px'}}><a href="#" onClick={handleUnCompletedClicked}>未完成</a></li>
                <li style={{float:'left',padding:'3px'}}><a href="#" onClick={handleCompletedClicked}>已完成</a></li>
            </ul>
        </div>
    )
}