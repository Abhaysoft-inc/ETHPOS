import { React, useState } from 'react'


// const products = [
//     { title: 'Cabbage', isFruit: false, id: 1 },
//     { title: 'Garlic', isFruit: false, id: 2 },
//     { title: 'Apple', isFruit: true, id: 3 },


// ];


//hooks





export default function Test() {



    // const listitems = new products.map(product => <li key={product.id}>{product.title}</li>);
    // const listItems = products.map(product =>
    //     <li
    //         key={product.id}

    //     >
    //         {product.title}
    //     </li>
    // );

    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
        console.log(count);

    }

    return (
        <>

            <button onClick={handleClick}>Hello</button>

            The Button is Clicked {count} times.




        </>
    )
}
