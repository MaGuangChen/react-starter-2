import React, {Component} from 'react';

import Message from './Message';
import InputText from './input/InputText';
import TextTarea from './input/TextArea';
import SelectOption from './select/SelectOption';
import Checkbox from './button/Checkbox';
import RadioButton from './button/RadioButton';
import Form from './form/Form';
import CustomComp from './Custom';
//import Circle, {getCircumference, getRoundArea}  from './module/index';
import * as Circle from './module/Module';
import Ref from './input/Ref';

class ProductItem extends Component{
    constructor(props){
        super(props);
        
    }
    render() {
        return (
            <div>
                <div>{this.props.product.name}</div>
                <div>{this.props.product.price}</div>
                <div>{this.props.product.quantity}</div>
            </div>
        );
    }
}

class ProductList extends Component{
    constructor(props){
        super(props);
        
    }
    render() {
        let productItems = this.props.products.map((product)=>{
           return  <ProductItem key={product.id} product={product}></ProductItem>
        });
        return (
            <div>
            
                {productItems}
            </div>
        );
    }


}

class Header extends Component{
    constructor(props){
        super(props);
        
    }
    render() {
        return (
            <header>
                This is the header
            </header>
        );
    }
}

class Footer extends Component{
    constructor(props){
        super(props);
        
    }
    render() {
        return (
            <header>
                This is the footer
            </header>
        );
    }
}
//console.log(getCircumference(3));
//console.log(getRoundArea(3));
class App extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
//console.log(getCircumference(3));
//console.log(getRoundArea(3));
console.log(Circle.getCircumference(3));
console.log(Circle.getRoundArea(3));

const user = {
	name : 'Genie',
	greeting: 'Good Afternoon'
}

function greetingMessage(user){
	return `HelloWorld! ${user.greeting} ${user.name}` 
}

const title = <h2>{greetingMessage(user)}</h2>
        let products = [
            {id: 1, name:'Product A', price:200, quantity:3},
            {id: 2, name:'Product B', price:300, quantity:1},
            {id: 3, name:'Product C', price:500, quantity:2},
            {id: 4, name:'Product D', price:100, quantity:4},
            {id: 5, name:'Product E', price:250, quantity:3}
        ];
        let itmes = [1,2,3,4,5];
let newItems = itmes.filter(function(value){
	return value > 3;
})

console.log('newItems:' + newItems);

let newItems2 = itmes.map(function(value){
	return value * 2;
})

console.log('newItems2:' +newItems2);

function double(value){
	return value * 2;
}

let newItems3 = itmes.map(function(value){
	return double(value);
})

console.log('newItems3:' + newItems3);

let newItems4 = itmes.reduce(function(a,b){
	return a + b;
})

console.log('newItmes4:' + newItems4);
let custom =  <CustomComp name={title} />
        return (
            <div>
                <Header/>
                    {custom}
                    <Message>
                        <h2>Hello Genie</h2>
                    </Message>
                    <InputText/><br/>
                <TextTarea/><br/>
                <SelectOption/><br/>
                <Checkbox/><br/>
                <RadioButton/><br/>
                <Form/>
                <Ref />
                    <ProductList products={products} />
                <Footer/>
            </div>
        );
    }
}

export default App;