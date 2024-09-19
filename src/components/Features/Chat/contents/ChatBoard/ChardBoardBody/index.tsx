import { RxAvatar } from "react-icons/rx";
import { ApiDataStateType } from "../../../../../../types/ApiDataStateType";
import { FC } from "react";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";

type Props = {
  messageList: ApiDataStateType;
  combineMessageState: any;
};

export const ChatBoardBody: FC<Props> = ({
  messageList,
  combineMessageState,
}): JSX.Element => {
  const { isLoading, error } = messageList;

  const { id } = useParams();

  return (
    <div
      id="chatBoardArea"
      className="w-full min-h-full p-2 dark:bg-black dark:bg-dot-white/[1] bg-dot-black/[1] relative"
    >
      {isLoading && <h4 className="text-center mt-5">Loading...</h4>}
      {!isLoading && error && (
        <h4 className="text-center mt-5 text-red-400">
          Cant fetch previous data
        </h4>
      )}
      <div>
        {!isLoading &&
          combineMessageState &&
          combineMessageState.map((item: any) => (
            <div key={item.id}>
              {item?.id === id ? (
                <div className="my-4 flex p-4 justify-start">
                  <div className="basis-full md:basis-1/2 lg:basis-1/3 flex">
                    <div className="w-[60px] h-[50px] flex justify-center">
                      <RxAvatar className="w-[50%] h-[50%] text-[#05D397]" />
                    </div>

                    <div className="basis-[calc(100%-60px)]">
                      <div>
                        <div className="relative group">
                          <p
                            className={`
                            my-2 mt-0 bg-[#2E2F40] p-4  border-2 border-transparent rounded-xl group-hover:border-[#05D397] transition-all ease-in-out duration-500 delay-75 relative z-20`}
                          >
                            {item.message}
                          </p>

                          <div
                            style={{
                              clipPath:
                                "polygon(42% 0, 49% 0, 63% 99%, 33% 100%)",
                            }}
                            className="absolute -left-[18px] top-[5px] w-[40px] h-[40px] bg-[#2E2F40] -rotate-[65deg] transition-all ease-in-out duration-500 delay-75 rounded-full z-10 group-hover:bg-[#05D397] pointer-events-auto"
                          ></div>
                        </div>
                      </div>
                      <div className="w-full flex justify-between items-center text-xs">
                        <h4>{item.user.userName}</h4>
                        <h4>{dayjs(item.date).format("dd/mm/yyyy")}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="my-4 flex p-4 justify-end">
                  <div className="basis-full md:basis-1/2 lg:basis-1/3 flex flex-row-reverse">
                    <div className="w-[60px] h-[50px] flex justify-center">
                      <RxAvatar className="w-[50%] h-[50%] text-[#05D397]" />
                    </div>

                    <div className="basis-[calc(100%-60px)]">
                      <div>
                        <div className="relative group">
                          <p
                            className={`my-2 mt-0 bg-[#2E2F40] p-4  border-2 border-transparent rounded-lg group-hover:border-[#05D397] transition-all ease-in-out duration-500 delay-75 relative z-20`}
                          >
                            {item.message}
                          </p>

                          <div
                            style={{
                              clipPath:
                                "polygon(42% 0, 49% 0, 63% 99%, 33% 100%)",
                            }}
                            className="absolute -right-[18px] top-[5px] w-[40px] h-[40px] bg-[#2E2F40] rotate-[65deg] transition-all ease-in-out duration-500 delay-75 rounded-full z-10 group-hover:bg-[#05D397] pointer-events-auto"
                          ></div>
                        </div>
                      </div>
                      <div className="w-full flex justify-between items-center flex-row-reverse text-xs">
                        <h4>{item.userName}</h4>
                        <h4>{dayjs(item.date).format("dd/yy/yyyy")}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};
