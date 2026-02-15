import { Heart } from 'lucide-react';
import { useContactContent } from '../../hooks/useSiteContent';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'mastermind-study-circle';

  const { address, phone, email } = useContactContent();

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-semibold">Mastermind Study Circle</h3>
            <p className="text-sm text-muted-foreground">
              Empowering students through quality education and personalized coaching for NIOS programs.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-foreground transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="/vision" className="hover:text-foreground transition-colors">Our Vision</a></li>
              <li><a href="/nios-streams" className="hover:text-foreground transition-colors">NIOS Streams</a></li>
              <li><a href="/admissions" className="hover:text-foreground transition-colors">Admissions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: {email}</li>
              <li>Phone: {phone}</li>
              <li>Address: {address}</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-6 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Mastermind Study Circle. Built with{' '}
            <Heart className="h-4 w-4 fill-destructive text-destructive" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
