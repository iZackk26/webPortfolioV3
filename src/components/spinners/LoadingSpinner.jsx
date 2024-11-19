import { Spinner } from 'flowbite-react';

export default function LoadingSpinner() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
          <div className="text-center">
            <Spinner
              size="xl"
              light={true}
              className="mb-4"
            />
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Loading...
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Please wait while we fetch your data.
            </p>
          </div>
        </div>
      );
}
