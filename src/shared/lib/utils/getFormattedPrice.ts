export const getFormattedPrice = (price: number) => {
    const formattedPrice = price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return formattedPrice;
};
