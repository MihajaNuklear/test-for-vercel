import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
export function AppStoreLink({
  color = 'black',
}: {
  color?: 'black' | 'white';
}) {
  return (
    <Link
      href="#"
      aria-label="Download on the App Store"
      className={clsx(
        'rounded-lg transition-colors',
        color === 'black'
          ? 'bg-gray-800 text-white hover:bg-gray-900'
          : 'bg-white text-gray-900 hover:bg-gray-50',
      )}
    >
      <Image
        src="/images/google-store.png"
        alt="Download on the App Store"
        width={40}
        height={40}
        className="h-10"
      />
    </Link>
  );
}

export function AppStoreLink2({
  color = 'black',
}: {
  color?: 'black' | 'white';
}) {
  return (
    <Link
      href="#"
      aria-label="Download on Google Play"
      className={clsx(
        'rounded-lg transition-colors',
        color === 'black'
          ? 'bg-gray-800 text-white hover:bg-gray-900'
          : 'bg-white text-gray-900 hover:bg-gray-50',
      )}
    >
      <Image
        src="/images/google-store.png"
        alt="Download on Google Play"
        width={125}
        height={50}
        className="h-10"
      />
    </Link>
  );
}
