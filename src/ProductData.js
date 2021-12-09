const ProductData = {
    title: 'FitBit sense - The Smartest Watch',
    description: 'A smartwatch is a wearable computing device that closely resembles a wristwatch or other time-keeping device. In addition to telling time, many smartwatches are Bluetooth-capable. The watch becomes, in effect, a wireless Bluetooth adaptor capable of extending the capabilities of the wearers smartphone to the watch.',
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: 'https://imgur.com/iOeUBV7.png'
        },
        {
            styleName: 'Red Strap',
            imageUrl: 'https://imgur.com/PTgQlim.png'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: 'https://imgur.com/Mplj1YR.png'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
}

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData;