import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart2,
  CreditCard,
  Shield,
  Users,
  Award,
  Clock,
  Landmark,
} from "lucide-react";
import HeroSlider from "@/components/own/hero-slider";
import TestimonialCard from "@/components/own/testimonial-card";
import Login from "@/components/LoginForm";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen">
          <Login/>
    </div>
  );
}
