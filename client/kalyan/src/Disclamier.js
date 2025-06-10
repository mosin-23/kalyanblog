import React from 'react';

const BlogDisclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pt-28">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 sm:p-8 text-center">
          <h1 className="text-3xl font-bold text-white">vkalyan.space Policies</h1>
          <p className="mt-2 text-blue-100">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Disclaimer Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Website Disclaimer</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                The content provided on vkalyan.space is for informational and educational purposes only. 
                The owner of this blog makes no representations as to the accuracy or completeness of any 
                information on this site or found by following any link on this site.
              </p>
              <p>
                The owner will not be liable for any errors or omissions in this information nor for the 
                availability of this information. The owner will not be liable for any losses, injuries, 
                or damages from the display or use of this information.
              </p>
            </div>
          </section>

          {/* Privacy Policy Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Privacy Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                At vkalyan.space, we respect your privacy and are committed to protecting it through our 
                compliance with this policy.
              </p>
              <h3 className="text-lg font-medium text-gray-800">Information We Collect:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Basic analytics data (pages visited, duration, etc.)</li>
                <li>Information you voluntarily submit through comments or contact forms</li>
                <li>Cookies for functionality and analytics (you can disable these in your browser)</li>
              </ul>
              <h3 className="text-lg font-medium text-gray-800">How We Use Information:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>To improve our website and user experience</li>
                <li>To respond to user inquiries</li>
                <li>For basic traffic analysis</li>
              </ul>
            </div>
          </section>

          {/* Terms of Use Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Terms of Use</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                By using vkalyan.space, you agree to the following terms:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>All content is protected by copyright and may not be reproduced without permission</li>
                <li>Comments must be respectful and relevant</li>
                <li>We reserve the right to modify content without notice</li>
                <li>The blog owner is not responsible for third-party links or content</li>
              </ul>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these policies, please contact us at:
              <br />
              <a href="mailto:2100031660cser@gmail.com" className="text-blue-600 hover:underline">
                2100031660cser@gmail.com
              </a>
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 px-6 py-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} vkalyan.space. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDisclaimer;