export default function ContactUs(){
  return (
    // from-blue-300 to-black
    // from-gray-600 to-green-900
    <div className="antialiased bg-gradient-to-r from-black to-green-900 text-white">
      <div className="container mx-auto py-12">
      <h2 className="text-2xl border-b-2 border-b-g-600 m-auto">Contact Us</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="">Name</span>
              <input
                type="text"
                className="form-input mt-1 block w-full"
                placeholder="John Doe"
              />
            </label>
            <label className="block">
              <span>Email</span>
              <input
                type="email"
                className="form-input mt-1 block w-full"
                placeholder="john@example.com"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="">Mobile Phone</span>
              <input
                type="tel"
                className="form-input mt-1 block w-full"
                placeholder="6824567898"
              />
            </label>
            <label className="block">
              <span className="">Textarea</span>
              <textarea
                className="form-textarea mt-1 block w-full h-24"
                placeholder="Enter some long form content."
              ></textarea>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}