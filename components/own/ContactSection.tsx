import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Send, Phone, Mail, MapPin, Calendar } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#f5f5f5] py-12 md:py-16 lg:py-24">
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl font-bold tracking-tight text-[#2e7d32] md:text-4xl">
              Contact Us
            </h2>
            <p className="mb-6 text-gray-600 text-sm sm:text-base">
              Have questions or need assistance? Our team is here to help. Reach
              out to us using any of the contact methods below.
            </p>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start">
                <div className="mr-3 sm:mr-4 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#e8f5e9] text-[#2e7d32] flex-shrink-0">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base">Phone</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    +256 779021565
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 sm:mr-4 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#e8f5e9] text-[#2e7d32] flex-shrink-0">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base">Email</h3>
                  <p className="text-gray-600 text-sm sm:text-base break-words">
                    bukonzounitedteacherssacco@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 sm:mr-4 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#e8f5e9] text-[#2e7d32] flex-shrink-0">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base">Address</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    P.O. Box 142, Kasese, Uganda
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 sm:mr-4 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#e8f5e9] text-[#2e7d32] flex-shrink-0">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base">
                    Office Hours
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Monday - Friday: 8:00 AM - 5:00 PM
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <div className="rounded-xl sm:rounded-2xl border bg-white p-4 sm:p-6 shadow-md">
              <h3 className="mb-4 text-lg sm:text-xl font-bold">
                Send Us a Message
              </h3>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2 md:col-span-1">
                    <Label htmlFor="name" className="text-sm">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="rounded-lg mt-1 text-sm"
                    />
                  </div>
                  <div className="sm:col-span-2 md:col-span-1">
                    <Label htmlFor="email" className="text-sm">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="rounded-lg mt-1 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="text-sm">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Subject of your message"
                    className="rounded-lg mt-1 text-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm">
                    Message
                  </Label>
                  <textarea
                    id="message"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm mt-1"
                    placeholder="Your message"
                    rows={4}
                  ></textarea>
                </div>
                <Button className="w-full bg-[#1e40af] hover:bg-[#1b5e20] rounded-full text-sm sm:text-base">
                  Send Message <Send className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
