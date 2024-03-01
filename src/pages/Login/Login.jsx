import { CardTitle, CardDescription, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button, buttonVariants } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { signInFailure, signInStart, signInSuccess } from "@/redux/user/userSlice"
import toast from "react-hot-toast"

function Login() {
  const [mobile, setMobile] = useState("");
  const [pin, setPin] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ mobile, pin }),
          credentials: "include",
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      console.error("Fetch error:", error.message);
      dispatch(signInFailure(error.message));
    }
  }

  return (
    <>
    <div className="md:hidden">
        <img
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <img
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <a
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </a>
        <div className="relative flex-col hidden h-full p-10 text-white bg-muted dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 mr-2"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Acme Inc
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Syed Nazmul Hossain</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="flex flex-col justify-center w-full mx-auto space-y-6 lg:max-w-lg">
          <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-center">
                    Sign in
                  </CardTitle>
                  <CardDescription className="text-center">
                    Enter your number and passkey || pin to login
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="number">Number</Label>
                    <Input onChange={(e) => setMobile(e.target.value)} id="mobile" type="number" placeholder="Enter your number" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Pin</Label>
                    <Input onChange={(e) => setPin(e.target.value)} id="pin" type="password" placeholder="Enter your pin" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button type="submit" className="w-full">Login</Button>
                  <p className="mt-2 text-xs text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-600 hover:underline">
                      Sign up
                    </Link>
                  </p>
                </CardFooter>
              </Card>
              </form>
            

            <p className="px-8 text-sm text-center text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <a
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;