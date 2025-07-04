import GeneralWrapper from "@/components/GeneralWrapper";

export default function Home() {
  return (
    <GeneralWrapper>
      <h1>Hello World!</h1>
      <code>
        This is just a starter template, made using Next.js app dir + Typescript
        + Tailwind CSS (with Daisy UI).
      </code>
      <div className="mt-12 flex w-full items-center justify-center">
        <a
          href="https://github.com/new?template_name=next15-starter&template_owner=yehezkielgunawan"
          target="_blank"
          className="btn"
          rel="noreferrer"
        >
          Generate Project using this template
        </a>
      </div>
    </GeneralWrapper>
  );
}
