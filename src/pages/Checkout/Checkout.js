import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Checkout = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleOrderSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const phone = form.phone.value
        const email = user?.email || 'unregister'
        const message = form.message.value

        const order = {
            service: _id,
            serviceName: title,
            price,

            customer: name,
            phone,
            email,
            message
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('order placed successfully')
                    form.reset()
                }

            })
            .catch(err => console.error(err))
    }

    return (
        <div className='mt-4 mb-4'>

            <form onSubmit={handleOrderSubmit}>
                <h2 className="text-4xl">You are choosing {title}</h2>
                <h3 className="text-3xl">You are choosing ${price}</h3>
                <div className='grid lg:grid-cols-2 gap-5 mt-2' >
                    <input type="text" name='firstName' placeholder="First Name" className="input input-bordered w-full" required />
                    <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered w-full" required />
                    <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered w-full" required />
                    <input type="text" name='email' placeholder="Your Email" defaultValue={user?.email} readOnly className="input input-bordered w-full" required />
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Enter your message here" required></textarea>
                <input className='btn btn-success' type="submit" value="place your order" />
            </form>
        </div>
    );
};

export default Checkout;