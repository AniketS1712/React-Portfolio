import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "./Footer";

function StockRegiDeleteAccount() {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light min-h-screen text-text-primary flex flex-col justify-between pt-8 sm:pt-12">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-light pb-6 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              Delete Your <span className="bg-clip-text text-transparent bg-gradient-vibrant-text">StockRegi</span> Account
            </h1>
            <p className="text-sm font-semibold text-text-secondary mt-2">
              Account Deletion &amp; Data Removal Disclosure
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
            You can delete your StockRegi account and all associated data at any time.
          </p>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary border-b border-border-light pb-2 mb-3">
              How to Delete Your Account
            </h2>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li>Open the StockRegi app</li>
              <li>Go to Settings</li>
              <li>Tap &ldquo;Delete Account&rdquo;</li>
              <li>Confirm the deletion when prompted</li>
            </ol>
            <p className="mt-4">
              Alternatively, email{" "}
              <a
                href="mailto:ssinghalaniket@gmail.com"
                className="text-primary font-medium hover:underline"
              >
                ssinghalaniket@gmail.com
              </a>{" "}
              with your registered business name and we will delete your account within 7 business days.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary border-b border-border-light pb-2 mb-3">
              What Gets Deleted
            </h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Your account and login credentials</li>
              <li>Your business profile and role</li>
              <li>All inventory items, categories, and attributes you created</li>
              <li>All purchase, production, and order transaction history</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary border-b border-border-light pb-2 mb-3">
              Retention
            </h2>
            <p>
              All data is deleted immediately and permanently, with no retention period.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default StockRegiDeleteAccount;
