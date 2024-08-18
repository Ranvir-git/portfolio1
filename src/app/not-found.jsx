import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="h1 mb-8">404</h1>
        <p className="h4 text-primary mb-4">Oops! Page not found.</p>
        <Link href="/">
          <Button >Go back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
