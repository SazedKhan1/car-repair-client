import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import OrderRow from './OrderRow';



const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    console.log(orders)
    return (
        <div>
            <h1 className='text-5xl'>You have order {orders.length} item</h1>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <button className='btn btn-ghost'>X</button>
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            orders.map(order => <OrderRow order={order} key={order._id}></OrderRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;