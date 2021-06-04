import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IymFlIF9XOnM0Sf7xNKZHcvxQoKtiQIo9eKke4PMy9kIY33jUvHlGxoFdboZpxHhtupuyR0mwplc0u4Es13wo140087V1y80o';

  const onToken = (token) => {
    console.log(token);
    alert('Payment successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
