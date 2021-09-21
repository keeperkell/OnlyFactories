// file: src/webpages/ordering.js

import React, {useEffect} from "react";

const OrderPage = () => {
    useEffect(() => {
        document.title = 'Order page';
    });

    return (
        <div>
            <h1>Capstone</h1>
            <p>This is the order page...</p>
        </div>
    );
};

export default OrderPage;