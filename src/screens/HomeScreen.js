import React from "react";

function HomeScreen() {
  return (
    <div>
      <h2 className="color_red">IMPORTANT NOTICE</h2>
      <p className="color_red"></p>
      <h2>Backend API'S</h2>
      <div className="api-list">
        <p>
          Setup for the following api's list will be treated in this section
        </p>
        <ol>
          <li className="api-order">
            MONGODB{" "}
            <ul className="api-unorder">
              <li>
                MONGODB_URI=
                mongodb+srv://Shopmate:shopmate@cluster0.3b3srsg.mongodb.net/shopmate?retryWrites=true&w=majority
              </li>
            </ul>
          </li>
          <li className="api-order">
            JWT{" "}
            <ul className="api-unorder">
              <li>JWT_SECRET=(Your website name)</li>
            </ul>
          </li>
          <li className="api-order">
            PAYPAL{" "}
            <ul className="api-unorder">
              <li>
                PAYPAL_CLIENT_ID=AadRZKtLc1PBBkXOGqb8-Myuc_uX6mr7e9emK8ddFiHZ1xbtnvpC1Uk1Ud8x0glngnKkL8buiHBGFiyK
              </li>
            </ul>
          </li>
          <li className="api-order">
            CLOUDINARY{" "}
            <ul className="api-unorder">
              <li>CLOUDINARY_CLOUD_NAME=dbdorop0y</li>
              <li>CLOUDINARY_API_KEY=926984187527312</li>
              <li>
                CLOUDINARY_URL=cloudinary://926984187527312:nqlTb9wjfq5rq8epJhUBNwabXRA@dbdorop0y
              </li>
              <li>CLOUDINARY_API_SECRET=nqlTb9wjfq5rq8epJhUBNwabXRA</li>
            </ul>
          </li>
          <li className="api-order">
            SEND_IN_BLUE{" "}
            <ul className="api-unorder">
              <li>
                SEND_IN_BLUE_API_KEY=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
              </li>
            </ul>
          </li>
          <li className="api-order">
            MAIL_SERVICE{" "}
            <ul className="api-unorder">
              <li>MAIL_SERVICE=gmail</li>
              <li>EMAIL_ADDRESS=admin@eample.com (Your gmail email address)</li>
              <li>
                GMAIL_PASS=[paste here](this is a generated password not your
                actual gmail password)
              </li>
            </ul>
          </li>
          <li className="api-order">
            STRIPE{" "}
            <ul className="api-unorder">
              <li>STRIPE_KEY= (Ignore)</li>
            </ul>
          </li>
          <li className="api-order">
            SHOP_NAME{" "}
            <ul className="api-unorder">
              <li>SHOP_NAME=(Your website name)</li>
            </ul>
          </li>
          <li className="api-order">
            SUB_DOMAIN{" "}
            <ul className="api-unorder">
              <li>SUB_DOMAIN_URL=(Ignore)</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default HomeScreen;
