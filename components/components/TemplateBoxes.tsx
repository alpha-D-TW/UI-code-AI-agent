import { useContext } from "react";
import { SettingContext } from "../contexts/SettingContext";
import { GeneratedCodeConfig } from "@/components/types";
import { useRouter } from "next/router";
import templates from "../../templates/templates";
import { FaGithubSquare } from "react-icons/fa";

function TemplateBoxes() {
  const { settings, setSettings, setInitCreate } = useContext(SettingContext);
  const router = useRouter();

  return (
    <>
        {templates.list.map((template) => {
          return (
            <div
              onClick={() => {
                setSettings({
                  ...settings,
                  generatedCodeConfig: GeneratedCodeConfig.HTML_TAILWIND,
                });
                router.push(`/editor/${template.id}`);
              }}
              key={template.id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col hover:ring ring-black relative border"
            >
              <div className="flex-1">
                <div className="aspect-[1376/768]">
                  <img
                    className="w-full"
                    src={template.imageUrl}
                    alt={template.title}
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  {template.title}
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {template.description}
                </p>
              </div>
              {template.fromUrl && (
                <a
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="absolute right-2 top-2"
                  href={template.fromUrl}
                  target="_blank"
                >
                  <FaGithubSquare className="text-xl" />
                </a>
              )}
            </div>
          );
        })}
  </>
  );
}

export default TemplateBoxes;
