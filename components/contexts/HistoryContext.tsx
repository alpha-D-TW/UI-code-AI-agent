import { createContext, ReactNode, useState, useEffect, useRef } from 'react';
import { HistoryWrap, History, HistoryItem } from "../components/history/history_types";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { Histories_Local_Storage_Key, getHistoriesList, setHistoiresList } from '../components/history/utils';

interface historyContextType {
    history: History;
    currentVersion: number | null;
    setCurrentVersion: (version: number | null) => void;
    addHistory: (
      generationType: string, 
      updateInstruction: string, 
      referenceImages: string[], 
      initText: string, 
      code: string,
      originMessage: string,
      isAdditive: boolean,
    ) => string;
    updateHistoryScreenshot: (img: string, version?: number) => void;
    updateHistoryCode: (img: string, version?: number) => void;
    resetHistory: () => void;
    regain: (history : History, id: string) => void ;
}

const initialValue = {
    history: [],
    currentVersion: null,
    setCurrentVersion: (version: number | null) => {},
    addHistory: (generationType: string, updateInstruction: string, referenceImages: string[], initText: string, code: string, originMessage:string ,isAdditive: boolean) => "",
    updateHistoryScreenshot: (img: string, version?: number) => {},
    updateHistoryCode: (img: string, version?: number) => {},
    resetHistory: () => {},
    regain: (history : History, id: string) => {}
}

export const HistoryContext = createContext<historyContextType>(initialValue);


export default function SettingProvider({ children }: { children: ReactNode }) {
    const [id, setId] = useState("");
    const [history , setHistory] = useState<History>(() => {
      if(typeof window !== 'undefined' && id) {
        const storedHistoriesList : HistoryWrap[] = getHistoriesList();
        const histories = storedHistoriesList.find( (stored: HistoryWrap) => stored.id === id);
        return histories ? histories.items : [];
      }
      return [];
    });

    const updateHistories = () => {
      if(typeof window === 'undefined') return;
      const storedHistories = getHistoriesList();
      const index = storedHistories.findIndex( (stored: HistoryWrap) => stored.id === id);
      storedHistories[index] = {id: id , items: history};
      setHistoiresList(storedHistories);
    }

    function addNewHistories() : string{
        let storedHistories = getHistoriesList();
        const newId = uuidv4();
        setId(newId);
        storedHistories = [...storedHistories, {id: newId, items: history}];
        setHistoiresList(storedHistories);
        return newId;
    }

    const resetHistories = () => {
      if(typeof window === 'undefined') return;
      localStorage.setItem(Histories_Local_Storage_Key, JSON.stringify([]));
    }

    useEffect(() => {
      const storedHistories = getHistoriesList();
      if(!storedHistories) {
        resetHistories();
      } 
      const historyExist = id && storedHistories.some( (stored: HistoryWrap) => stored.id === id);
      if(historyExist) {
        updateHistories();
      }
    }, [history])

    let [currentVersion, setCurrentVersionStatus] = useState<number | null>(null);

    function regain(history : History, id: string) {
      setId(id);
      setHistory(history);
      setCurrentVersionStatus(history? history.length - 1 : 0);
    }

    function addHistory (generationType: string, updateInstruction: string, referenceImages: string[], initText: string, code: string, originMessage: string, isAdditive: boolean) : string {
        if (generationType === "create") {
          let newId = ""
            if(!isAdditive) {
              newId = addNewHistories();
            }
            setHistory([
              {
                type: "ai_create",
                parentIndex: null,
                code,
                inputs: { 
                  image_url: referenceImages[0],
                  initText,
                  originMessage
                },
              },
            ]);
            setCurrentVersionStatus(0);
            return newId;
          } else {
            setHistory((prev) => {
              // Validate parent version
              if (currentVersion === null) {
                toast.error(
                  "No parent version set. Contact support or open a Github issue."
                );
                return prev;
              }
  
              const newHistory: History = [
                ...prev,
                {
                  type: "ai_edit",
                  parentIndex: currentVersion,
                  code,
                  inputs: {
                    prompt: updateInstruction,
                    originMessage,
                  },
                },
              ];
              setCurrentVersionStatus(newHistory.length - 1);
              return newHistory;
            });
        }
        return id;
    }
    const updateHistoryScreenshot = (img: string, version?: number) => {

      setHistory((prevState) => {
          const newHistory = [...prevState];
          const index = version || currentVersion || 0;
          if (index !== -1 && newHistory && newHistory[index] && !newHistory[index].isLock) {
            newHistory[index].screenshot = img;
            newHistory[index].isLock = true;
          }
          return newHistory;
        });
    }

    const updateHistoryCode = (code: string, version?: number) => {
      setHistory((prevState) => {
          const newHistory = [...prevState];
          const index = version || currentVersion || 0;
          if (index !== -1 && newHistory && newHistory[index]) {
            newHistory[index].code = code;
          }
          return newHistory;
        });
    }
   

    function setCurrentVersion(version: number | null) {
        currentVersion = version;
        setCurrentVersionStatus(version)
    }

    function resetHistory() {
      regain([], "");
      setCurrentVersionStatus(0);
    }

    return (
        <HistoryContext.Provider
          value={{
            history,
            currentVersion,
            setCurrentVersion,
            addHistory,
            updateHistoryScreenshot,
            resetHistory,
            updateHistoryCode,
            regain
          }}
        >
          {children}
        </HistoryContext.Provider>
    );
}