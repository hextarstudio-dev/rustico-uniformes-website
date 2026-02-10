import { ReactNode, Suspense, lazy } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll";

// Lazy load heavy components
const AnimatedBackground = lazy(() => import("./AnimatedBackground"));
const FloatingWhatsApp = lazy(() => import("./FloatingWhatsApp"));

// Loading placeholder
const BackgroundLoader = () => (
  <div className="fixed inset-0 bg-background" />
);

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen min-h-[100dvh] bg-background text-foreground relative overflow-hidden noise-overlay">
      <SmoothScroll />
      <Suspense fallback={<BackgroundLoader />}>
        <AnimatedBackground />
      </Suspense>
      <Header />
      <main className="relative z-10" role="main">{children}</main>
      <Footer />
      <Suspense fallback={null}>
        <FloatingWhatsApp />
      </Suspense>
    </div>
  );
};

export default Layout;
