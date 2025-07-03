import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Download } from "lucide-react";

export default function LoanProcess() {
  return (
    <section id="loan-process" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#2e7d32] md:text-4xl">
            Loan Application Process
          </h2>
          <p className="mt-4 text-gray-600">
            Our streamlined loan application process makes it easy for you to
            access the funds you need when you need them.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-[#e8f5e9] md:hidden"></div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                title: "Application",
                description:
                  "Fill out our simple loan application form online or at our office.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" x2="8" y1="13" y2="13" />
                    <line x1="16" x2="8" y1="17" y2="17" />
                    <line x1="10" x2="8" y1="9" y2="9" />
                  </svg>
                ),
              },
              {
                title: "Verification",
                description:
                  "We verify your information and assess your eligibility for the loan.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ),
              },
              {
                title: "Approval",
                description:
                  "Your loan is approved based on your eligibility and creditworthiness.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ),
              },
              {
                title: "Disbursement",
                description:
                  "The approved loan amount is disbursed to your account or via mobile money.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" x2="9.01" y1="9" y2="9" />
                    <line x1="15" x2="15.01" y1="9" y2="9" />
                  </svg>
                ),
              },
            ].map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1e40af] text-white">
                  {step.icon}
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="absolute left-1/2 top-8 hidden h-1 w-full -translate-x-1/2 bg-[#e8f5e9] md:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button
            className="bg-[#1e40af] hover:bg-[#1b5e20] rounded-full"
            asChild
          >
            <Link href="/loanform.pdf">
              Download Application Form <Download className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
