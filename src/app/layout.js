import "./globals.css";
import ReduxProvider from "@/provider";
export const metadata = {
  title: "Visra",
  description: "DIGITAL SIGNATURES CERTIFICATE",
  icons :{
    icon:"https://visra.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.967247f3.png&w=3840&q=75",
    apple:"https://visra.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.967247f3.png&w=3840&q=75"
  }
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
