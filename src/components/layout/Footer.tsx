import Link from 'next/link';
import Image from 'next/image';
import { NewsletterForm } from './NewsletterForm';

export function Footer() {
  return (
    <footer className="border-t border-divider bg-surface-variant">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image src="/logo-plane.png" alt="PlayPilot" width={44} height={44} />
              <p className="text-lg font-bold text-primary">PlayPilot</p>
            </div>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              Empowering everyone in early childhood education.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-sm font-semibold text-text">Product</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/features" className="block py-1 text-sm text-text-secondary transition-colors hover:text-primary">Features</Link>
              <Link href="/about" className="block py-1 text-sm text-text-secondary transition-colors hover:text-primary">About</Link>
              <Link href="/blog" className="block py-1 text-sm text-text-secondary transition-colors hover:text-primary">Blog</Link>
              <Link href="/pricing" className="block py-1 text-sm text-text-secondary transition-colors hover:text-primary">Get Started</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-sm font-semibold text-text">Legal</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/privacy" className="block py-1 text-sm text-text-secondary transition-colors hover:text-primary">Privacy Policy</Link>
              <Link href="/terms" className="block py-1 text-sm text-text-secondary transition-colors hover:text-primary">Terms of Service</Link>
            </div>
          </div>

          {/* Connect + Newsletter */}
          <div>
            <p className="text-sm font-semibold text-text">Connect</p>
            <div className="mt-3 flex flex-col gap-2">
              <a href="mailto:hello@playpilotlearning.com" className="block py-1 text-sm text-text-secondary transition-colors hover:text-primary">hello@playpilotlearning.com</a>
            </div>

            <p className="mt-6 text-sm font-semibold text-text">Stay in the loop</p>
            <p className="mt-1 text-xs text-text-muted">Get updates on launch and early access.</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-10 border-t border-divider pt-6 text-center text-xs text-text-muted">
          &copy; {new Date().getFullYear()} PlayPilot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
