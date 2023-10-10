// In your ReadMore component file (readMore.js)
import Link from 'next/link';

const ReadMore = ({ id }) => {
  return (
    <Link href={`/${id}`}>
      <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        {/* ... */}
      </div>
    </Link>
  );
};

export default ReadMore;
