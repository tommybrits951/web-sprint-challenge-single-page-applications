import React, {useState} from "react";
import {initVal} from "./data"
import schema from "./schema"
import * as yup from "yup"
import axios from "axios"
import "./style.css"




export default function Form() {
    const [formVal, setFormVal] = useState(initVal)
    const [formErrors, setFormErrors] = useState(initVal)
    const [order, setOrder] = useState([])
    const validate = (name, value) => {
        yup.reach(schema, name)
        .validate(value)
        .then(() => {
            setFormErrors({...formErrors, [name]: ''})
        })
        .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
    }
    const change = (name, value) => {
        validate(name, value)
        setFormVal({...formVal, [name]: value})
    }
    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newVal = type === "checkbox" ? checked : value;
        
        change(name, newVal)
    }
    const postOrder = (newOrder) => {
        axios.post('https://reqres.in/api/orders', newOrder)
        .then(res => {
            setOrder([res.data, ...order])
        })
        .catch(err => {
            console.error(err)
        })
        .finally(() => {
            setFormVal(initVal)
        })
    }
    const submit = () => {
        const newOrder = {
            name: formVal.name,
            size: formVal.size,
            pepperoni: formVal.pepperoni,
            sausage: formVal.pepperoni,
            onions: formVal.onions,
            mushrooms: formVal.mushrooms,
            special: formVal.special
        }
        postOrder(newOrder)
        setFormVal(initVal)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        submit()
    }
    
    return (
        
        
        <form id="pizza-form" onSubmit={onSubmit}>
            <p>{formErrors.name}</p>
            <label>
                Name:
            <input
            type="text"
            name="name"
            value={formVal.name}
            placeholder="Enter Your Name"
            onChange={onChange}
            id="name-input"
            />
            </label>
            <label>
                Size:
                <select id="size-dropdown" name="size" onChange={onChange}>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">XLarge</option>
                </select>
            </label>
            <h4>Toppings:</h4>
            <label>
                Pepperoni:
                <input
                name="pepperoni"
                type="checkbox"
                checked={formVal.pepperoni}
                onChange={onChange}
                />
            </label>
            <label>
                Sausage:
                <input
                name="sausage"
                checked={formVal.sausage}
                type="checkbox"
                onChange={onChange}
                />
            </label>
            <label>
                Onions:
                <input
                name="onions"
                checked={formVal.onions}
                type="checkbox"
                onChange={onChange}
                />
            </label>
            <label>Mushrooms:
                <input
                name="mushrooms"
                checked={formVal.mushrooms}
                type='checkbox'
                onChange={onChange}
                />
            </label>
            <label>Special Topping:

                <input
                name="special"
                value={formVal.special}
                type='text'
                onChange={onChange}
                id='special-text'
                />
            </label>
            <input 
            type="submit"
            id="order-button"
            value="submit"/>
        </form>

    )
}
