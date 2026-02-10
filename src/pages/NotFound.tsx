import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            {/* 404 Number */}
            <h1 className="font-display text-8xl md:text-9xl text-primary mb-4">
              404
            </h1>
            
            {/* Message */}
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              PÁGINA NÃO ENCONTRADA
            </h2>
            <p className="text-muted-foreground font-institutional mb-8">
              A página que você está procurando pode ter sido removida, teve seu nome alterado ou está temporariamente indisponível.
            </p>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                Ir para Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="btn-outline inline-flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
