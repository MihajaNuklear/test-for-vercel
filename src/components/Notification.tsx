import { useState, useEffect } from 'react';

interface NotificationProps {
  errorMessage?: string;
  successMessage?: string;
}

const NotificationComponent: React.FC<NotificationProps> = ({
  errorMessage,
  successMessage,
}) => {
  const [showError, setShowError] = useState<boolean>(!!errorMessage);
  const [showSuccess, setShowSuccess] = useState<boolean>(!!successMessage);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <>
      {/* Error message */}
      {showError && errorMessage && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}

      {/* Success message */}
      {showSuccess && successMessage && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Success: </strong>
          <span className="block sm:inline">{successMessage}</span>
        </div>
      )}
    </>
  );
};

export default NotificationComponent;
