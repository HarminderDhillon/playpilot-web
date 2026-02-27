import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-divider bg-surface-variant">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-primary">PlayPilot</p>
            <p className="mt-2 text-sm text-text-secondary">
              Helping early childhood educators document meaningful learning moments.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-sm font-semibold text-text">Product</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/features" className="text-sm text-text-secondary hover:text-primary">Features</Link>
              <Link href="/about" className="text-sm text-text-secondary hover:text-primary">About</Link>
              <Link href="/login" className="text-sm text-text-secondary hover:text-primary">Dashboard</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-sm font-semibold text-text">Legal</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/privacy" className="text-sm text-text-secondary hover:text-primary">Privacy Policy</Link>
              <Link href="/privacy#terms" className="text-sm text-text-secondary hover:text-primary">Terms of Service</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-text">Connect</p>
            <div className="mt-3 flex flex-col gap-2">
              <a href="mailto:hello@playpilot.app" className="text-sm text-text-secondary hover:text-primary">hello@playpilot.app</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-divider pt-6 text-center text-xs text-text-muted">
          &copy; {new Date().getFullYear()} PlayPilot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
