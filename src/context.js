import React,{useState,useEffect} from 'react'
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();

function ProductProvider(props) {
    const [products,setProducts] = useState([]);
    const [detailProducts,setDetailProducts] = useState(detailProduct);
    const [cart,setCart] = useState([]);
    const [cartSubTotal,setCartSubTotal] = useState(0);
    const [cartTax,setCartTax] = useState(0);
    const [cartTotal,setCartTotal] = useState(0);

    useEffect(()=>{
        setPdt()
    },[])

    useEffect(()=>{
        addTotals()
        if(cart.length===0)setPdt()
    },[cart])
    
    const getItem = (id) =>{
        const product = products.find(item => item.id === id)
        return product;
    }

    const setPdt = () =>{
        let tempPdt=[]
        storeProducts.forEach(item=>{
            const singleItem={...item}
            tempPdt=[...tempPdt,singleItem]
        })
        setProducts(tempPdt)
    }
    const handleDetail = (id) =>{
        const product = getItem(id);
        setDetailProducts(product);
    }
    const addToCart = (id) =>{
        let tempPdts = [...products]
        const index=tempPdts.indexOf(getItem(id));
        //const product=getItem(id);
        const product=tempPdts[index]
        product.inCart=true
        product.count=1
        const price=product.price;
        product.total=price
        setProducts(tempPdts)
        setCart([...cart,product])
        //addTotals()
    }

    const increment = id =>{
        // const product=getItem(id);
        // product.count=product.count+1;
        // addTotals()
        let tmpCart = [...cart]
        const selPdt = tmpCart.find(item => item.id===id)
        const index = tmpCart.indexOf(selPdt)
        const product = tmpCart[index]
        product.count = product.count+1;
        product.total = product.count * product.price
        setCart([...tmpCart])
    }

    const decrement = id =>{
        let tmpCart = [...cart]
        const selPdt = tmpCart.find(item => item.id===id)
        const index = tmpCart.indexOf(selPdt)
        const product = tmpCart[index]
        product.count = product.count-1;
        if(product.count===0)removeItem(id)
        else{
            product.total = product.count * product.price
            setCart([...tmpCart])
        }              
    }

    const removeItem = id =>{
        let tmpPdts = [...products]
        let tmpCart = [...cart]
        tmpCart = tmpCart.filter(item => item.id!==id)
        const index=tmpPdts.indexOf(getItem(id));
        let removedPdt = tmpPdts[index]
        removedPdt.inCart = false
        removedPdt.count = 0
        removedPdt.total = 0
        setCart([...tmpCart])
        setProducts([...tmpPdts])
    }

    const clearCart = id =>{
        setCart([])
    }

    const addTotals = () =>{
        let subTot = 0;
        cart.map(item =>(subTot+=item.total))
        const tempTax = subTot * 0.1;
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTot + tax;
        setCartSubTotal(subTot);
        setCartTax(tax)
        setCartTotal(total)
    }

    return (
        <ProductContext.Provider value={{
            products,
            detailProducts,
            cart,
            cartSubTotal,
            cartTotal,
            cartTax,
            handleDetail,
            addToCart,
            increment,
            decrement,
            removeItem,
            clearCart
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};