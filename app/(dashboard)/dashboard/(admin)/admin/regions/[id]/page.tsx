// import { notFound } from "next/navigation"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import {
//   CalendarDays,
//   CreditCard,
//   DollarSign,
//   User,
//   Wallet,
//   ArrowDownCircle,
//   ArrowUpCircle,
//   FileText,
//   Clock,
// } from "lucide-react"


// async function getUserData(id:string):Promise<any> {

  
//   return {
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1234567890",
//     email: "john.doe@example.com",
//     imageUrl: "https://r50yz3qt7r.ufs.sh/f/zl2zFA2EExZ9Dy9YOVlO4awnFrdohseMm6TzB3HcQkfPpXJl",
//     isVerfied: true,
//     createdAt: new Date("2023-01-15"),
//     role: "USER",
//     wallet: {
//       accountNumber: "1234567890",
//       balance: 45000,
//       status: "ACTIVE",
//       interestRate: 12,
//       minimumBalance: 20000,
//       createdAt: new Date("2023-01-15"),
//     },
//     loans: [
//       {
//         id: "loan-1",
//         amount: 100000,
//         applicationDate: new Date("2023-06-10"),
//         status: "ACTIVE",
//         duration: 12,
//         totalPaid: 25000,
//         totalRepayable: 112000,
//         rate: {
//           period: "12 months",
//           percentage: 12,
//         },
//         repayments: [
//           {
//             id: "repay-1",
//             amount: 10000,
//             paymentDate: new Date("2023-07-10"),
//             paymentMethod: "CASH_DEPOSIT",
//             remainingBalance: 102000,
//           },
//           {
//             id: "repay-2",
//             amount: 10000,
//             paymentDate: new Date("2023-08-10"),
//             paymentMethod: "MOBILE_MONEY",
//             remainingBalance: 92000,
//           },
//           {
//             id: "repay-3",
//             amount: 5000,
//             paymentDate: new Date("2023-09-10"),
//             paymentMethod: "CASH_DEPOSIT",
//             remainingBalance: 87000,
//           },
//         ],
//       },
//     ],
//     savings: [
//       {
//         id: "save-1",
//         amount: 5000,
//         depositDate: new Date("2023-02-15"),
//         savingType: "REGULAR",
//       },
//       {
//         id: "save-2",
//         amount: 10000,
//         depositDate: new Date("2023-03-15"),
//         savingType: "EMERGENCY",
//       },
//       {
//         id: "save-3",
//         amount: 15000,
//         depositDate: new Date("2023-04-15"),
//         savingType: "EDUCATION",
//       },
//     ],
//     withdraws: [
//       {
//         id: "withdraw-1",
//         amount: 2000,
//         withdrawDate: new Date("2023-05-20"),
//       },
//       {
//         id: "withdraw-2",
//         amount: 3000,
//         withdrawDate: new Date("2023-07-25"),
//       },
//     ],
//     loanApplications: [
//       {
//         id: "app-1",
//         documentUrl: "https://example.com/document1.pdf",
//         uploadDate: new Date("2023-06-01"),
//         status: "APPROVED",
//         verificationStatus: true,
//         verifiedAt: new Date("2023-06-05"),
//       },
//     ],
//   }
// }

// function formatCurrency(amount: number) {
//   return new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//   }).format(amount)
// }

// function formatDate(date: Date) {
//   return new Intl.DateTimeFormat("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   }).format(new Date(date))
// }

// export default async function UserDetailPage({ params }: { params: { id: string } }) {
//   const {id}= await params
//   const userData = await getUserData(id)

//   if (!userData) {
//     notFound()
//   }

//   const fullName = `${userData.firstName} ${userData.lastName}`

