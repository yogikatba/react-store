import React from 'react'
import Title from '../Title'
import CartColumns from './CartColumns.js'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../context'
import List from './List'
import Totals from './Totals'

export default function Cart() {
    return (
        <section>
            <ProductConsumer>
                {value => {
                    if(value.cart.length>0){
                        return(
                            <div>
                            <Title name="your" title=" cart"/>
                            <CartColumns/>
                            <List value={value}/>
                            <Totals value={value}/>
                            </div>
                        )
                    }
                    else{
                        return <EmptyCart/>
                    } 
                }
                }
            </ProductConsumer>
            
        </section>
    )
}
