import React from 'react';
import Image from 'next/image';

interface Followings {
  readonly id: number;
  readonly username: string;
  readonly picture: {
    readonly id: number;
    readonly url: string;
    readonly formats: {
      readonly thumbnail: {
        readonly url: string;
      };
      readonly small: {
        readonly url: string;
      };
    };
  } | null;
}

interface Follower {
  readonly id: number;
  readonly username: string;
}

interface NetworkProps {
  readonly followings: ReadonlyArray<Followings>;
  readonly followedBy: ReadonlyArray<Follower> | null;
  readonly baseUrl: string;
}

const DEFAULT_PROFILE_IMAGE = 'https://via.placeholder.com/100';

const Network: React.FC<NetworkProps> = ({
  followings,
  followedBy,
  baseUrl,
}) => {
  return (
    <div className="bg-white overflow-hidden shadow-lg rounded-lg">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4">
        <h3 className="text-2xl font-bold text-white">Network</h3>
      </div>
      <div className="p-6">
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Followings ({followings?.length})
          </h4>
          {followings?.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {followings.map((user) => (
                <li
                  key={user.id}
                  className="flex items-center bg-gray-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <Image
                    src={
                      user?.picture
                        ? `${baseUrl}${user.picture.url}`
                        : DEFAULT_PROFILE_IMAGE
                    }
                    alt={`Following ${user.username}`}
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                    placeholder="blur"
                    blurDataURL={DEFAULT_PROFILE_IMAGE}
                  />
                  <span className="text-sm font-medium text-gray-800">
                    {user.username}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500 bg-gray-50 rounded-lg p-4">
              You are not following anyone.
            </p>
          )}
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Followers ({followedBy?.length ?? 0})
          </h4>
          {followedBy && followedBy.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {followedBy.map((user) => (
                <li
                  key={user.id}
                  className="bg-gray-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <span className="text-sm font-medium text-gray-800">
                    {user.username}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500 bg-gray-50 rounded-lg p-4">
              No followers available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Network);
