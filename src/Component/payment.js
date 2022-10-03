import React, { useState } from 'react';
import mainbg from '../img/main-bg.png'
import shape from '../img/shape.png'
import icons from '../img/icons.png'

function Payment() {
    const [amount, setamount] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
        if (amount === "") {
            alert("Please enter amount");
        }
        else {
            var options = {
                key: "rzp_test_vCz7dMxFI6qC94",
                key_secret: "395d1wGWipzT22lMFrAspjjx",
                amount: amount * 100,
                currenty: "INR",
                name: "Test Razorpay",
                description: "Razorpay project",
                handler: function (response) {
                    alert(response.razorpay_payment_id);
                },
                prefill: {
                    name: "",
                    email: "",
                    contact: ""
                },
                notes: {
                    address: "",
                },
                theme: {
                    color: "#000"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open();
        }
    }
    return (
        <section className='main'>
            <div className="page-shape">
                <img src={shape} alt="razorpay paygateway integration" />
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='column-wrap justify-content-between'>
                            <div className="banner-img">
                                <img src={mainbg} alt="Razorpay demo reacjs" />
                            </div>
                            <div className="title">
                                <div className="title-content">
                                    <h1>Razorpay Payment Gateway using ReactJS</h1>
                                    <p className='mt-3'>I hope the tutorial has helped you learn how to integrate Paytm payment gateway in ReactJS.</p>
                                    <a href="https://dev.to/rajamanickam/how-to-integrate-razorpay-payment-gateway-in-reactjs-5fnb" target="_blank" className='btn btn-success'>View Tutorial</a>
                                </div>
                            </div>
                            <div className="technology">
                                <div className="tech-logo">
                                    <img src={icons} alt="Razorpay test payment" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="column-wrap justify-content-center">
                            <div className="fxt-form">
                                <h3 className='mb-3'>Demo</h3>
                                <p>Enter the amount to be transferred to the virtual account as the <strong>test payment.</strong></p>
                                <form>
                                    <div className="form-group mt-5">
                                        <input type="text" className="form-control" value={amount} onChange={(e) => setamount(e.target.value)} placeholder="Enter amount" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" onClick={handlesubmit} className="btn-submit">Send</button>
                                    </div>
                                </form>
                            </div>
                            <p><i>*This is a dummy transaction, only for testing purpose.</i></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Payment;