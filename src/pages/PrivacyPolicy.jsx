const PrivacyPolicy = () => {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
        <p className="text-gray-600 text-center mb-10">Effective Date: [1 Mar 2025]</p>
  
        {/* Section 1: Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-gray-700">
            Welcome to <span className="font-semibold">DevConnekt</span>. We value your privacy and are 
            committed to protecting your personal data. This policy explains how we collect, 
            use, and protect your information.
          </p>
        </section>
  
        {/* Section 2: Information We Collect */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Personal Details:</strong> Name, email, university, skills, etc.</li>
            <li><strong>Payment Information:</strong> Processed via Razorpay for premium memberships.</li>
            <li><strong>Communication History:</strong> Messages and interactions.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information.</li>
          </ul>
        </section>
  
        {/* Section 3: How We Use Your Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Providing and improving our services.</li>
            <li>Processing transactions securely via Razorpay.</li>
            <li>Connecting developers based on shared interests.</li>
            <li>Enhancing user experience and personalizing recommendations.</li>
          </ul>
        </section>
  
        {/* Section 4: Payment Security */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Payment Security</h2>
          <p className="text-gray-700">
            We use <span className="font-semibold">Razorpay</span> as our payment gateway. Razorpay securely 
            processes all payments, and we do not store any payment-related data. Please refer 
            to <a href="https://razorpay.com/privacy/" className="text-blue-600 hover:underline">Razorpays Privacy Policy</a> for more details.
          </p>
        </section>
  
        {/* Section 5: Data Protection */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Data Protection</h2>
          <p className="text-gray-700">
            We implement security measures to protect your data. However, no method of 
            transmission is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>
  
        {/* Section 6: Your Rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Access, update, or delete your data.</li>
            <li>Withdraw consent for data processing.</li>
            <li>Request information about how your data is used.</li>
          </ul>
        </section>
  
        {/* Section 7: Changes to Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">7. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this policy from time to time. Please review it periodically 
            for changes.
          </p>
        </section>
  
        {/* Section 8: Contact Us */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions, please contact us at: 
            <a 
              href="mailto:frazahmadhaidry@gmail.com"
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              frazahmadhaidry@gmail.com
            </a>
          </p>
        </section>
      </div>
    );
  };
  
  export default PrivacyPolicy;
  