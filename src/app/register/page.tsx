// src/app/login/page.tsx
import RegisterForm from "@/app/components/register-form";

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 mx-auto sm:p-20">
      <RegisterForm />
    </div>
  );
}
