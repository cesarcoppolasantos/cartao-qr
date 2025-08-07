// src/app/login/page.tsx
import LoginForm from "@/app/components/login-form";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 mx-auto sm:p-20">
      <LoginForm />
    </div>
  );
}
