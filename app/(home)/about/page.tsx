"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Users,
  Calendar,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Building,
  CreditCard,
  BarChart2,
  Smartphone,
  BanknoteIcon,
  ShoppingBag,
  BookOpen,
  PiggyBank,
  Briefcase,
  Shield,
  Award,
  ChevronRight,
} from "lucide-react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("history");

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
            alt="BUTSACCO team"
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About BUTSACCO
          </h1>
          <p className="text-xl max-w-3xl">
            Learn about our history, mission, and the impact we've made in our
            community since 2009.
          </p>
        </div>
      </section>

      {/* Main Content Section with Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs
            defaultValue="history"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-8">
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="founders">Founders</TabsTrigger>
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            {/* History Tab */}
            <TabsContent value="history" className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our History</h2>
                  <p className="mb-4">
                    BUTSACCO was started on October 9th, 2009 by 36 visionary
                    members, the majority of them being teachers, after being
                    mobilized by the founder Mr. Baita Jethro, a prominent
                    teacher in the area.
                  </p>
                  <p className="mb-4">
                    It was established with a clear purpose: to help teachers
                    and other members of the community overcome exploitation
                    from money lenders that were common and charging exorbitant
                    interest rates, as well as improving the image and status of
                    teachers in the community.
                  </p>
                  <p className="mb-4">
                    BUTSACCO was officially registered with the registrar of
                    cooperatives in the Ministry of Trade in Uganda on August
                    9th, 2011, with registration number 9668RCS. Today, we are
                    supervised by the same ministry through the district
                    commercial office and the Uganda Micro Finance Regulatory
                    Authority.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <Calendar className="h-5 w-5 text-emerald-600 mr-2" />
                      <h3 className="text-lg font-semibold">Founded</h3>
                    </div>
                    <p>October 9th, 2009</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <Users className="h-5 w-5 text-emerald-600 mr-2" />
                      <h3 className="text-lg font-semibold">
                        Founding Members
                      </h3>
                    </div>
                    <p>36 visionary teachers and community members</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                      <h3 className="text-lg font-semibold">Registration</h3>
                    </div>
                    <p>August 9th, 2011 (Registration #9668RCS)</p>
                  </div>
                </div>
              </div>

              {/* Mission & Vision Section */}
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-semibold mb-4 text-emerald-600">
                    Our Mission
                  </h3>
                  <p className="mb-4">
                    To provide accessible, affordable, and sustainable financial
                    services to our members, with a focus on teachers and the
                    broader community.
                  </p>
                  <p>
                    We aim to empower our members through financial inclusion,
                    education, and support, helping them build a secure future
                    and contribute to community development.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-semibold mb-4 text-emerald-600">
                    Our Vision
                  </h3>
                  <p className="mb-4">
                    To be the leading savings and credit cooperative in Uganda,
                    recognized for excellence in financial services, member
                    satisfaction, and positive community impact.
                  </p>
                  <p>
                    We envision a community where all members have access to
                    fair financial services and the knowledge to make informed
                    financial decisions for a prosperous future.
                  </p>
                </div>
              </div>

              {/* Core Values Section */}
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                  <p className="max-w-2xl mx-auto text-slate-600">
                    While getting enough dividends is the ultimate target,
                    BUTSACCO members put the customer at the center of planning
                    and nature of operation. The more the customer is satisfied
                    with the services offered, the more pride BUTSACCO will be.
                  </p>
                </div>

                <div className="grid md:grid-cols-5 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="bg-emerald-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-emerald-600 font-bold text-xl">
                        C
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Commitment</h3>
                    <p className="text-slate-600">
                      We are dedicated to serving our members with unwavering
                      commitment.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="bg-emerald-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-emerald-600 font-bold text-xl">
                        M
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Member Focus</h3>
                    <p className="text-slate-600">
                      Our members are at the center of everything we do.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="bg-emerald-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-emerald-600 font-bold text-xl">
                        T
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Team Work</h3>
                    <p className="text-slate-600">
                      We collaborate to achieve common goals and better serve
                      our community.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="bg-emerald-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-emerald-600 font-bold text-xl">
                        H
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Honesty</h3>
                    <p className="text-slate-600">
                      We operate with integrity and transparency in all our
                      dealings.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="bg-emerald-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-emerald-600 font-bold text-xl">
                        E
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Efficiency</h3>
                    <p className="text-slate-600">
                      We strive to provide prompt and effective service to our
                      members.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Founders Tab */}
            <TabsContent value="founders">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  Our Founders
                </h2>
                <p className="text-center mb-8 max-w-3xl mx-auto">
                  BUTSACCO was established by 36 visionary members in 2009, led
                  by Mr. Baita Jethro. These founding members laid the
                  foundation for what has become a cornerstone financial
                  institution in our community.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FounderCard name="Ms. Mbambu Joseline" index={1} />
                  <FounderCard name="Mr. Kule Zaphanus Kananga" index={2} />
                  <FounderCard name="Ms. Kyakimwa Penina" index={3} />
                  <FounderCard name="Mr. Kikenge M Fred" index={4} />
                  <FounderCard name="Mr. Kamundu Jackson" index={5} />
                  <FounderCard name="Rev. Kisangani Wisely" index={6} />
                  <FounderCard name="Ms. Muhindo Felezia" index={7} />
                  <FounderCard name="Mr. Bwambale Manasseh" index={8} />
                  <FounderCard name="Ms. Mbambu Florence" index={9} />
                  <FounderCard name="Ms. Mbambu Elizabeth" index={10} />
                  <FounderCard name="Ms. Kibikwamu Sarah" index={11} />
                  <FounderCard name="Mr. Mukasulha M Nason" index={12} />
                  <FounderCard name="Mr. Kipida Harriet" index={13} />
                  <FounderCard name="Mr. Byerire William" index={14} />
                  <FounderCard name="Mr. Kule Erisania" index={15} />
                  <FounderCard name="Ms. Asiimwe Harriet" index={16} />
                  <FounderCard name="Mr. Bwambale Edson" index={17} />
                  <FounderCard name="Mr. Kanyonyi Julius" index={18} />
                  <FounderCard name="Mr. Babulya Julius" index={19} />
                  <FounderCard name="Mr. Baita Jethro" index={20} />
                  <FounderCard name="Mr. Muhindo Wilson" index={21} />
                  <FounderCard name="Mr. Thaliwatheka Sarapio" index={22} />
                  <FounderCard name="Mr. Ngasu Jackson" index={23} />
                  <FounderCard name="Ms. Mbambu Gladys" index={24} />
                  <FounderCard name="Ms. Musoki Tryphine" index={25} />
                  <FounderCard name="Ms. Ithungu Miriam" index={26} />
                  <FounderCard name="Ms. Muhahiria Jackline" index={27} />
                  <FounderCard name="Mr. Bwambale Barnabas" index={28} />
                  <FounderCard name="Rev. Bwambale Benjamin" index={29} />
                  <FounderCard name="Mr. Muhindo Nuha" index={30} />
                  <FounderCard name="Mr. Kule Robert Mwaka" index={31} />
                  <FounderCard name="Mr. Kikenge Hosea" index={32} />
                  <FounderCard name="Mr. Muhindo Zariel" index={33} />
                  <FounderCard name="Ms. Biira Jasebel" index={34} />
                  <FounderCard name="Mr. Masereka Daniel" index={35} />
                  <FounderCard name="Ms. Ngene Phebice" index={36} />
                </div>
              </div>
            </TabsContent>

            {/* Leadership Tab */}
            <TabsContent value="leadership">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  Leadership Team
                </h2>
                <p className="text-center mb-8 max-w-3xl mx-auto">
                  Our dedicated leadership team works tirelessly to ensure
                  BUTSACCO delivers excellent service to our members and
                  maintains the highest standards of financial management.
                </p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="board">
                    <AccordionTrigger className="text-xl font-semibold text-emerald-700">
                      Board of Directors
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        <LeadershipCard
                          name="Mr. Kule Erisania"
                          position="Chairperson Board of Directors"
                          contact="0782147266"
                        />
                        <LeadershipCard
                          name="Mr. Kule Robert Mwaka"
                          position="Vice Chairperson Board of Directors"
                          contact="0774580244"
                        />
                        <LeadershipCard
                          name="Ms. Muhahiria Jackline"
                          position="Treasury"
                          contact="0772956793"
                        />
                        <LeadershipCard
                          name="Mr. Muhindo Wilson"
                          position="Secretary"
                          contact="0782744350"
                        />
                        <LeadershipCard
                          name="Mr. Baluku Paul"
                          position="Committee Member"
                          contact="0774202830"
                        />
                        <LeadershipCard
                          name="Mr. Muhindo Adidas"
                          position="Committee Member"
                          contact="0782134705"
                        />
                        <LeadershipCard
                          name="Mr. Bwambale Ivan"
                          position="Committee Member"
                          contact="0772186510"
                        />
                        <LeadershipCard
                          name="Mr. Baita Jethro"
                          position="Founder"
                          contact="0782751148"
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="supervisory">
                    <AccordionTrigger className="text-xl font-semibold text-emerald-700">
                      Supervisory Board
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        <LeadershipCard
                          name="Mr. Kikenge Hosea"
                          position="Chairperson"
                          contact="0774086232"
                        />
                        <LeadershipCard
                          name="Mr. Masereka Daniel"
                          position="Member"
                          contact="0786169004"
                        />
                        <LeadershipCard
                          name="Ms. Mbambu Joseline"
                          position="Member"
                          contact="0785011777"
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="management">
                    <AccordionTrigger className="text-xl font-semibold text-emerald-700">
                      Management Staff
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                        <LeadershipCard
                          name="Ms. Masika Winfred"
                          position="Manager"
                          contact="0788566925"
                        />
                        <LeadershipCard
                          name="Mr. Bwambale Brean"
                          position="Credit Manager"
                          contact="0787740779"
                        />
                        <LeadershipCard
                          name="Ms. Masika Janet"
                          position="Cashier"
                          contact="0776558271"
                        />
                        <LeadershipCard
                          name="Mr. Bwambale Pascal"
                          position="Chief Securiko Officer"
                          contact="0779773737"
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            {/* Services Tab */}
            <TabsContent value="services">
              <div className="space-y-12">
                {/* Our Businesses Section */}
                <div>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Our Businesses</h2>
                    <p className="max-w-2xl mx-auto text-slate-600">
                      BUTSACCO is a people's SACCO. Our business is derived from
                      the financial demands of the community.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                      <div className="bg-emerald-50 p-3 rounded-full w-fit mb-6">
                        <CreditCard className="h-6 w-6 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">
                        Savings Services
                      </h3>
                      <p className="text-slate-600">
                        We offer a range of savings products including deposits
                        and withdrawals to help our members build financial
                        security.
                      </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-sm">
                      <div className="bg-emerald-50 p-3 rounded-full w-fit mb-6">
                        <BarChart2 className="h-6 w-6 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">
                        Credit Services
                      </h3>
                      <p className="text-slate-600">
                        We extend affordable credit services to our members with
                        competitive interest rates and flexible repayment terms.
                      </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-sm">
                      <div className="bg-emerald-50 p-3 rounded-full w-fit mb-6">
                        <Smartphone className="h-6 w-6 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">
                        Mobile Money
                      </h3>
                      <p className="text-slate-600">
                        We provide mobile money services to facilitate easy
                        transactions and financial accessibility for our
                        members.
                      </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-sm">
                      <div className="bg-emerald-50 p-3 rounded-full w-fit mb-6">
                        <BanknoteIcon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">
                        Agency Banking
                      </h3>
                      <p className="text-slate-600">
                        We offer agency banking services for leading commercial
                        banks in Kasese district, bringing banking closer to
                        you.
                      </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-sm">
                      <div className="bg-emerald-50 p-3 rounded-full w-fit mb-6">
                        <ShoppingBag className="h-6 w-6 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">
                        Hardware Shop
                      </h3>
                      <p className="text-slate-600">
                        We operate a hardware shop where we sell hardware items
                        at very competitive rates to serve the community's
                        needs.
                      </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-sm">
                      <div className="bg-emerald-50 p-3 rounded-full w-fit mb-6">
                        <Building className="h-6 w-6 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">
                        Service Channels
                      </h3>
                      <p className="text-slate-600">
                        Our services can be accessed at our main branch, online,
                        or through our agents spread throughout the district.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Savings Products */}
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold mb-6">Savings Products</h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    <SavingsProductCard
                      title="Voluntary Savings"
                      icon={<PiggyBank className="h-6 w-6 text-emerald-600" />}
                      description="Basic savings account with flexible deposits and withdrawals."
                      features={[
                        "Minimum opening balance of UGX 10,000",
                        "No monthly maintenance fees",
                        "Withdraw anytime",
                        "Earns interest at 3% per annum",
                      ]}
                      buttonText="Open Account"
                      buttonLink="/savings/voluntary"
                    />

                    <SavingsProductCard
                      title="Compulsory Savings"
                      icon={<Shield className="h-6 w-6 text-emerald-600" />}
                      description="Required savings for all members with annual withdrawal."
                      features={[
                        "Minimum monthly contribution of UGX 5,000",
                        "Withdrawal only in January after financial year closure",
                        "Earns interest at 5% per annum",
                        "Required for all members",
                      ]}
                      buttonText="Open Account"
                      buttonLink="/savings/compulsory"
                    />

                    <SavingsProductCard
                      title="Fixed Savings"
                      icon={<Award className="h-6 w-6 text-emerald-600" />}
                      description="Higher interest rate for fixed-term deposits."
                      features={[
                        "Minimum deposit of UGX 100,000",
                        "Fixed terms of 3, 6, or 12 months",
                        "Higher interest rates up to 8% per annum",
                        "Early withdrawal penalties apply",
                      ]}
                      buttonText="Open Account"
                      buttonLink="/savings/fixed"
                    />

                    <SavingsProductCard
                      title="Junior Savings"
                      icon={<BookOpen className="h-6 w-6 text-emerald-600" />}
                      description="Savings account for children operated by a parent/guardian."
                      features={[
                        "Parent/guardian must have an account with BUTSACCO",
                        "No minimum balance requirement",
                        "Earns interest at 4% per annum",
                        "Teaches financial responsibility to children",
                      ]}
                      buttonText="Open Account"
                      buttonLink="/savings/junior"
                    />

                    <SavingsProductCard
                      title="Retirement Savings"
                      icon={<Briefcase className="h-6 w-6 text-emerald-600" />}
                      description="Long-term savings for retirement planning."
                      features={[
                        "For members in formal employment",
                        "Monthly savings minimum of UGX 10,000",
                        "Non-adjustable monthly savings amount",
                        "Earns interest at 1% per month",
                        "Non-withdrawable until retirement",
                      ]}
                      buttonText="Open Account"
                      buttonLink="/savings/retirement"
                    />

                    <SavingsProductCard
                      title="Investment Savings"
                      icon={<BarChart2 className="h-6 w-6 text-emerald-600" />}
                      description="Group investment opportunities for members."
                      features={[
                        "Limited membership",
                        "Agreed payment amount in agreed period",
                        "Non-withdrawable",
                        "Permanent membership with transferable rights",
                        "Earn dividends after establishment of investment",
                      ]}
                      buttonText="Open Account"
                      buttonLink="/savings/investment"
                    />
                  </div>
                </div>

                {/* Financial Education */}
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold mb-6">
                    Financial Education Services
                  </h2>
                  <p className="mb-6">
                    At BUTSACCO, we believe in empowering our members with
                    financial knowledge. Our comprehensive financial education
                    programs help members make informed financial decisions and
                    build a secure future.
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <EducationCard
                      title="Financial Literacy Workshops"
                      description="Training on financial discipline so that members learn to live within their means."
                    />
                    <EducationCard
                      title="Business Management Trainings"
                      description="Training packages on how members are supposed to create and sustain income generating projects to supplement their monthly salary."
                    />
                    <EducationCard
                      title="Retirement Planning"
                      description="Training on how members should prepare for their retirement."
                    />
                    <EducationCard
                      title="Socialization Trainings"
                      description="Training on the social insurance groupings."
                    />
                    <EducationCard
                      title="Investment Advisory"
                      description="Training to enlighten members on how they can continue to generate regular income even after retirement."
                    />
                  </div>
                </div>

                {/* Investment Options */}
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold mb-6">
                    Investment Options
                  </h2>
                  <p className="mb-6">
                    BUTSACCO offers various investment opportunities to help our
                    members grow their wealth and secure their financial future.
                    Our investment options are designed to provide stable
                    returns while managing risk appropriately.
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <EducationCard
                      title="Treasury Bills"
                      description="Investment in government treasury bills for short-term, low-risk returns."
                    />
                    <EducationCard
                      title="Treasury Bonds"
                      description="Investment in government treasury bonds for long-term, stable returns."
                    />
                    <EducationCard
                      title="National Groupings"
                      description="Investment in other national groupings for diversified portfolio options."
                    />
                    <EducationCard
                      title="Personal Investment Account"
                      description="Create a personal investment account tailored to your financial goals."
                    />
                    <EducationCard
                      title="SACCO Investment Club"
                      description="Join our investment club to pool resources for larger investment opportunities."
                    />
                  </div>
                </div>

                {/* How to Open an Account */}
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold mb-6">
                    How to Open a Savings Account
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="border border-emerald-100 rounded-lg p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-emerald-50 w-10 h-10 rounded-full flex items-center justify-center">
                          <span className="font-bold text-emerald-600">1</span>
                        </div>
                        <h3 className="text-xl font-semibold">
                          Become a Member
                        </h3>
                      </div>
                      <p className="pl-14">
                        Complete and submit the membership application form with
                        required documentation and pay the membership fee.
                      </p>
                    </div>

                    <div className="border border-emerald-100 rounded-lg p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-emerald-50 w-10 h-10 rounded-full flex items-center justify-center">
                          <span className="font-bold text-emerald-600">2</span>
                        </div>
                        <h3 className="text-xl font-semibold">
                          Select Account Type
                        </h3>
                      </div>
                      <p className="pl-14">
                        All members must first open a voluntary savings account.
                        After this, members can open other types of accounts of
                        their choice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Contact Tab */}
            <TabsContent value="contact">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex flex-col items-center sm:items-start">
                    <div className="bg-emerald-50 p-4 rounded-full mb-6">
                      <Phone className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div className="w-full text-center sm:text-left">
                      <h3 className="font-bold text-xl mb-4 text-emerald-600">
                        Phone Contact
                      </h3>
                      <ul className="space-y-3 text-slate-700">
                        <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                          <span className="font-medium">Office:</span>
                          <span>+256789 529810 / +256779 021565</span>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                          <span className="font-medium">Manager:</span>
                          <span>+256788 566925</span>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                          <span className="font-medium">Chairperson:</span>
                          <span>+256782 147266</span>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                          <span className="font-medium">WhatsApp:</span>
                          <span>0788 566925</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex flex-col items-center sm:items-start">
                    <div className="bg-emerald-50 p-4 rounded-full mb-6">
                      <Mail className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div className="w-full text-center sm:text-left">
                      <h3 className="font-bold text-xl mb-4 text-emerald-600">
                        Email & Social
                      </h3>
                      <ul className="space-y-3 text-slate-700">
                        <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                          <span className="font-medium">Email:</span>
                          <span className="break-all">
                            bukonzounitedteacherssacco@gmail.com
                          </span>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                          <span className="font-medium">Twitter (X):</span>
                          <span>BUTSACCO</span>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                          <span className="font-medium">LinkedIn:</span>
                          <span className="break-all">
                            bukonzounitedteacherssacco@gmail.com
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex flex-col items-center sm:items-start">
                    <div className="bg-emerald-50 p-4 rounded-full mb-6">
                      <MapPin className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div className="w-full text-center sm:text-left">
                      <h3 className="font-bold text-xl mb-4 text-emerald-600">
                        Physical Address
                      </h3>
                      <ul className="space-y-3 text-slate-700">
                        <li>Plot 2 Main Street, Kisinga Bwera Road</li>
                        <li>
                          Located in Kisinga II cell, on Kisinga-Kinyamaseke
                          road about 100 metres from Kisinga town council
                          headquarters
                        </li>
                        <li>P.O. Box 142 Kasese, Uganda</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Our Location
                </h2>
                <div className="aspect-video w-full bg-slate-200 rounded-lg flex items-center justify-center">
                  <p className="text-slate-600">Map will be displayed here</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Become a member today and be part of our mission to create financial
            stability and growth.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-600"
          >
            <Link href="/membership">Become a Member</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

