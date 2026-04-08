import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mx-auto mb-16 py-12 border-b border-white/10">
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Get in Touch
          </h1>
          <p className="text-muted text-sm md:text-lg">
            Whether you have a question about our products, need a custom order,
            or just want to say hello, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="font-serif underline  underline-offset-4 decoration-primary text-white text-2xl md:text-3xl font-bold mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <MapPin className="w-4 h-4 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-white">Our Factory</h4>
                    <p className="text-muted text-sm md:text-base hover:text-primary transition">
                      39-2/C, Dolphin Estate, Dabhoi Road,
                      <br />
                      Beside Zenith School, Vadodara - 390004
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Phone className="w-4 h-4 md:w-6 md:h-6" />
                  </div>

                  <div>
                    <h4 className="font-bold mb-1 text-white">Phone</h4>

                    <a
                      href="tel:+919998180032"
                      className="text-muted text-sm md:text-base hover:text-primary transition"
                    >
                      (+91) 9998180032
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Mail className="w-4 h-4 md:w-6 md:h-6" />
                  </div>

                  <div>
                    <h4 className="font-bold mb-1 text-white">Email</h4>

                    <a
                      href="mailto:wasimbandwala@gmail.com?subject=Inquiry&body=Hello, I want to contact you."
                      className="text-muted text-sm md:text-base hover:text-primary transition"
                    >
                      wasimbandwala@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-white text-2xl md:text-3xl font-bold mb-4 md:mb-8 underline  underline-offset-4 decoration-primary">
                Quick Connect
              </h2>
              <a
                href="https://wa.me/+91 9998180032?text=Hey, Can we Connect?"
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-sm md:text-base items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all w-full justify-center"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-background p-5 md:p-12 rounded-3xl shadow-lg border border-white/10 text-white">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-white">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="font-medium text-sm text-neutral-300"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 text-sm md:text-base rounded-xl border border-white/20 bg-background/50 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="font-medium text-sm text-neutral-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full text-sm md:text-base px-4 py-3 rounded-xl border border-white/20 bg-background/50 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="font-medium text-sm text-neutral-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full text-sm md:text-base px-4 py-3 rounded-xl border border-white/20 bg-background/50 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Inquiry about..."
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="font-medium text-sm text-neutral-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full text-sm md:text-base px-4 py-3 rounded-xl border border-white/20 bg-background/50 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-primary hover:bg-primary-light text-black px-8 py-3 md:py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-20 rounded-3xl overflow-hidden h-[400px] border border-muted/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.8609177713793!2d73.21054357599327!3d22.28325774351163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc596bf067833%3A0x460ae5cdddad6056!2sDolphin%20Estate!5e0!3m2!1sen!2sin!4v1775629566960!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
