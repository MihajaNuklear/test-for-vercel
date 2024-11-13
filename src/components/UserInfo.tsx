import React, { useMemo } from 'react';
import Image from 'next/image';

interface UserInfoProps {
  username: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  profileImageUrl: string | null;
}

const FLAG_URLS = {
  '33': 'https://flagcdn.com/w20/fr.png',
  '48': 'https://flagcdn.com/w20/pl.png',
  '1': 'https://flagcdn.com/w20/us.png',
  '44': 'https://flagcdn.com/w20/gb.png',
};

const formatPhoneNumber = (phone: string) => {
  const countryCodes: {
    [key: string]: { flag: string; format: (number: string) => string };
  } = {
    '33': {
      flag: FLAG_URLS['33'],
      format: (num) =>
        `+33 ${num.substring(1, 3)} ${num.substring(3, 5)} ${num.substring(5, 7)} ${num.substring(7)}`,
    },
    '48': {
      flag: FLAG_URLS['48'],
      format: (num) =>
        `+48 ${num.substring(0, 3)} ${num.substring(3, 6)} ${num.substring(6)}`,
    },
    '1': {
      flag: FLAG_URLS['1'],
      format: (num) =>
        `+1 ${num.substring(0, 3)} ${num.substring(3, 6)} ${num.substring(6)}`,
    },
    '44': {
      flag: FLAG_URLS['44'],
      format: (num) => `+44 ${num.substring(1, 5)} ${num.substring(5)}`,
    },
  };

  const prefix = phone.substring(0, 2);
  const countryInfo = countryCodes[prefix];

  const formattedNumber = countryInfo
    ? countryInfo.format(phone.replace(/^(\+?\d{2})/, ''))
    : `+${phone}`;

  return { formattedNumber, flag: countryInfo?.flag };
};

const UserInfo: React.FC<UserInfoProps> = React.memo(
  ({ username, email, firstName, lastName, phone, profileImageUrl }) => {
    const phoneInfo = useMemo(
      () => (phone ? formatPhoneNumber(phone) : null),
      [phone],
    );

    return (
      <div className="bg-white overflow-hidden shadow-lg rounded-lg">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
          <h2 className="text-2xl font-bold text-white">User Profile</h2>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="mr-6">
              {profileImageUrl && (
                <Image
                  src={profileImageUrl}
                  alt="Profile Image"
                  width={100}
                  height={100}
                  className="rounded-full border-4 border-white shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/100';
                  }}
                />
              )}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {username}
              </h3>
              <p className="text-md text-gray-600">
                {firstName} {lastName}
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-gray-500 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-gray-700">{email}</span>
            </div>
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-gray-500 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {phoneInfo ? (
                <span className="flex items-center text-gray-700">
                  {phoneInfo.flag && (
                    <Image
                      src={phoneInfo.flag}
                      alt="Country Flag"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                  )}
                  <span>{phoneInfo.formattedNumber}</span>
                </span>
              ) : (
                <span className="text-gray-500 italic">
                  No phone number available
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

UserInfo.displayName = 'UserInfo';

export default UserInfo;