// Component for Founder Cards
function FounderCard({ name, index }: { name: string; index: any }) {
  // Generate a unique but consistent image for each founder based on their name
  const nameHash = name
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const imageId = (nameHash % 100) + 1; // Create a number between 1-100
  const gender = ["Ms.", "Mrs."].some((prefix) => name.includes(prefix))
    ? "women"
    : "men";

  return (
    <div className="bg-white border border-emerald-100 rounded-lg p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
        <img
          src={`https://randomuser.me/api/portraits/${gender}/${imageId}.jpg`}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="font-medium">{name}</h3>
        <p className="text-xs text-slate-500">Founding Member #{index}</p>
      </div>
    </div>
  );
}

// Component for Leadership Cards
function LeadershipCard({
  name,
  position,
  contact,
}: {
  name: string;
  position: string;
  contact?: string;
}) {
  // Generate a unique but consistent image for each leader based on their name
  const nameHash = name
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const imageId = (nameHash % 100) + 1; // Create a number between 1-100
  const gender = ["Ms.", "Mrs."].some((prefix) => name.includes(prefix))
    ? "women"
    : "men";

  return (
    <div className="bg-white border border-emerald-100 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="mb-4 rounded-full overflow-hidden w-24 h-24 mx-auto">
        <img
          src={`https://randomuser.me/api/portraits/${gender}/${imageId}.jpg`}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-emerald-600 mb-2">{position}</p>
        {contact && (
          <p className="text-sm text-slate-600">Contact: {contact}</p>
        )}
      </div>
    </div>
  );
}

// Component for Savings Product Cards
function SavingsProductCard({
  title,
  icon,
  description,
  features,
  buttonText,
  buttonLink,
}: {
  title: string;
  icon: any;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="bg-emerald-50 p-2 rounded-full">{icon}</div>
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button
            asChild
            className="w-full bg-emerald-600 hover:bg-emerald-700"
          >
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Component for Education Cards
function EducationCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-emerald-50 rounded-lg p-6">
      <h3 className="font-semibold text-lg mb-2 text-emerald-700">{title}</h3>
      <p className="text-slate-700">{description}</p>
    </div>
  );
}
