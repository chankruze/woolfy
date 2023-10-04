import { CodeWrapper } from "./code-wrapper";

export default function LandingPageLayout() {
  return (
    <div className="h-full w-full space-y-4 bg-slate-100 p-4 text-2xl">
      <p className="font-bold italic text-red-500">📓 Note:</p>
      <p>
        Start editing
        <CodeWrapper>_landing-page._index/route.tsx</CodeWrapper>
      </p>
      <p>
        Colocate all the components that are required in landing page, in
        <CodeWrapper>_landing-page._index/route.tsx</CodeWrapper>
      </p>
    </div>
  );
}
