import React from "react";

const ContactUs = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50 px-3">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Get In Touch</h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">Have questions about adoption or want to help our furry friends? Reach out to us, and we'll respond as soon as possible.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-4">
              {/* Email Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-[#ff6a00]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email Us</h4>
                  <p className="text-sm text-gray-500">admin@pawmart.com</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-[#ff6a00]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Visit Us</h4>
                  <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
                </div>
              </div>

              {/* Support Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-[#ff6a00]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Working Hours</h4>
                  <p className="text-sm text-gray-500">Sat - Thu, 9am - 5pm</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-4 md:p-10 rounded-2xl shadow-md border border-gray-100">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label-text font-semibold text-gray-700 mb-2 block">Full Name</label>
                  <input type="text" placeholder="John Doe" className="input input-bordered w-full focus:outline-[#ff9100] bg-gray-50 border-gray-200" />
                </div>
                <div className="form-control">
                  <label className="label-text font-semibold text-gray-700 mb-2 block">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="input input-bordered w-full focus:outline-[#ff9100] bg-gray-50 border-gray-200" />
                </div>
                <div className="md:col-span-2 form-control">
                  <label className="label-text font-semibold text-gray-700 mb-2 block">Subject</label>
                  <input type="text" placeholder="How can we help?" className="input input-bordered w-full focus:outline-[#ff9100] bg-gray-50 border-gray-200" />
                </div>
                <div className="md:col-span-2 form-control">
                  <label className="label-text font-semibold text-gray-700 mb-2 block">Message</label>
                  <textarea className="textarea textarea-bordered h-32 w-full focus:outline-[#ff9100] bg-gray-50 border-gray-200" placeholder="Your message here..."></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="btn w-full bg-linear-to-tr from-[#ff6a00] to-[#ffb03a] text-white border-none shadow-lg hover:shadow-orange-200 transition-all py-2 h-auto text-lg font-bold">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
