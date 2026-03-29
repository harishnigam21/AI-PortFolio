import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
export default function ReadmeViewer({ content }: { content: string }) {
  return (
    <article className="prose prose-invert prose-lg w-full pb-5 wrap-anywhere overflow-x-hidden">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ children }) => {
            const text = String(children);
            const id = text.toLowerCase().replace(/\s+/g, "-");
            return (
              <h1 className="text-4xl py-4 font-bold" id={id}>
                {children}
              </h1>
            );
          },
          h2: ({ children }) => {
            const text = String(children);
            const id = text.toLowerCase().replace(/\s+/g, "-");
            return (
              <h2 className="text-2xl py-4 font-medium" id={id}>
                {children}
              </h2>
            );
          },
          h3: ({ children }) => {
            const text = String(children);
            const id = text.toLowerCase().replace(/\s+/g, "-");
            return (
              <h3 className="text-xl font-medium" id={id}>
                {children}
              </h3>
            );
          },
          hr: () => {
            return <hr className="mt-6" />;
          },
          ul: ({ children }) => {
            const text = String(children);
            const id = text.toLowerCase().replace(/\s+/g, "-");
            return (
              <ul id={id} className="ml-4">
                {children}
              </ul>
            );
          },
          ol: ({ children }) => {
            const text = String(children);
            const id = text.toLowerCase().replace(/\s+/g, "-");
            return (
              <ol id={id} className="ml-4">
                {children}
              </ol>
            );
          },
          li: ({ children }) => {
            const text = String(children);
            const id = text.toLowerCase().replace(/\s+/g, "-");
            return <li id={id}>- {children}</li>;
          },
          p: ({ children }) => {
            const childArray = React.Children.toArray(children);

            // 🔥 remove text nodes (like "\n")
            const elements = childArray.filter(
              (child) => typeof child === "object",
            );

            const isImage = (child: any) => {
              return (
                child?.type === "img" || child?.props?.node?.tagName === "img"
              );
            };

            const allImages = elements.length > 0 && elements.every(isImage);

            if (allImages) {
              return (
                <div className="flex flex-wrap gap-4">
                  {elements.map((child, i) => (
                    <React.Fragment key={i}>{child}</React.Fragment>
                  ))}
                </div>
              );
            }

            return <p>{children}</p>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
