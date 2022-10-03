import { useForm } from "react-hook-form";

interface InputProps {
  label?: string;
  password?: string;
  error?: string;
}

type InputAccess = {
  login: string;
  password: string;
};

export function Input({ label = "Login", password, error }: InputProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputAccess>();
  return (
    <div className="flex flex-col mb-5">
      <label htmlFor="">{label}</label>
      <input type={password} className="foceus " />
      <span className="text-xs text-red-500">{}</span>
    </div>
  );
}
