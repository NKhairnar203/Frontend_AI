
import { LoginForm } from "@/components/login-form";

const Login = () => {
  return (
    <div className="flex min-h-fit flex-col items-center justify-center bg-muted p-2 ">
      <div className="w-full h-fit max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
