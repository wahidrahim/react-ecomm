import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_7O3uUKIKtuoaeNZ8HvagUBWn00dr57LEEW';
  const onToken = (token) => console.log(token);

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing LTD."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripCheckoutButton;
