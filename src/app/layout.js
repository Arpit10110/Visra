import "./globals.css";
export const metadata = {
  title: "Visra",
  description: "DIGITAL SIGNATURES CERTIFICATE",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
