// import './App.css';
import { useNavigate } from "react-router-dom";

import GooglePayButton from '@google-pay/button-react';
import React from 'react';
import styled from 'styled-components';
 const DIV = styled("div")`
    text-align: center;
    
 `
function Googlepay(idparol) {
  let navigate = useNavigate()
  const NAVIGATE = () =>{
   navigate(idparol)
  }
  return (
    <DIV className="App">
      {/* <h1><img src={logo} className="App-logo" alt="logo" /> Google Pay React Demo</h1> */}
      
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA','DISCOVER'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '9860011212982208',
            merchantName: 'MAMURJONOV YOQUBJON',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '4',
            currencyCode: 'USD',
            countryCode: 'UZ',
          },
          shippingAddressRequired: true,
          callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('Success', paymentRequest);
        }}
        onPaymentAuthorized={paymentData => {
            console.log('Payment Authorised Success', paymentData)
            return { transactionState: 'SUCCESS'}
          }
        }
        onPaymentDataChanged={paymentData => {
            console.log('On Payment Data Changed', paymentData)
            return { }
          }
        }
        existingPaymentMethodRequired='true'
        buttonColor='#33a7ef'
        buttonType='Buy'
        onClick={NAVIGATE}
      />
    </DIV>
    
  );
}

export default Googlepay;