import { FC } from "react";
import { Label } from "../components/UI/Label";
import { Input } from "../components/UI/Input";

export const SignInPage: FC = (): JSX.Element => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center bg-[#272838] text-white bg-dot-black/[1] relative">
      <div className="w-[500px] p-8 bg-[#2E2F40] rounded-lg">
        <h2 className="text-center text-3xl text-[#05D397]">Sign In</h2>
        <div className="mt-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();

              console.log("sign in form submitted");
            }}
          >
            <div className="mt-5">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="Enter Email Address"
                type="email"
              />
            </div>
            <div className="mt-5">
              <Label htmlFor="twitterpassword">Password</Label>
              <Input
                id="twitterpassword"
                placeholder="Enter Password"
                type="twitterpassword"
              />
            </div>
            <div className="mt-5">
              <button
                className="flex items-center justify-center px-4 w-full text-black hover:text-white rounded-md h-10 font-medium shadow-input bg-[#05D397] transition-all ease-in-out duration-500 delay-75"
                type="submit"
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
