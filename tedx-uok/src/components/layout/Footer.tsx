export default function Footer() {
  return (
    <footer className="w-full border-t bg-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} TEDxUOK. All rights reserved.
      </div>
    </footer>
  );
}
