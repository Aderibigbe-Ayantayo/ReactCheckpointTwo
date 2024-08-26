import Image from "./Image"


const Cart = () =>{
    const clickMe = (val) =>{
        alert(val)
    }
    const productList = [{
        name: "cannabis",
        price: 20.00,
        image: "./image/product3.png"
    },
    {
        name: "Iphone 15",
        price: 500.00,
        image: "./image/product2.png"
    },
    {
        name: "Hennessy Bottle",
        price: 150.00,
        image: "./image/product1.png"
    },
    {
        name: "Hennessy Pack",
        price: 150.00,
        image: "./image/product1.png"
    },
    {
        name: "Hennessy Vsop",
        price: 150.00,
        image: "./image/product1.png"
    },
    {
        name: "Hennessy Friendly",
        price: 150.00,
        image: "./image/product1.png"
    },
    {
        name: "Hennessy Cognac",
        price: 150.00,
        image: "./image/product1.png"
    },
]
    return(
        <div style={{display:"flex", textAlign:"center",}}>
         {productList.map((item)=>{
           return <Image name={ item.name} price={ item.price }image= {item.image} click={()=>clickMe(item.name)}/>
         })}

        </div>
    )


}

export default Cart;