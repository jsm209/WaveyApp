  /*<![CDATA[*/
    (function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
          } else {
            loadScript();
          }
        } else {
          loadScript();
        }
        function loadScript() {
          var script = document.createElement('script');
          script.async = true;
          script.src = scriptURL;
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
          script.onload = ShopifyBuyInit;
        }
        function ShopifyBuyInit() {
          var client = ShopifyBuy.buildClient({
            domain: 'waveytest.myshopify.com',
            storefrontAccessToken: 'b23f2537d4d21a3595856a1acb38a095',
          });
          ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
              id: '5879897456805',
              node: document.getElementById('product-component-1605480100417'),
              moneyFormat: '%24%7B%7Bamount%7D%7D',
              options: {
                "product": {
                "styles": {
                    "product": {
                    "@media (min-width: 601px)": {
                        "max-width": "100%",
                        "margin-left": "0",
                        "margin-bottom": "50px"
                    },
                    "text-align": "left"
                    },
                    "title": {
                    "font-size": "26px"
                    },
                    "price": {
                    "font-size": "18px"
                    },
                    "compareAt": {
                    "font-size": "15.299999999999999px"
                    },
                    "unitPrice": {
                    "font-size": "15.299999999999999px"
                    }
                },
                "buttonDestination": "checkout",
                "layout": "horizontal",
                "contents": {
                    "img": false,
                    "imgWithCarousel": true,
                    "description": true
                },
                "width": "100%",
                "text": {
                    "button": "Buy now"
                }
                },
                "productSet": {
                "styles": {
                    "products": {
                    "@media (min-width: 601px)": {
                        "margin-left": "-20px"
                    }
                    }
                }
                },
                "modalProduct": {
                "contents": {
                    "img": false,
                    "imgWithCarousel": true,
                    "button": false,
                    "buttonWithQuantity": true
                },
                "styles": {
                    "product": {
                    "@media (min-width: 601px)": {
                        "max-width": "100%",
                        "margin-left": "0px",
                        "margin-bottom": "0px"
                    }
                    }
                },
                "text": {
                    "button": "Add to cart"
                }
                },
                "cart": {
                "text": {
                    "total": "Subtotal",
                    "button": "Checkout"
                }
                }
            },
            });
          });
        }
      })();
      /*]]>*/