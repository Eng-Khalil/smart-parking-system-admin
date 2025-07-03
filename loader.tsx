import SimpleFinancialLoader from "./components/custome-financial-loader";
import CustomFinancialLoader from "./components/custome-financial-loader";

export default function Loader() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
     <SimpleFinancialLoader logoText="MFA" text="Loading........" color="#0EA5E9" />
    </main>
  )
}
