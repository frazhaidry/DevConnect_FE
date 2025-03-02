const CancellationRefund = () => {
    return (
      <div className="container mx-auto max-w-3xl p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Cancellation & Refund Policy</h1>
  
        <section className="mb-6">
          <p className="text-gray-700">
            At <strong>DevConnekt</strong>, we offer a <strong>digital premium membership</strong> that provides exclusive features 
            to our users. Below are our <strong>cancellation and refund policies</strong> regarding these services.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Cancellation Policy</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Users can cancel their <strong>premium membership</strong> anytime through their account settings.</li>
            <li>Cancellation will <strong>stop future billing</strong>, but previously paid amounts are <strong>non-refundable</strong>.</li>
            <li>After cancellation, premium access will remain active <strong>until the end of the current billing cycle</strong>.</li>
          </ul>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Refund Policy</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Since DevConnekt provides <strong>instant access</strong> to digital features, refunds are generally <strong>not</strong> offered.</li>
            <li>However, refunds may be considered in the following cases:</li>
            <ul className="list-decimal list-inside ml-4">
              <li>Accidental duplicate payment.</li>
              <li>Billing error from our side.</li>
              <li>Unauthorized charge (subject to review).</li>
            </ul>
            <li>Refund requests must be made <strong>within 7 days of the transaction</strong>.</li>
          </ul>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">3. How to Request a Refund</h2>
          <p className="text-gray-700">
            To request a refund, contact us at{" "}
            <a href="mailto:frazahmadhaidry@gmail.com" className="text-blue-600 underline">
              frazahmadhaidry@gmail.com
            </a>{" "}
            with the <strong>transaction details</strong> and a reason for the request.
          </p>
          <p className="text-gray-700">
            Refund approvals are at our <strong>sole discretion</strong>, and approved amounts will be credited back to the original payment method.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Processing Time</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Approved refunds will be <strong>processed within 7-10 business days</strong>.</li>
            <li>If the refund does not reflect within this time, please contact your bank or payment provider.</li>
          </ul>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Changes to This Policy</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>DevConnekt reserves the right to <strong>update or modify</strong> this policy at any time.</li>
            <li>Users will be notified of any changes through the website or email.</li>
          </ul>
        </section>
      </div>
    );
  };
  
  export default CancellationRefund;
  