//   return (
//     <div className="container mx-auto py-6 space-y-8">
//       <div className="flex justify-between items-start">
//         <h1 className="text-3xl font-bold">User Details</h1>
//         <Button variant="outline">Edit User</Button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* User Profile Card */}
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle>Profile</CardTitle>
//             <CardDescription>User personal information</CardDescription>
//           </CardHeader>
//           <CardContent className="flex flex-col items-center text-center">
//             <Avatar className="h-24 w-24 mb-4">
//               <AvatarImage src={userData.imageUrl || "/placeholder.svg"} alt={fullName} />
//               <AvatarFallback>
//                 {userData.firstName[0]}
//                 {userData.lastName[0]}
//               </AvatarFallback>
//             </Avatar>
//             <h2 className="text-xl font-semibold">{fullName}</h2>
//             <p className="text-muted-foreground">{userData.email}</p>
//             <div className="flex items-center mt-2 gap-2">
//               <Badge variant={userData.isVerfied ? "default" : "outline"}>
//                 {userData.isVerfied ? "Verified" : "Unverified"}
//               </Badge>
//               <Badge variant="outline">{userData.role}</Badge>
//             </div>

//             <div className="w-full mt-6 space-y-2">
//               <div className="flex items-center justify-between border-b pb-2">
//                 <div className="flex items-center gap-2">
//                   <User className="h-4 w-4 text-muted-foreground" />
//                   <span className="text-muted-foreground">Phone</span>
//                 </div>
//                 <span>{userData.phone}</span>
//               </div>
//               <div className="flex items-center justify-between border-b pb-2">
//                 <div className="flex items-center gap-2">
//                   <CalendarDays className="h-4 w-4 text-muted-foreground" />
//                   <span className="text-muted-foreground">Joined</span>
//                 </div>
//                 <span>{formatDate(userData.createdAt)}</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Wallet Information */}
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle>Wallet</CardTitle>
//             <CardDescription>Account and balance information</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="flex justify-between items-center mb-6">
//               <div className="flex items-center gap-2">
//                 <Wallet className="h-5 w-5 text-muted-foreground" />
//                 <span className="text-muted-foreground">Balance</span>
//               </div>
//               <span className="text-2xl font-bold">{formatCurrency(userData.wallet.balance)}</span>
//             </div>

//             <div className="space-y-3">
//               <div className="flex items-center justify-between border-b pb-2">
//                 <span className="text-muted-foreground">Account Number</span>
//                 <span className="font-medium">{userData.wallet.accountNumber}</span>
//               </div>
//               <div className="flex items-center justify-between border-b pb-2">
//                 <span className="text-muted-foreground">Status</span>
//                 <Badge variant={userData.wallet.status === "ACTIVE" ? "default" : "destructive"}>
//                   {userData.wallet.status}
//                 </Badge>
//               </div>
//               <div className="flex items-center justify-between border-b pb-2">
//                 <span className="text-muted-foreground">Interest Rate</span>
//                 <span>{userData.wallet.interestRate}%</span>
//               </div>
//               <div className="flex items-center justify-between border-b pb-2">
//                 <span className="text-muted-foreground">Minimum Balance</span>
//                 <span>{formatCurrency(userData.wallet.minimumBalance)}</span>
//               </div>
//               <div className="flex items-center justify-between pb-2">
//                 <span className="text-muted-foreground">Created</span>
//                 <span>{formatDate(userData.wallet.createdAt)}</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Quick Stats */}
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle>Summary</CardTitle>
//             <CardDescription>Financial overview</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-6">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <CreditCard className="h-5 w-5 text-muted-foreground" />
//                 <span className="text-muted-foreground">Active Loans</span>
//               </div>
//               <span className="font-medium">{userData.loans.filter((loan:any) => loan.status === "ACTIVE").length}</span>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <DollarSign className="h-5 w-5 text-muted-foreground" />
//                 <span className="text-muted-foreground">Total Savings</span>
//               </div>
//               <span className="font-medium">
//                 {formatCurrency(userData.savings.reduce((sum:any, saving:any) => sum + saving.amount, 0))}
//               </span>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <ArrowUpCircle className="h-5 w-5 text-muted-foreground" />
//                 <span className="text-muted-foreground">Total Deposits</span>
//               </div>
//               <span className="font-medium">{userData.savings.length}</span>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <ArrowDownCircle className="h-5 w-5 text-muted-foreground" />
//                 <span className="text-muted-foreground">Total Withdrawals</span>
//               </div>
//               <span className="font-medium">
//                 {formatCurrency(userData.withdraws.reduce((sum:any, withdraw:any) => sum + withdraw.amount, 0))}
//               </span>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <FileText className="h-5 w-5 text-muted-foreground" />
//                 <span className="text-muted-foreground">Loan Applications</span>
//               </div>
//               <span className="font-medium">{userData.loanApplications.length}</span>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Tabs for detailed information */}
//       <Tabs defaultValue="loans" className="w-full">
//         <TabsList className="grid grid-cols-4 w-full max-w-md">
//           <TabsTrigger value="loans">Loans</TabsTrigger>
//           <TabsTrigger value="savings">Savings</TabsTrigger>
//           <TabsTrigger value="withdrawals">Withdrawals</TabsTrigger>
//           <TabsTrigger value="applications">Applications</TabsTrigger>
//         </TabsList>

