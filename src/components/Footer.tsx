export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 shadow-lg">
      <div className="container mx-auto text-center">
        <p className="text-lg font-medium">
          &copy; {currentYear} Alik's Gallery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
