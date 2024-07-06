
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function RenderCode() {
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  const combineCode = `
    <html>
      <style>${fullCode.css}</style>
      <body>${fullCode.html}</body>
      <script>${fullCode.javascript}</script>
    </html>
  `;

  const iframeCode = `data:text/html;charset=utf-8,${encodeURIComponent(combineCode )}`
  return (
    <div className="bg-white border-2 h-[calc(100dvh-60px)]">
      <iframe className="w-full h-full" src={iframeCode} />
    </div>
  );
}