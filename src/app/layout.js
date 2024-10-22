import "./globals.css";
import ReduxProvider from "@/provider";
export const metadata = {
  title: "Visra",
  description: "DIGITAL SIGNATURES CERTIFICATE",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
        {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
