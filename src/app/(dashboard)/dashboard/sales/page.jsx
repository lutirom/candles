import "./assets/sales.scss";
import getOrders from "./func/getOrders";
import SalesItem from "./components/SalesItem";

export default async function Dashboard() {
    const res = await getOrders();

    const orders = await res.json();

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
                <div className="sales-body flex flex-col">
                    {orders.map((order) => {
                        return (
                            <SalesItem
                                order={order}
                                key={order.id}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
