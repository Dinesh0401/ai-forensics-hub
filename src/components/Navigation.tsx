
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border z-50">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-primary">FakeniX</div>
        </Link>
        <div className="flex items-center space-x-6 ml-6">
          <Link to="/report" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
            Report Deepfake
          </Link>
          <Link to="/track" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
            Track Reports
          </Link>
          <Link to="/forum" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
            Forum
          </Link>
          <Link to="/roadmap" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
            Roadmap
          </Link>
          <Link to="/about" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
            About
          </Link>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Link to="/admin">
            <Button variant="ghost" className="text-sm">
              Admin Login
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
