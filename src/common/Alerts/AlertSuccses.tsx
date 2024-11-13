import { useState, useEffect, FC } from 'react';

const AlertModal: FC<{ message: string }> = ({ message }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Close the modal after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 3000); // Adjusted to 3 seconds to match the behavior in the previous code

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-6 rounded shadow-lg z-10 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Confirmation
            </h2>
            <p className="mb-4 text-gray-700">{message}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AlertModal;
