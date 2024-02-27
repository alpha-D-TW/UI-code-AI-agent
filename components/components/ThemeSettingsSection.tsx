import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "./ui/select";
import { ThemeCodeConfig } from "../types";

const CompanyThemeList = [
  {
    label: ThemeCodeConfig.DEFAULT_THEME,
    value: "Default Theme",
  },
  {
    label: ThemeCodeConfig.THEME_1,
    value: "Safe Insure Company",
  },
  {
    label: ThemeCodeConfig.THEME_2,
    value: "Easy Protect Company",
  },
  {
    label: ThemeCodeConfig.THEME_3,
    value: "Secure Company",
  },
];

interface Props {
  generatedThemeConfig: ThemeCodeConfig;
  setGeneratedThemeConfig: (config: ThemeCodeConfig) => void;
  shouldDisableUpdates?: boolean;
}

function ThemeSettingsSection({
  generatedThemeConfig,
  setGeneratedThemeConfig,
  shouldDisableUpdates = false,
}: Props) {
  return (
    <div className="flex flex-col gap-y-2 justify-between text-sm">
      <div className="w-[200px]">
        <Select
          value={generatedThemeConfig}
          onValueChange={(value: string) =>
            setGeneratedThemeConfig(value as ThemeCodeConfig)
          }
          defaultValue={generatedThemeConfig}
          disabled={shouldDisableUpdates}
        >
          <SelectTrigger className="col-span-2" id="output-settings-js">
            <span className="font-semibold">
              {
                CompanyThemeList.filter((item) => {
                  return item.label === generatedThemeConfig ? item : "";
                })[0].value
              }
            </span>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {CompanyThemeList.map((item) => {
                return (
                  <SelectItem value={item.label}>
                    <span className="font-semibold">{item.value}</span>
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default ThemeSettingsSection;
