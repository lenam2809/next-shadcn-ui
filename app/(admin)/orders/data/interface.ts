interface OrderDetails {
    orderDate: string;
    orderNumber: string;
    items: ProductInformation[];
    subtotal: number;
    shipping: number;
    tax: number;
    total: number;
    shippingInformation: ShippingInformation;
    billingInformation: BillingInformation;
    customerInformation: CustomerInformation;
    paymentInformation: PaymentInformation;
    updateDate: string;
}

interface ProductInformation {
    name: string;
    price: number;
    quantity: number;
}

interface ShippingInformation {
    customerName: string;
    addressLine1: string;
}

interface BillingInformation extends ShippingInformation {
    email?: string; // Optional because it's not fully visible
}

interface CustomerInformation {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
}

interface PaymentInformation {
    cardType?: string; // Optional because it's not fully visible
    cardNumberPartial?: string; // Optional because it's not fully visible
}
