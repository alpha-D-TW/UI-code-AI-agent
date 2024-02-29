import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { FaGithubSquare } from "react-icons/fa";
import { HistoryContext } from "../contexts/HistoryContext";
import { HistoryWrap, History, HistoryItem, AiEditInputs } from "./history/history_types";
import { Histories_Local_Storage_Key, findHistoryById } from "./history/utils";

function HistoryBoxes() {
  const [histories] = useState<HistoryWrap[]>(() => {
      if(typeof window !== 'undefined') {
        const storedHistories = localStorage.getItem(Histories_Local_Storage_Key);
        return storedHistories ? JSON.parse(storedHistories) : [];
      }
      return [];
    });
  const router = useRouter();

  const formatDescription = (id: string) => {
    const historyItems : HistoryItem[] = findHistoryById(id);
    const partOfPrompts = historyItems.filter(item => item.type === "ai_edit").map(item => (item.inputs as AiEditInputs).prompt).slice(0,2);
    return <>
      {
        partOfPrompts.map((prompt, index) => {
          return (
            <p key={index}>{prompt}</p>
          )
        })
      }
    </>

  }

  return (
    <>
        {histories.length !== 0 && histories.map((historyWrap) => {
          return (
            <div
              onClick={() => {
                router.push(`/editor/history?id=${historyWrap.id}`);
              }}
              key={historyWrap.id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col hover:ring ring-black relative border"
            >
              <div className="flex-1">
                <h3 className="mt-4 text-sm text-gray-700">
                  {historyWrap.items[0]?.inputs.originMessage}  
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {formatDescription(historyWrap.id)}
                </p>
              </div>
            </div>
          );
        })}
  </>
  );
}

export default HistoryBoxes;
