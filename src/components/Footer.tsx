"use client";

export default function Footer() {
  return (
    <footer className="py-6 bg-black text-white text-center">
      <p>&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
    </footer>
  );
}
