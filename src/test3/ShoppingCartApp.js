import React, { Component } from 'react';

export default class ShoppingCartApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: this.props.todos,
            filteredTodos: this.props.todos
        }

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    }

    handleAddTodo(e, prod, price, qty){

        e.preventDefault();

        let todo =  {id: this.state.todos.length+1, name: prod, price: price, qty: qty, isCompleted: false};

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

    render() {
        return (
            <div>
                <TodoForm />
                <TodoList todos={this.state.filteredTodos} 
                handleUpdateTodo={this.handleUpdateTodo}
                handleDeleteTodo={this.handleDeleteTodo}/>
                <TodoFilter handleAddTodo={this.handleAddTodo}/>
                <OrderDetailTitle />
                <OrderDetailList />
            </div>)

    }
}

/** OrderCartList */
function TodoForm(){
    return (
        <div style={{ldisplay: 'table', borderCollapse: 'collapse'}}>
            <ul style={{ display: 'table-row' , border:'solid 1px red'}}>
                <li style={{display: 'table-cell', borderRight: '1px dotted #fff', background:'#fcd6d6', width: '150px'}}>產品名稱</li>
                <li style={{display: 'table-cell', borderRight: '1px dotted #fff', background:'#eff8ff', width: '100px'}}>價格</li>
                <li style={{display: 'table-cell', borderRight: '1px dotted #fff', background:'#effff0', width: '80px'}}>數量</li>
                <li style={{display: 'table-cell', borderRight: '1px dotted #fff', background:'#7fffd4', width: '100px'}}>操作</li>
            </ul>
        </div>
    )
}

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

    return (
        <div style={{ldisplay: 'table', borderCollapse: 'collapse'}}>
            <ul style={{ display: 'table-row' , border:'solid 1px red'}}>
                <li style={{display: 'table-cell', borderRight: '1px dotted #fff', background:'#fcd6d6', width: '150px'}}>
                <input type="checkbox" checked={this.state.isCompleted} onChange={this.onCheckedChange.bind(this,this.props.id)}></input>{this.props.name}</li>
                <li style={{display: 'table-cell', borderRight: '1px dotted #fff', background:'#eff8ff', width: '100px' }}>{this.props.price}</li>
                <li style={{display: 'table-cell', borderRight: '1px dotted #fff', background:'#effff0', width: '80px'}}>{this.props.qty}</li>
                <li style={{display: 'table-cell', borderRight: '1px dotted #fff', background:'#7fffd4', width: '100px'}}>
                    <a href="#" onClick={this.handleDeleteTodo.bind(this,this.props.id)}
                    style={
                        {
                            backgroundColor: '#1e90ff',
                            color: 'white',
                            padding: '8px 19px',
                            textAlign: 'center',
                            textDecoration: 'none',
                            display: 'inline-block',
                            fontSize: '12px',
                            margin: '4px 2px',
                            cursor: 'pointer',
                            borderRadius: '12px',
                            border: '1px solid #555555'
                        }}
                        >刪除</a></li>
            </ul>
        </div>
        )
    }
}

function TodoList(props) {

    let todoItems = props.todos.map((todo) => {
        console.log(todo);
        return <TodoItem key={todo.id} id={todo.id} name={todo.name} price={todo.price} qty={todo.qty} isCompleted={todo.isCompleted} {...props}/>
    });
    
    console.log(props.todos);
    return (<div>
        {todoItems}
    </div>)
}

class TodoFilter extends Component{
    constructor(props){
        super(props);
        this.state = { prod: '', price: 0, qty: 0};
        this.onTextChange = this.onTextChange.bind(this);
        this.onTextChangePrice = this.onTextChangePrice.bind(this);
        this.onTextChangeQty = this.onTextChangeQty.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    onTextChange(e){
        this.setState({
            prod : e.target.value
        })
    }

    onTextChangePrice(e){
        this.setState({
            price : e.target.value
        })
    }

   onTextChangeQty(e){
        this.setState({
            qty : e.target.value
        })
    }

    handleAddTodo(e){
        this.props.handleAddTodo(e, this.state.prod, this.state.price, this.state.qty);
    }

    render(){
        return (
                <div style={{ldisplay: 'table', borderCollapse: 'collapse'}}>
                    <ul style={{ display: 'table-row' , border:'solid 1px red'}}>
                        <li style={{display: 'table-cell', borderRight: '1px dotted #fff', background:'#fcd6d6'}}>
                            <input type="text" name="prod" onChange={this.onTextChange} placeholder="請輸入產品名稱"></input></li>
                        <li style={{display: 'table-cell', borderRight: '1px dotted #fff', background:'#eff8ff'}}>
                            <input type="text" name="price" onChange={this.onTextChangePrice} placeholder="請輸入價格"></input></li>
                        <li style={{display: 'table-cell', borderRight: '1px dotted #fff', background:'#effff0'}}>
                            <input type="text" name="qty" onChange={this.onTextChangeQty} placeholder="請輸入數量"></input></li>
                        <li style={{display: 'table-cell', borderRight: '1px dotted #fff', background:'#7fffd4', width: '100px'}}>
                            <a href="#" onClick={this.handleAddTodo}
                        style={
                            {
                                backgroundColor: '#1e90ff',
                                border: '1px solid #555555',
                                color: 'white',
                                padding: '8px 19px',
                                textAlign: 'center',
                                textDecoration: 'none',
                                display: 'inline-block',
                                fontSize: '12px',
                                margin: '4px 2px',
                                cursor: 'pointer',
                                borderRadius: '12px'
                            }
                         }
                        >新增</a></li>                    
                    </ul>
                </div>
        )
    }
}

/** Order Detail */
function OrderDetailTitle(){
    return (
        <div>
            <ul>
                <li>金額明細</li>
            </ul>
        </div>
    )
}

function OrderDetailList(props){
    return (
        <div style={{ldisplay: 'table', borderCollapse: 'collapse'}}>
            <ul style={{ display: 'table-row' , border:'solid 1px red'}}>
                <li style={{display: 'table-cell', width: '150px'}}>Prod A</li>
                <li style={{display: 'table-cell', width: '100px'}}>500</li>
                <li style={{display: 'table-cell', width: '80px'}}>3</li>
                <li style={{display: 'table-cell', width: '100px'}}>1500</li>
            </ul>
        </div>
    )
}