import { RxAvatar } from "react-icons/rx";

export const ChatBoardBody = () => {
  const messageCont = [
    {
      id: 1,
      partyA: {
        type: "PARTY_A",
        image: "",
        name: "munna",
        date: "10/09/23",
        message: ["hi", "kmn acho"],
      },
      partyB: {
        type: "PARTY_B",
        image: "",
        name: "tony",
        date: "10/09/23",
        message: ["hi", "kmn acho", "valo achi"],
      },
    },
    {
      id: 2,
      partyA: {
        type: "PARTY_A",
        image: "",
        name: "munna",
        date: "10/09/23",
        message: [
          "hi",
          "kmn acho",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        ],
      },
      partyB: {
        type: "PARTY_B",
        image: "",
        name: "tony",
        date: "10/09/23",
        message: ["hi", "kmn acho"],
      },
    },
    {
      id: 3,
      partyA: {
        type: "PARTY_A",
        image: "",
        name: "munna",
        date: "10/09/23",
        message: ["hi", "kmn acho"],
      },
      partyB: {
        type: "PARTY_B",
        image: "",
        name: "tony",
        date: "10/09/23",
        message: ["hi", "kmn acho"],
      },
    },
  ];

  return (
    <div className="w-full h-[calc(100%-120px)] overflow-y-auto">
      <div className="w-full min-h-full p-2 dark:bg-black dark:bg-dot-white/[1] bg-dot-black/[1] relative">
        <div>
          {messageCont.map((item: any) => (
            <div key={item.id}>
              <div className="my-4 flex p-4 justify-start">
                <div className="basis-full md:basis-1/2 lg:basis-1/3 flex">
                  <div className="w-[60px] h-[50px] flex justify-center">
                    <RxAvatar className="w-[50%] h-[50%] text-[#05D397]" />
                  </div>

                  <div className="basis-[calc(100%-60px)]">
                    <div>
                      {item.partyA.message.map(
                        (item: string, index: number) => (
                          <div className="relative group">
                            <p
                              className={`${
                                index === 0 ? "my-2 mt-0" : "my-2"
                              } bg-[#2E2F40] p-4  border-2 border-transparent rounded-xl group-hover:border-[#05D397] transition-all ease-in-out duration-500 delay-75 relative z-20`}
                            >
                              {item}
                            </p>
                            {index === 0 && (
                              <div
                                style={{
                                  clipPath:
                                    "polygon(42% 0, 49% 0, 63% 99%, 33% 100%)",
                                }}
                                className="absolute -left-[18px] top-[5px] w-[40px] h-[40px] bg-[#2E2F40] -rotate-[65deg] transition-all ease-in-out duration-500 delay-75 rounded-full z-10 group-hover:bg-[#05D397] pointer-events-auto"
                              ></div>
                            )}
                          </div>
                        )
                      )}
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <h4>{item.partyA.name}</h4>
                      <h4>{item.partyA.date}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-4 flex p-4 justify-end">
                <div className="basis-full md:basis-1/2 lg:basis-1/3 flex flex-row-reverse">
                  <div className="w-[60px] h-[50px] flex justify-center">
                    <RxAvatar className="w-[50%] h-[50%] text-[#05D397]" />
                  </div>

                  <div className="basis-[calc(100%-60px)]">
                    <div>
                      {item.partyB.message.map(
                        (item: string, index: number) => (
                          <div className="relative group">
                            <p
                              className={`${
                                index === 0 ? "my-2 mt-0" : "my-2"
                              } bg-[#2E2F40] p-4  border-2 border-transparent rounded-lg group-hover:border-[#05D397] transition-all ease-in-out duration-500 delay-75 relative z-20`}
                            >
                              {item}
                            </p>
                            {index === 0 && (
                              <div
                                style={{
                                  clipPath:
                                    "polygon(42% 0, 49% 0, 63% 99%, 33% 100%)",
                                }}
                                className="absolute -right-[18px] top-[5px] w-[40px] h-[40px] bg-[#2E2F40] rotate-[65deg] transition-all ease-in-out duration-500 delay-75 rounded-full z-10 group-hover:bg-[#05D397] pointer-events-auto"
                              ></div>
                            )}
                          </div>
                        )
                      )}
                    </div>
                    <div className="w-full flex justify-between items-center flex-row-reverse">
                      <h4>{item.partyB.name}</h4>
                      <h4>{item.partyB.date}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
