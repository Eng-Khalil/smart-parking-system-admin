import Footer from "@/components/own/footer";
import Nav2 from "@/components/own/Nav2";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}
