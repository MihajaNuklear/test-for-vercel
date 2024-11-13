import React from 'react';

interface Review {
  id: number;
  Text: string;
  note: number;
  createdAt: string;
}

interface UserReviewsProps {
  reviews: Review[];
  renderStars: (rating: number) => JSX.Element;
}

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const UserReviews: React.FC<UserReviewsProps> = React.memo(
  ({ reviews, renderStars }) => {
    return (
      <div className="bg-white overflow-hidden shadow-lg rounded-lg">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            User Reviews ({reviews.length})
          </h2>
        </div>
        <div className="p-6">
          {reviews.length > 0 ? (
            <ul className="space-y-6">
              {reviews.map((review) => (
                <li
                  key={review.id}
                  className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <p className="text-gray-800 mb-3 italic">
                    &ldquo;{review.Text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {renderStars(review.note)}
                      <span className="ml-2 text-sm font-medium text-gray-600">
                        {review.note.toFixed(1)}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {formatDate(review.createdAt)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <svg
                className="w-16 h-16 mx-auto text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-gray-500 text-lg">No reviews available yet.</p>
            </div>
          )}
        </div>
      </div>
    );
  },
);

UserReviews.displayName = 'UserReviews';

export default UserReviews;
