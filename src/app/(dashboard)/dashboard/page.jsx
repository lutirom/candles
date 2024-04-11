import "./assets/sales.scss";
import getOrders from "./func/getOrders";

export default async function Dashboard() {
    const res = await getOrders();

    const orders = await res.json();
    console.log("🚀 ~ Dashboard ~ orders:", orders[1].products);

    return (
        <section className="dash-content rounded-lg bg-white shadow-md">
            <div className="sales-table">
                <div className="sales-head bg-gray-50 text-gray-500">
                    <p>Customer</p>
                    <p>Date</p>
                    <p>Delivery</p>
                    <p className="justify-self-center">Status</p>
                    <p className="justify-self-center">Price</p>
                </div>
                <div className="sales-body">
                    {orders.map((order) => {
                        return (
                            <>
                                <p>{`${order.client_name} ${order.client_lastname}`} </p>
                                <p>01.01</p>
                                <p>{order.delivery_info}</p>
                                <p className="p-2 w-fit justify-self-center text-orange-600 bg-orange-300 leading-none">Status</p>
                                <p className="justify-self-center"></p>
                            </>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
