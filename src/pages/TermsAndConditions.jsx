const TermsAndConditions = () => {
    return (
      <div className="container mx-auto max-w-3xl p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Terms & Conditions</h1>
  
        <section className="mb-6">
          <p className="text-gray-700">
            Welcome to DevConnekt! These Terms and Conditions govern your use of our
            platform and services. By using DevConnekt, you agree to these terms.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">1. User Agreement</h2>
          <p className="text-gray-700">
            By accessing DevConnekt, you agree to comply with these terms. If you do not
            agree, please discontinue using our platform.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Account Registration</h2>
          <p className="text-gray-700">
            Users must provide accurate information and ensure the security of their accounts. DevConnekt is not liable for unauthorized access to user accounts.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Premium Membership & Payments</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>DevConnekt offers a premium membership with exclusive features.</li>
            <li>All payments are securely processed via Razorpay.</li>
            <li>Once a premium plan is activated, refunds are not provided.</li>
          </ul>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">4. User Conduct & Content Policy</h2>
          <p className="text-gray-700">
            Users must engage respectfully. Hate speech, harassment, and inappropriate content are strictly prohibited.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Cancellation & Refund Policy</h2>
          <p className="text-gray-700">
            Refunds and cancellations are governed by our{" "}
            <a href="/cancellation-refund" className="text-blue-600 underline">Refund Policy</a>.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">6. Privacy & Data Protection</h2>
          <p className="text-gray-700">
            User data is protected under our{" "}
            <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">7. Contact Us</h2>
          <p className="text-gray-700">
            For queries, contact us at{" "}
            <a href="mailto:frazahmadhaidry@gmail.com" className="text-blue-600 underline">
              frazahmadhaidry@gmail.com
            </a>.
          </p>
        </section>
      </div>
    );
  };
  
  export default TermsAndConditions;
  