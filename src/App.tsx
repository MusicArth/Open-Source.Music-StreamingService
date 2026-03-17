import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppSidebar } from "@/components/AppSidebar";
import { PlayerBar } from "@/components/PlayerBar";
import Index from "./pages/Index";
import SearchPage from "./pages/Search";
import QueuePage from "./pages/Queue";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <div className="h-screen flex flex-col overflow-hidden bg-background">
          <div className="flex flex-1 overflow-hidden">
            <AppSidebar />
            <main className="flex-1 overflow-y-auto bg-gradient-to-b from-elevated/50 to-background rounded-lg m-2 ml-0">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/queue" element={<QueuePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
          <PlayerBar />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
