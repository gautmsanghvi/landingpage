export const metadata = {
  title: "Landing Page",
  description: "Assignment landing page with Next.js, Tailwind, and GSAP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
