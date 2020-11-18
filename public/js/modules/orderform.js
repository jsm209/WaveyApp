import {storage, database} from "./firebase.js";

function checkSetup() {
    console.log(storage);
    console.log(database);
}

export {checkSetup};

// https://community.shopify.com/c/Shopify-Design/Product-pages-Get-customization-information-for-products/m-p/616525