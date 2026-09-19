import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "./Footer";

function StockRegiPrivacy() {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light min-h-screen text-text-primary flex flex-col justify-between pt-8 sm:pt-12">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-light pb-6 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              Privacy Policy for <span className="bg-clip-text text-transparent bg-gradient-vibrant-text">StockRegi</span>
            </h1>
            <p className="text-sm font-semibold text-text-secondary mt-2">
              Effective date: <span className="text-text-primary">19 September 2026</span>
            </p>
          </div>

          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-text-inverse bg-gradient-primary shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 transform hover:scale-[1.03] w-fit"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            Back Home
          </button>
        </div>

        {/* Content Card */}
        <div className="bg-background-surface/40 border border-border-light rounded-2xl p-6 sm:p-10 shadow-sm space-y-6 text-text-secondary text-base leading-relaxed mb-16">
          <p className="text-lg">
            StockRegi (&ldquo;the App&rdquo;) is developed by <strong className="text-text-primary font-semibold">SilentEclipse</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;). This policy explains what data we collect and how it&apos;s used.
          </p>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary border-b border-border-light pb-2 mb-3">
              Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong className="text-text-primary">Account information:</strong> email address, phone number (if used for sign-in), business name, and role (seller/producer)
              </li>
              <li>
                <strong className="text-text-primary">Business data you enter:</strong> inventory items, categories, attributes, suppliers, purchases, production records, and orders you create in the App
              </li>
              <li>
                <strong className="text-text-primary">Authentication data:</strong> handled via Supabase Auth, including session tokens
              </li>
            </ul>
            <p className="mt-4">
              We do not collect location data, contacts, photos, or device identifiers beyond what&apos;s required for basic app functionality.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary border-b border-border-light pb-2 mb-3">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>To create and manage your account</li>
              <li>To provide the App&apos;s core inventory-tracking features</li>
              <li>To send account-related emails (sign-in codes, password reset)</li>
            </ul>
            <p className="mt-4">
              We do not sell your data or use it for advertising. We do not share your data with third parties except:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong className="text-text-primary">Supabase</strong> (our backend/database provider), which stores your data securely
              </li>
              <li>
                <strong className="text-text-primary">Google Play Billing</strong> (if/when subscriptions are enabled), for payment processing
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary border-b border-border-light pb-2 mb-3">
              Data Storage &amp; Security
            </h2>
            <p>
              Your data is stored in Supabase&apos;s cloud infrastructure with access restricted to your own account through row-level security &mdash; other users cannot access your business data.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary border-b border-border-light pb-2 mb-3">
              Data Retention &amp; Deletion
            </h2>
            <p>
              You may request deletion of your account and all associated data by contacting us at{" "}
              <a
                href="mailto:ssinghalaniket@gmail.com"
                className="text-primary font-medium hover:underline"
              >
                ssinghalaniket@gmail.com
              </a>
              . We will delete your data within a reasonable timeframe.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary border-b border-border-light pb-2 mb-3">
              Children&apos;s Privacy
            </h2>
            <p>
              The App is not directed at children under 13. We do not knowingly collect data from children.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary border-b border-border-light pb-2 mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this policy from time to time. Changes will be posted at this URL with an updated effective date.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary border-b border-border-light pb-2 mb-3">
              Contact Us
            </h2>
            <p>
              Questions about this policy:{" "}
              <a
                href="mailto:ssinghalaniket@gmail.com"
                className="text-primary font-medium hover:underline"
              >
                ssinghalaniket@gmail.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default StockRegiPrivacy;
