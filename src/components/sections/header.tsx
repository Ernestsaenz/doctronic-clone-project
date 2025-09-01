import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-border bg-background px-6">
      <Button
        variant="ghost"
        size="icon"
        id="doctronic-main-navigation-button"
        aria-label="Toggle navigation"
        className="-ml-2"
      >
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d84085c-008c-423b-a168-dad290aa1c87-doctronic-ai/assets/svgs/menu-2.svg?"
          alt="Menu icon"
          width={18}
          height={18}
          className="h-[18px] w-[18px]"
        />
      </Button>

      <Link
        id="doctronic-membership-login-button"
        href="https://www.doctronic.ai/member/login/"
        className="inline-flex h-auto items-center justify-center whitespace-nowrap rounded-md border border-input bg-transparent px-4 py-1.5 text-sm font-medium text-primary ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        data-testid="login"
        data-analytics-event="signup-view"
      >
        Log in
      </Link>
    </header>
  );
};

export default Header;