//         <TabsContent value="loans" className="space-y-4 mt-4">
//           <h2 className="text-xl font-semibold">Loans</h2>
//           {userData.loans.length === 0 ? (
//             <p className="text-muted-foreground">No loans found.</p>
//           ) : (
//             <div className="space-y-4">
//               {userData.loans.map((loan:any) => (
//                 <Card key={loan.id}>
//                   <CardHeader className="pb-2">
//                     <div className="flex justify-between items-center">
//                       <CardTitle className="text-lg">Loan {loan.id}</CardTitle>
//                       <Badge
//                         variant={
//                           loan.status === "ACTIVE"
//                             ? "default"
//                             : loan.status === "COMPLETED"
//                               ? "success"
//                               : loan.status === "OVERDUE"
//                                 ? "destructive"
//                                 : "outline"
//                         }
//                       >
//                         {loan.status}
//                       </Badge>
//                     </div>
//                     <CardDescription>Applied on {formatDate(loan.applicationDate)}</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div className="space-y-2">
//                         <div className="flex justify-between">
//                           <span className="text-muted-foreground">Amount</span>
//                           <span className="font-medium">{formatCurrency(loan.amount || 0)}</span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span className="text-muted-foreground">Duration</span>
//                           <span className="font-medium">{loan.duration} months</span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span className="text-muted-foreground">Interest Rate</span>
//                           <span className="font-medium">{loan.rate.percentage}%</span>
//                         </div>
//                       </div>
//                       <div className="space-y-2">
//                         <div className="flex justify-between">
//                           <span className="text-muted-foreground">Total Repayable</span>
//                           <span className="font-medium">{formatCurrency(loan.totalRepayable || 0)}</span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span className="text-muted-foreground">Total Paid</span>
//                           <span className="font-medium">{formatCurrency(loan.totalPaid || 0)}</span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span className="text-muted-foreground">Remaining</span>
//                           <span className="font-medium">
//                             {formatCurrency((loan.totalRepayable || 0) - (loan.totalPaid || 0))}
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     {loan.repayments.length > 0 && (
//                       <div className="mt-4">
//                         <h3 className="text-sm font-medium mb-2">Repayment History</h3>
//                         <div className="space-y-2">
//                           {loan.repayments.map((repayment:any) => (
//                             <div key={repayment.id} className="flex justify-between items-center border-b pb-2">
//                               <div className="flex items-center gap-2">
//                                 <Clock className="h-4 w-4 text-muted-foreground" />
//                                 <span>{formatDate(repayment.paymentDate)}</span>
//                               </div>
//                               <div className="flex items-center gap-4">
//                                 <Badge variant="outline">{repayment.paymentMethod}</Badge>
//                                 <span className="font-medium">{formatCurrency(repayment.amount)}</span>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </CardContent>
//                   <div className="mt-6 flex justify-end">
//                     <Button>
//                       <DollarSign className="h-4 w-4 mr-2" />
//                       Make Repayment
//                     </Button>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           )}
//         </TabsContent>

//         <TabsContent value="savings" className="space-y-4 mt-4">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold">Savings</h2>
//             <Button>
//               <ArrowUpCircle className="h-4 w-4 mr-2" />
//               New Deposit
//             </Button>
//           </div>
//           {userData.savings.length === 0 ? (
//             <p className="text-muted-foreground">No savings found.</p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {userData.savings.map((saving:any) => (
//                 <Card key={saving.id}>
//                   <CardHeader className="pb-2">
//                     <div className="flex justify-between items-center">
//                       <CardTitle className="text-lg">{formatCurrency(saving.amount)}</CardTitle>
//                       <Badge variant="outline">{saving.savingType}</Badge>
//                     </div>
//                     <CardDescription>Deposited on {formatDate(saving.depositDate)}</CardDescription>
//                   </CardHeader>
//                 </Card>
//               ))}
//             </div>
//           )}
//         </TabsContent>

//         <TabsContent value="withdrawals" className="space-y-4 mt-4">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold">Withdrawals</h2>
//             <Button>
//               <ArrowDownCircle className="h-4 w-4 mr-2" />
//               New Withdrawal
//             </Button>
//           </div>
//           {userData.withdraws.length === 0 ? (
//             <p className="text-muted-foreground">No withdrawals found.</p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {userData.withdraws.map((withdraw:any) => (
//                 <Card key={withdraw.id}>
//                   <CardHeader className="pb-2">
//                     <CardTitle className="text-lg">{formatCurrency(withdraw.amount)}</CardTitle>
//                     <CardDescription>Withdrawn on {formatDate(withdraw.withdrawDate)}</CardDescription>
//                   </CardHeader>
//                 </Card>
//               ))}
//             </div>
//           )}
//         </TabsContent>

//         <TabsContent value="applications" className="space-y-4 mt-4">
//           <h2 className="text-xl font-semibold">Loan Applications</h2>
//           {userData.loanApplications.length === 0 ? (
//             <p className="text-muted-foreground">No loan applications found.</p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {userData.loanApplications.map((application:any) => (
//                 <Card key={application.id}>
//                   <CardHeader className="pb-2">
//                     <div className="flex justify-between items-center">
//                       <CardTitle className="text-lg">Application {application.id}</CardTitle>
//                       <Badge
//                         variant={
//                           application.status === "APPROVED"
//                             ? "success"
//                             : application.status === "REJECTED"
//                               ? "destructive"
//                               : "outline"
//                         }
//                       >
//                         {application.status}
//                       </Badge>
//                     </div>
//                     <CardDescription>Submitted on {formatDate(application.uploadDate)}</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-2">
//                       <div className="flex justify-between">
//                         <span className="text-muted-foreground">Verification Status</span>
//                         <Badge variant={application.verificationStatus ? "default" : "outline" }>
//                           {application.verificationStatus ? "Verified" : "Pending"}
//                         </Badge>
//                       </div>
//                       {application.verifiedAt && (
//                         <div className="flex justify-between">
//                           <span className="text-muted-foreground">Verified At</span>
//                           <span>{formatDate(application.verifiedAt)}</span>
//                         </div>
//                       )}
//                       <div className="flex justify-between">
//                         <span className="text-muted-foreground">Document</span>
//                         <Button variant="link" className="p-0 h-auto" asChild>
//                           <a href={application.documentUrl} target="_blank" rel="noopener noreferrer">
//                             View Document
//                           </a>
//                         </Button>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           )}
//         </TabsContent>
//       </Tabs>
//     </div>
//   )
// }

import React from 'react'

export default function Page() {
  return (
    <div>page</div>
  )
}

