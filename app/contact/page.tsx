"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    // Local simulation of contact submission
    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8 sm:pt-3.5 sm:pb-10 space-y-6 sm:space-y-8">
      {/* Top Header Block */}
      <div className="space-y-2">
        <Breadcrumbs items={[{ label: "Contact Editorial Team" }]} />
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-editorial-100 text-editorial-800 text-xs font-semibold">
            <Mail className="h-3.5 w-3.5" />
            <span>Reader Support & Inquiries</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-roast tracking-tight">
            Contact Starbucks Menu Editorial Team
          </h1>
          <p className="text-sm sm:text-base text-slatewarm-700 leading-relaxed font-normal">
            Have feedback on our menu guides, noticed a recent price update, or have an editorial question? We welcome thoughtful reader communications.
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-editorial-200 bg-white p-6 sm:p-8 shadow-sm">
        {status === "success" ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h2 className="font-serif font-bold text-2xl text-slatewarm-900">
              Message Received
            </h2>
            <p className="text-xs sm:text-sm text-slatewarm-600 max-w-md mx-auto leading-relaxed">
              Thank you for reaching out to Starbucks Menu. Our editorial review team reviews reader inquiries and suggestions regularly.
            </p>
            <button
              onClick={() => {
                setStatus("idle");
                setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
              }}
              className="mt-4 px-5 py-2.5 rounded-xl bg-editorial-100 hover:bg-editorial-200 text-slatewarm-800 text-xs font-semibold transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {status === "error" && (
              <div className="p-4 rounded-xl border border-red-200 bg-red-50 text-xs text-red-800 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-slatewarm-800 uppercase tracking-wider mb-2">
                  Your Name <span className="text-editorial-600">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-slatewarm-300 bg-white p-3 text-xs text-slatewarm-900 focus:border-editorial-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slatewarm-800 uppercase tracking-wider mb-2">
                  Email Address <span className="text-editorial-600">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@example.com"
                  className="w-full rounded-xl border border-slatewarm-300 bg-white p-3 text-xs text-slatewarm-900 focus:border-editorial-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-bold text-slatewarm-800 uppercase tracking-wider mb-2">
                Inquiry Topic
              </label>
              <select
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full rounded-xl border border-slatewarm-300 bg-white p-3 text-xs text-slatewarm-900 focus:border-editorial-500 focus:outline-none"
              >
                <option value="General Inquiry">General Inquiry / Editorial Question</option>
                <option value="Price Update Notice">Regional Price Update / Feedback</option>
                <option value="Nutrition Correction">Nutritional Data Correction</option>
                <option value="Technical Issue">Website Technical Issue</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold text-slatewarm-800 uppercase tracking-wider mb-2">
                Message <span className="text-editorial-600">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Please describe your question or feedback in detail..."
                className="w-full rounded-xl border border-slatewarm-300 bg-white p-3 text-xs text-slatewarm-900 focus:border-editorial-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-roast hover:bg-editorial-700 text-white text-xs font-semibold shadow-sm transition-colors disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
              <span>{status === "submitting" ? "Sending..." : "Submit Message"}</span>
            </button>
          </form>
        )}
      </div>

      <DisclaimerNotice />
    </div>
  );
}
