
//this contains interface of the order item
export type OrderItemType = {
    name: string;
    photo: string;
    price: number;
    quantity: number;
    _id: string;
  };  

//this contains interface that includes info about user, amount, status that is as a whole all the order info
export type OrderType = {
    name: string;
    address: string;
    city: string;
    country: string;
    state: string;
    pinCode: number;
    status: "Processing" | "Shipped" | "Delivered";
    subtotal: number;
    discount: number;
    shippingCharges: number;
    tax: number;
    total: number;
    orderItems: OrderItemType[];
    _id: string;
  };