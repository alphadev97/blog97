import "@styles/globals.css";
import { metadata } from "./layout";

export const metadata = {
  title: "Prompty97",
  description: "Discover & Share AI Prompt",
};

const RootLayout = () => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
