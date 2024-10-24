import React from "react";

function Orders() {
  return (
    <section className="max-w-[1088px] mx-auto py-20">
      <div className="border-b border-base-300 pb-5">
        <h2 className="text-3xl font-medium tracking-wider capitalize">your orders</h2>
      </div>
      <div className="mt-8">
        <h4 className="mb-4 capitalize">total orders : </h4>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Products</th>
                <th>Cost</th>
                <th className="hidden sm:block">Date</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Orders;
