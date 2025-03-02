const ShippingDelivery = () => {
    return (
      <div className="container mx-auto max-w-3xl p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Shipping & Delivery Policy</h1>
  
        <section className="mb-6">
          <p className="text-gray-700">
            <strong>DevConnekt</strong> is a <strong>digital platform</strong>, and we do not offer physical
            goods or services that require shipping. Our services are <strong>delivered
            electronically</strong> upon successful transaction.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Digital Product Delivery</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Upon successful payment, <strong>premium membership</strong> features will be activated instantly in your account.</li>
            <li>Users can access these features by logging into their DevConnekt account.</li>
          </ul>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">2. No Physical Shipping</h2>
          <p className="text-gray-700">
            Since our services are digital, <strong>no physical delivery or shipping charges apply</strong>.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Service Access Issues</h2>
          <p className="text-gray-700">
            If you face any issues accessing your premium features, contact our support team at{" "}
            <a href="mailto:frazahmadhaidry@gmail.com" className="text-blue-600 underline">
              frazahmadhaidry@gmail.com
            </a>.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Refunds & Cancellations</h2>
          <p className="text-gray-700">
            Please refer to our{" "}
            <a href="/cancellation-refund" className="text-blue-600 underline">
              Cancellation & Refund Policy
            </a>{" "}
            for details.
          </p>
        </section>
      </div>
    );
  };
  
  export default ShippingDelivery;
  