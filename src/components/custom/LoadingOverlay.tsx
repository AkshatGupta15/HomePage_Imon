const LoadingOverlay = () => (
  <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
  </div>
);

export default LoadingOverlay;
