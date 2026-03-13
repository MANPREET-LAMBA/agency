export default function Footer() {
  return (
    <footer className="w-full bg-[#111] text-white mt-24">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            ManpreetDev
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            Turning ideas into powerful digital products.  
            Websites, Apps, AI tools and Ads that help your business grow.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Navigation</h3>

          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-orange-500 transition cursor-pointer">Home</li>
            <li className="hover:text-orange-500 transition cursor-pointer">Projects</li>
            <li className="hover:text-orange-500 transition cursor-pointer">Services</li>
            <li className="hover:text-orange-500 transition cursor-pointer">About</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Resources</h3>

          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-orange-500 transition cursor-pointer">Blog</li>
            <li className="hover:text-orange-500 transition cursor-pointer">Help Center</li>
            <li className="hover:text-orange-500 transition cursor-pointer">Privacy Policy</li>
            <li className="hover:text-orange-500 transition cursor-pointer">Terms</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact</h3>

          <p className="text-gray-400 text-sm mb-3">
            Let's build something amazing together.
          </p>

          <p className="text-orange-500 font-medium">
            manpreetdev100x@gmail.com
          </p>

          <div className="flex gap-4 mt-5 text-gray-400">
            <a className="hover:text-orange-500 transition cursor-pointer" href="https://www.instagram.com/manpreet_devx?igsh=NTJvNXI4ZXhhNDJw&utm_source=qr">
              Instagram
            </a>
            <a className="hover:text-orange-500 transition cursor-pointer" href="https://x.com/manpreet_dev100?s=21" >
              Twitter
            </a>
            <a className="hover:text-orange-500 transition cursor-pointer" href="https://www.linkedin.com/in/manpreet-singh99/">
              LinkedIn
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>

    </footer>
  );
}