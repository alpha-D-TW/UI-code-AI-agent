import { History, HistoryItem, HistoryWrap } from "./history_types";


export function extractHistoryTree(
  history: History,
  version: number
): string[] {
  const flatHistory: string[] = [];

  let currentIndex: number | null = version;
  while (currentIndex !== null) {
    const item: HistoryItem = history[currentIndex];

    if (item) {
      if (item.type === "ai_create") {
        // Don't include the image for ai_create
        flatHistory.unshift(item.code);
      } else {
        flatHistory.unshift(item.code);
        flatHistory.unshift(item.inputs.prompt);
      }

      // Move to the parent of the current item
      currentIndex = item.parentIndex;
    } else {
      // TODO: Throw an exception here?
      // Break the loop if the item is not found (should not happen in a well-formed history)
      break;
    }
  }

  return flatHistory;
}

export const Histories_Local_Storage_Key = 'histories'

export const getHistoriesList = () : HistoryWrap[] => {
  if(typeof window === 'undefined') return [];
  const storedHistories = localStorage.getItem(Histories_Local_Storage_Key);
  return storedHistories ? JSON.parse(storedHistories) : [];
}

export const setHistoiresList = (historiesList : HistoryWrap[]) => {
  if(typeof window === 'undefined') return;
  localStorage.setItem(Histories_Local_Storage_Key, JSON.stringify(historiesList));
}

export const findHistoryById = (id: string) : History => {
  const histories : HistoryWrap[] = getHistoriesList();
  const historyWrap = histories.find((historyWrap : HistoryWrap) => historyWrap.id === id);
  if(historyWrap === undefined) throw new Error();
  return historyWrap.items;
}
const t = {}
export default t;