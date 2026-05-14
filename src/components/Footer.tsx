export default function Footer() {
  return (
    <footer className="w-full border-t bg-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} EUROSTOCK. All rights reserved.
        </p>

        <div className="flex gap-4 text-sm text-gray-600">
          <a href="#" className="hover:text-black">Privacy</a>
          <a href="#" className="hover:text-black">Terms</a>
          <a href="#" className="hover:text-black">Contact</a>
        </div>

      </div>
    </footer>
  );
}