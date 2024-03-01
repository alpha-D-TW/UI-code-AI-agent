import { BsGithub } from "react-icons/bs";
import SettingsDialog from "./SettingsDialog";
import { SettingContext } from "../contexts/SettingContext";
import { useContext, useState } from "react";
import OutputSettingsSection from "./OutputSettingsSection";
import { GeneratedCodeConfig, ThemeCodeConfig } from "../types";
import { MdOutlineHelp } from "react-icons/md";
import { SiBuymeacoffee } from "react-icons/si";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import OnboardingNote from "./OnboardingNote";
import ThemeSettingsSection from "./ThemeSettingsSection";

export default () => {
  const { settings, setSettings } = useContext(SettingContext);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  return (
    <header className="flex items-center p-4 justify-between relative">
      <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M9.825.638c.183-.836 1.374-.841 1.565-.006l.008.039l.018.078c.22.934.976 1.647 1.922 1.812c.872.152.872 1.404 0 1.556a2.396 2.396 0 0 0-1.925 1.827l-.024.102c-.19.835-1.38.83-1.564-.006l-.019-.088a2.38 2.38 0 0 0-1.918-1.837c-.87-.151-.87-1.401 0-1.552A2.38 2.38 0 0 0 9.804.736L9.818.67l.007-.033Zm.727 7.118a1.89 1.89 0 0 1-1.275-.529a.745.745 0 0 0-.194.186c-.45.596-.977 1.205-1.573 1.8c-.452.452-.91.863-1.362 1.23c-.452-.367-.91-.778-1.362-1.23a17.81 17.81 0 0 1-1.23-1.361c.367-.453.779-.91 1.23-1.362a17.35 17.35 0 0 1 1.8-1.573a.746.746 0 0 0 .172-.172a1.87 1.87 0 0 1-.61-1.365c-.981-.687-1.951-1.196-2.817-1.461c-.938-.287-2.038-.364-2.759.356c-.467.468-.594 1.104-.558 1.709c.036.606.239 1.272.546 1.948a12.2 12.2 0 0 0 1.117 1.92A12.2 12.2 0 0 0 .56 9.77c-.307.676-.51 1.342-.546 1.948c-.036.605.09 1.241.558 1.709c.468.467 1.104.594 1.709.558c.605-.037 1.272-.239 1.948-.546c.61-.277 1.259-.655 1.92-1.117c.66.462 1.308.84 1.919 1.117c.675.307 1.342.51 1.948.546c.605.036 1.24-.091 1.708-.559c.721-.72.644-1.82.357-2.758c-.274-.894-.807-1.9-1.529-2.913Zm-7.66-4.403c.576.176 1.263.51 2.007.994a19.52 19.52 0 0 0-2.256 2.256a10.016 10.016 0 0 1-.718-1.292c-.263-.58-.392-1.06-.414-1.417c-.021-.359.067-.503.122-.558c.09-.09.423-.238 1.26.017Zm-.967 7.039c.184-.405.425-.84.718-1.292A19.525 19.525 0 0 0 4.9 11.356a10.02 10.02 0 0 1-1.291.719c-.58.263-1.06.392-1.417.414c-.36.021-.503-.067-.558-.122c-.055-.055-.143-.2-.122-.558c.022-.357.15-.837.414-1.417Zm6.763 1.683a9.923 9.923 0 0 1-1.29-.719A19.521 19.521 0 0 0 9.652 9.1c.483.745.817 1.432.993 2.008c.256.836.108 1.169.018 1.259c-.056.055-.2.143-.558.121c-.358-.02-.838-.15-1.418-.413Zm-3.54-4.223a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"/></svg>
      </div>
      <div className="flex items-center">
        <div className="flex-1">
          <ul className="hidden md:flex float-right text-lg text-slate-700 items-center">
            {/* <li className="mx-2">
              <OutputSettingsSection
                generatedCodeConfig={settings.generatedCodeConfig}
                setGeneratedCodeConfig={(config: GeneratedCodeConfig) =>
                  setSettings({
                    ...settings,
                    generatedCodeConfig: config,
                  })
                }
              />
            </li> */}
            <li className="mx-2">
              <ThemeSettingsSection
                generatedThemeConfig={settings.themeConfig}
                setGeneratedThemeConfig={(config: ThemeCodeConfig) =>
                  setSettings({
                    ...settings,
                    themeConfig: config,
                  })
                }
              />
            </li>
            {/* <li>
              <span className="hover:bg-slate-200 rounded-sm p-2 relative flex justify-center items-center">
                <OnboardingNote />
              </span>
            </li> */}
            <li className="mx-2">
              <span>
                <SettingsDialog
                  settings={settings}
                  setSettings={setSettings}
                  openDialog={openDialog}
                  setOpenDialog={setOpenDialog}
                />
              </span>
            </li>
            {/* <li className="mr-2 hover:bg-slate-200 rounded-sm p-2">
                <a
                  href="https://github.com/sparrow-js/ant-codeAI/blob/main/README.md"
                  target="_blank"
                >
                  <MdOutlineHelp className="text-xl" />
                </a>
            </li> */}
            {/* <li className="mx-2">
              <a
                href="https://github.com/alpha-D-TW/UI-code-AI-agent"
                target="_blank"
                className="hover:text-[#2752f4]"
              >
                <BsGithub className="text-xl" />
              </a>
            </li> */}
            {/* <li className="mx-2">
              <a
                href="https://www.buymeacoffee.com/sparrowwhtl"
                target="_blank"
              >
                <SiBuymeacoffee className="text-xl" />
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </header>
  );
};
