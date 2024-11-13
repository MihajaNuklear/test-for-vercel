import React from 'react';

type AlertProps = {
  message: string;
};

const AlertSuccess: React.FC<AlertProps> = ({ message }) => {
  return (
    <div
      className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
      role="alert"
      aria-live="assertive"
    >
      <strong className="font-bold">Success!</strong>
      <span className="block sm:inline ml-2">{message}</span>
    </div>
  );
};

export default AlertSuccess;
