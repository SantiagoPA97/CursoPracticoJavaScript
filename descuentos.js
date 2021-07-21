const precioOriginal = 100;
const descuento = 15;

const coupons = [
    {
        name: 'firstBuy',
        discount: 15
    },
    {
        name: 'greatDiscount',
        discount: 20
    }
];

const isCouponValueValid = (coupon) => {
    const inputCoupon = document.getElementById('inputCoupon');
    const couponValue = inputCoupon.value;
    return coupon.name.toUpperCase() ===  couponValue.toUpperCase();
}

function calculatePriceWithDiscount(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const userCoupon = coupons.find(isCouponValueValid);
    if (!userCoupon) {
        alert('No es valido el cupón');
    } else {
        const inputPrice = document.getElementById('inputPrice');
        const price = inputPrice.value;
        const discount = userCoupon.discount;
        const priceWithDiscount = calculatePriceWithDiscount(price, discount);
        const resultPrice = document.getElementById('resultPrice');
        resultPrice.innerText = `El precio con descuento es $${priceWithDiscount}`;
    }
    
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });