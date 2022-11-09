import Menu from "../components/Menu";

export default function Register() {
  return (
    <>
      <Menu />
      <div className="antialiased text-gray-900 px-6">
        <div className="max-w-xl mx-auto py-12 md:max-w-4xl">
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700">Name</span>
                <input
                  type="text"
                  className="form-input mt-1 block w-full"
                  placeholder="John Doe"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Email</span>
                <input
                  type="email"
                  className="form-input mt-1 block w-full"
                  placeholder="john@example.com"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Input (password)</span>
                <input
                  type="password"
                  className="form-input mt-1 block w-full"
                  placeholder="john@example.com"
                />
              </label>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700">Input (tel)</span>
                <input
                  type="tel"
                  multiple
                  className="form-input mt-1 block w-full"
                  placeholder="john@example.com"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}