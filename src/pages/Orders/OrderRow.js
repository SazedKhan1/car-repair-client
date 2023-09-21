
import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handleDelete, handleUpdate }) => {
    const { customer, status, price, email, service, serviceName, _id } = order;
    const [orderService, setOrderService] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))

    }, [])
    // console.log(order)


    return (
        <div>
            <tr>
                <th>
                    <label>
                        <button className='btn btn-ghost' onClick={() => handleDelete(_id)}>X</button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                {
                                    orderService?.picture &&
                                    <img src={orderService.picture} alt="Avatar Tailwind CSS Component" />}
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{customer}</div>
                            <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {email}
                    <br />
                    <span className="badge badge-ghost badge-sm">{serviceName}</span>
                </td>
                <td>{price}</td>
                <th>
                    <button
                        onClick={() => handleUpdate(_id)}
                        className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
                </th>
            </tr>
        </div>
    );
};

export default OrderRow;