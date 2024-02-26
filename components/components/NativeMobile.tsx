import { useEffect, useRef } from 'react';
import classNames from "classnames";
import useThrottle from "../hooks/useThrottle";
import files from './rnExample';
import { useDebounce } from 'ahooks';
import { AppState } from "../types";


interface Props {
  code: string;
  appState: AppState
}

function NativePreview({ code, appState }: Props) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const debounceCode = useDebounce(code, {
    wait: 2000
  });

  useEffect(() => {
    if (!code) return;
    if (appState === AppState.CODE_READY) {
      files.files['src/App.js'].content = code;
      fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(files)
        })
      .then(x => x.json())
      .then(data => {
          if (iframeRef.current) iframeRef.current.src = `https://codesandbox.io/embed/${data.sandbox_id}?codemirror=0&highlights=11,12,13,14&moduleview=0&hidedevtools=1`;
      });
    }
  }, [appState])

  return (
    <div className="flex justify-center mx-2">
      <iframe
        id={`preview-native`}
        ref={iframeRef}
        title="Preview native"
        className={classNames(
          "border-[4px] border-black rounded-[10px] shadow-lg w-[400px] h-[700px]",
          "transform scale-[0.9] origin-top",
        )}
      ></iframe>
    </div>
  );
}

export default NativePreview;