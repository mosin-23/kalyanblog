import { useState } from "react";

const PrivacyPolicy = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
      <p className="text-gray-600 text-center mb-8">
        Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
      </p>

      {/* Navigation Links - Stack on small screens */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
        {["Introduction", "Data Collection", "Usage", "Sharing", "Security", "Rights"].map((section) => (
          <button
            key={section}
            className="text-blue-600 hover:underline px-3 py-1 text-sm sm:text-base"
            onClick={() => toggleSection(section)}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Expandable Sections */}
      <div className="space-y-4">
        {[
          {
            title: "Introduction",
            content: "VKalyan.Tech is committed to protecting your privacy. This policy outlines how we handle your data when you use our services.",
          },
          {
            title: "What Data We Collect",
            content: "We collect personal information such as your name, email, and IP address. We also collect usage data for analytics and improvement.",
          },
          {
            title: "How We Use Your Data",
            content: "We use your data to provide services, enhance user experience, personalize content, and comply with legal requirements.",
          },
          {
            title: "Data Sharing and Disclosure",
            content: "We do not sell your data. We may share data with trusted third-party services for functionality, analytics, and legal compliance.",
          },
          {
            title: "Security Measures",
            content: "We use encryption and secure servers to protect your data. However, no online transmission is 100% secure.",
          },
          {
            title: "Your Rights and Choices",
            content: "You can request access, correction, or deletion of your data. If you have concerns, contact us at support@vkalyan.tech.",
          },
        ].map((section) => (
          <div key={section.title} className="border-b pb-2">
            <button
              className="w-full text-left flex justify-between items-center py-3 focus:outline-none"
              onClick={() => toggleSection(section.title)}
            >
              <span className="text-lg font-semibold">{section.title}</span>
              <span className="text-gray-500">{openSection === section.title ? "▲" : "▼"}</span>
            </button>
            {openSection === section.title && (
              <p className="text-gray-600 mt-2 text-sm sm:text-base">{section.content}</p>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-gray-500 text-sm">
        Last updated: February 2025 | <a href="/" className="text-blue-600 hover:underline">Return to Home</a>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
