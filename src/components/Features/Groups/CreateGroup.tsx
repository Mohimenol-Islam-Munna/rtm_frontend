import { ChangeEvent, FC, useState } from "react";
import { Label } from "../../UI/Label";
import { Input } from "../../UI/Input";
import { useNavigate } from "react-router-dom";
import { groupCreateHandler } from "../../../api/apiHandlers";
import { toast } from "react-toastify";
import { SelectComponent } from "../../UI/Select";
import { ActionMeta, MultiValue } from "react-select";
import { useChatList } from "../../../hooks/useChatList";

export type CreateGroupInputStateType = {
  groupName: string;
  userList: { [kay: string]: any; value: string; label: string }[];
};

export const CreateGroup: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { chatList } = useChatList();
  console.log("🚀 ~ chatList:", chatList);

  const [createGroupInputState, setCreateGroupInputState] =
    useState<CreateGroupInputStateType>({
      groupName: "",
      userList: [],
    });

  const [groupState, setGroupState] = useState({
    isLoading: false,
    data: null,
    error: null,
  });

  const submitHandler = async () => {
    setGroupState({
      isLoading: true,
      data: null,
      error: null,
    });

    const data = {
      groupName: createGroupInputState.groupName,
      userList: createGroupInputState.userList.map(
        (item: any) => item?.value || ""
      ),
    };

    const res = await groupCreateHandler(data);

    setGroupState({
      isLoading: false,
      data: res.data,
      error: res.error,
    });

    if (!res.error) {
      setCreateGroupInputState({
        groupName: "",
        userList: [],
      });

      toast.success("Successfully group created!");

      navigate("/");
    } else {
      toast.error("Something wrong!");
    }
  };

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setCreateGroupInputState((prev) => {
      return {
        ...prev,
        [e.target?.name]: e.target?.value,
      };
    });
  };

  const multiSelectChangeHandler = (
    newValue: MultiValue<any>,
    actionMeta: ActionMeta<any>
  ) => {
    setCreateGroupInputState((prev) => {
      return {
        ...prev,
        userList: newValue ? [...newValue] : [],
      };
    });
  };

  return (
    <div className="w-full min-h-[100vh] flex justify-center items-start bg-[#272838] text-white bg-dot-black/[1] relative p-8">
      <div className="w-full p-8 bg-[#2E2F40] rounded-lg">
        <h2 className="text-3xl text-[#05D397]">Create Group</h2>
        <div className="mt-8">
          {!groupState.isLoading && groupState.error && (
            <h2 className="text-center my-8 py-4 text-base border-[3px] border-dashed border-[#272838] rounded-md text-red-400">
              Something wrong or group name may be exist.
            </h2>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitHandler();
            }}
          >
            <div className="mt-5">
              <Label htmlFor="groupName">Group Name</Label>
              <Input
                id="groupName"
                placeholder="Enter Group Name"
                type="text"
                name="groupName"
                value={createGroupInputState.groupName}
                onChange={changeHandler}
              />
            </div>
            <div className="mt-5">
              <Label htmlFor="password">Add Person</Label>
              <SelectComponent
                onChange={multiSelectChangeHandler}
                value={createGroupInputState.userList}
                isLoading={chatList.isLoading}
                options={
                  chatList.data
                    ? chatList.data.map((item: any) => ({
                        value: item?._id || "",
                        label: item?.userName || "",
                      }))
                    : []
                }
              />
            </div>
            <div className="mt-5 text-right">
              <button
                className={`px-4 text-black ${
                  !groupState.isLoading ? "hover:text-white" : "cursor-progress"
                } rounded-md h-10 font-medium shadow-input bg-[#05D397] transition-all ease-in-out duration-500 delay-75`}
                type="submit"
                disabled={groupState.isLoading}
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
