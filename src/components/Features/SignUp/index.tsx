import { ChangeEvent, FC, useState } from "react";
import { Label } from "../../UI/Label";
import { Input } from "../../UI/Input";
import { useNavigate } from "react-router-dom";
import { signUpHandler } from "../../../api/apiHandlers";
import { toast } from "react-toastify";

export const SignUp: FC = (): JSX.Element => {
  const navigate = useNavigate();

  const [signUpInputState, setSignUpInputState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [signUpState, setSignUpState] = useState({
    isLoading: false,
    data: null,
    error: null,
  });

  const submitHandler = async () => {
    setSignUpState({
      isLoading: true,
      data: null,
      error: null,
    });

    const res = await signUpHandler(signUpInputState);

    setSignUpState({
      isLoading: false,
      data: res.data,
      error: res.error,
    });

    if (!res.error) {
      setSignUpInputState({
        username: "",
        email: "",
        password: "",
      });

      toast.success("Sign up successfully!");

      navigate("/sign-in");
    } else {
      toast.error("Something wrong!");
    }
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpInputState((prev) => {
      return {
        ...prev,
        [e.target?.name]: e.target?.value,
      };
    });
  };

  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center bg-[#272838] text-white  dark:bg-black dark:bg-dot-white/[1] bg-dot-black/[1] relative">
      <div className="w-[500px] p-8 bg-[#2E2F40] rounded-lg">
        <h2 className="text-center text-3xl text-[#05D397]">Sign Up</h2>
        <div className="mt-4">
          {!signUpState.isLoading && signUpState.error && (
            <h2 className="text-center my-8 py-4 text-base border-[3px] border-dashed border-[#272838] rounded-md text-red-400">
              User name or password may be exist.
            </h2>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitHandler();
            }}
          >
            <div className="mt-5">
              <Label htmlFor="username">User Name</Label>
              <Input
                id="username"
                placeholder="Enter User Name"
                type="text"
                name="username"
                required={true}
                value={signUpInputState.username}
                onChange={changeHandler}
              />
            </div>
            <div className="mt-5">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="Enter Email Address"
                type="email"
                name="email"
                required={true}
                value={signUpInputState.email}
                onChange={changeHandler}
              />
            </div>
            <div className="mt-5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="Enter Password"
                type="password"
                name="password"
                required={true}
                value={signUpInputState.password}
                onChange={changeHandler}
              />
            </div>
            <div className="mt-5">
              <button
                className={`flex items-center justify-center px-4 w-full text-black ${
                  !signUpState.isLoading
                    ? "hover:text-white"
                    : "cursor-progress"
                } rounded-md h-10 font-medium shadow-input bg-[#05D397] transition-all ease-in-out duration-500 delay-75`}
                type="submit"
                disabled={signUpState.isLoading}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
