import { Send } from "lucide-react";

export default function EnquiryForm() {
  
  return (
    <section className="py-20 bg-blue-50 rounded-xl">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-acternity p-8 md:p-10">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Request a Free Counseling / Demo
          </h2>
          <p className="text-gray-600 text-center mt-2 mb-8">
            Share your details and our team will guide you with course, fees and
            career options.
          </p>

          <form action={"https://api.web3forms.com/submit"} method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <input type="hidden" name="access_key" value="3a263ec2-ca9e-45aa-a340-a7079867d443" />
       
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email (optional)
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Interested Course
              </label>
              <select
                name="course"
                id="course"
                required
                className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a course</option>
                <option value="Revit Architecture">Revit Architecture</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="SAP">SAP</option>
                <option value="Web Development">Web Development</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Data Science">Data Science</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message / Query
              </label>
              <textarea
                name="message"
                id="message"
                rows={3}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us how we can help you..."
              />
            </div>

            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-blue-800 transition"
              >
                <Send className="w-4 h-4" />
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
