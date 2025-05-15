const ProgressIndicator = ({ status }) => {
  if (!status) return null;

  const statusText = {
    loading: "Processing audio...",
    success: "Transcription completed successfully",
    error: "Something went wrong",
  };

  const statusColor = {
    loading: "text-yellow-600",
    success: "text-green-600",
    error: "text-red-600",
  };

  return (
    <div
      className={`mt-4 text-center font-medium ${statusColor[status]} text-black`}
    >
      {statusText[status]}
    </div>
  );
};

export default ProgressIndicator;
