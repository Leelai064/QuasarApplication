<template><div id="partiallyCheckoutBtn"></div></template>

<script>
export default {
  mounted() {
    // eslint-disable-next-line no-unused-vars
    document.partiallyButtonConfig = {
      offer: '12dec878-e7c9-4603-951a-ec53a1d9d69c',
      amount: 140.0,
      renderSelector: '#partiallyCheckoutBtn',
      imageUrl:
        'https://d2nacfpe3n8791.cloudfront.net/images/buttons/payment-plan-available.png',
      meta: {
        source: 'shopify',
        items: [
          {
            product_id: '6609635442743',
            variant_id:
              'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTUzMjE4NzQ4NDIxNQ==',
            name: 'PiShock Starter Kit',
            quantity: 1,
            price: 140.0,
            total: 140.0,
            sku: '',
            image:
              'https://cdn.shopify.com/s/files/1/0270/8117/9191/products/logo_medium.png?v=1590116213'
          }
        ]
      }
    }
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://partial.ly/js/partially-checkout-button.js'
    script.async = true
    document.head.appendChild(script)
  }
}
</script>

<style></style>