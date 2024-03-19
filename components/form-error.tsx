interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="p-3 bg-red-500/15 rounded-md flex items-center gap-x-2 text-sm text-red-500">
      <p>{message}</p>
    </div>
  );
};
