import { useState, useRef, useContext, useMemo, useEffect } from "react";
import Header from "../components/components/Header";
import ChatInput from "../components/components/chatInput";
import { SettingContext } from "../components/contexts/SettingContext";
import { UploadFileContext } from "../components/contexts/UploadFileContext";
import { useRouter } from "next/router";
import classNames from "classnames";
import TemplateBoxes from "@/components/components/TemplateBoxes";
import HistoryBoxes from "@/components/components/HistoryBoxes";

import dynamic from "next/dynamic";
import TemplatePanel from "@/components/components/TemplatePanel";

const Whiteboard = dynamic(
  async () => await import("../components//components/Whiteboard"),
  {
    ssr: false,
  }
);

// Whiteboard

const baseStyle = {
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {};

const acceptStyle = {
  borderWidth: 2,
  borderRadius: 2,
  borderStyle: "dashed",
  borderColor: "#00e676",
};

const rejectStyle = {
  borderWidth: 2,
  borderRadius: 2,
  borderStyle: "dashed",
  borderColor: "#ff1744",
};

export default function Dashboard() {
  const [ tab, setTab] = useState("Templates");
  const { settings, setSettings, setInitCreate } = useContext(SettingContext);
  const {
    getRootProps,
    isDragAccept,
    isFocused,
    isDragReject,
    setUploadComplete,
    setDataUrls,
    open,
  } = useContext(UploadFileContext);
  const [openWhiteboard, setOpenWhiteboard] = useState(false);
  const [showAnim, setShowAnim] = useState<boolean>(false);
  const ref = useRef(null);
  const router = useRouter();
  useEffect(() => {
    setUploadComplete(() => {
      setInitCreate(true);
      router.push("/editor/create");
    });
  }, []);

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch("/editor/create");
  }, [router]);

  return (
    <div {...getRootProps({})} className="dark:bg-black dark:text-white h-full">
      <div className="fixed w-full bg-slate-50 z-20 top-0">
        <Header />
      </div>
      <main className="pb-10">
        {/* <div className='fixed right-0 top-20 w-[115px] flex flex-col items-center  justify-center py-6 gap-12'>
                    <div
                        onClick={open}
                        className='cursor-pointer before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block px-2'>
                        <span className='relative text-white'>🔥screenshot</span>
                    </div>
                    <div
                        onClick={() => {
                            setOpenWhiteboard(true);
                        }}
                        className='cursor-pointer before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-500 relative inline-block px-4'>
                        <span className='relative text-white'>whiteboard</span>
                    </div>
                    <div 
                        onClick={() => {
                            setShowAnim(true);
                            setTimeout(() => {
                                setShowAnim(false);
                            }, 800)
                        }}
                        className='cursor-pointer before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-cyan-500 relative inline-block px-9'
                        >
                        <span className='relative text-white'>ideas</span>
                    </div>
                </div> */}
        <div className="w-full bg-white dark:bg-gray-800 border-t dark:border-t-gray-600 flex-col flex items-center justify-between p-3 ">
          {/* <div className="flex flex-col w-full items-center px-6"></div> */}
          <ChatInput
            openWhiteboard={() => {
              setOpenWhiteboard(true);
            }}
            showAnim={showAnim}
          />
          {/* className={classNames(
                        "fixed w-full h-full top-0 left-0 z-50",
                        {
                        'hidden': !openWhiteboard,
                        }
                    )} */}
          {/* <p 
                        className={classNames(
                            "mt-20 flex justify-center items-center p-4 rounded border-2 ",
                            {   'border-white': !isDragAccept,
                                'border-dashed border-blue-600': isDragAccept,
                            }
                        )}
                    >
                        <span className='mr-2'>
                        <svg className="icon text-blue-600 w-[35px] h-[35px] fill-current" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5831"><path d="M597.333333 256h85.333334v85.333333h213.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v320L682.666667 554.666667l1.536 343.978666 94.848-91.733333L855.082667 938.666667H384a42.666667 42.666667 0 0 1-42.666667-42.666667v-213.333333H256v-85.333334h85.333333V384a42.666667 42.666667 0 0 1 42.666667-42.666667h213.333333V256z m341.333334 483.754667V896a42.666667 42.666667 0 0 1-2.048 13.098667l-83.626667-144.810667L938.666667 739.754667zM170.666667 597.333333v85.333334H85.333333v-85.333334h85.333334z m0-170.666666v85.333333H85.333333v-85.333333h85.333334z m0-170.666667v85.333333H85.333333V256h85.333334z m0-170.666667v85.333334H85.333333V85.333333h85.333334z m170.666666 0v85.333334H256V85.333333h85.333333z m170.666667 0v85.333334h-85.333333V85.333333h85.333333z m170.666667 0v85.333334h-85.333334V85.333333h85.333334z" p-id="5832"></path></svg>
                        </span>
                        Support Drag & drop a screenshot
                    </p> */}
        </div>
        {/* { IS_RUNNING_ON_CLOUD &&
                    !(settings.openAiApiKey) && settings.init && (
                    <div className="fixed left-[20px] bottom-[20px] z-[49]">
                        <OnboardingNote />
                    </div>
                    )
                } */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <h1 className={tab === "Templates" ? "text-2xl font-bold" : "text-2xl"} onClick={() => setTab("Templates")}>Templates</h1>
            <h1 className={tab === "History" ? "text-2xl font-bold" : "text-2xl"} onClick={() => setTab("History")}>History</h1>
            {/* <nav className="hidden md:flex space-x-10">
                            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Prompts
                            </a>
                        </nav> */}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {
              tab === "Templates" &&
              <>
                <TemplateBoxes></TemplateBoxes>
                <TemplatePanel
                  key={"TemplatePanel"}
                  settings={settings}
                  setSettings={setSettings}
                />
              </>
            }
            {
              tab === "History" && <HistoryBoxes></HistoryBoxes>
            }
          </div>
        </div>
        {/* <div className="mt-[50px] w-[100%] p-2">
          <p className="text-slate-300 text-center">
            © Copyright{" "}
            <a
              className="text-sky-400 hover:text-sky-600"
              href="https://www.thoughtworks.com/"
            >
              thoughtworks
            </a>{" "}
            All rights reserved.
          </p>
        </div> */}
      </main>

      <div
        className={classNames("fixed w-full h-full top-0 left-0 z-50", {
          hidden: !openWhiteboard,
        })}
      >
        <Whiteboard
          doCreate={(urls: string[]) => {
            setOpenWhiteboard(false);
            setDataUrls(urls);
            setInitCreate(true);
            router.push("/editor/create");
          }}
          closeWhiteboard={() => {
            setOpenWhiteboard(false);
          }}
        />
      </div>
    </div>
  );
}
