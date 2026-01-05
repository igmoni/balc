import React from "react";
import Image from "next/image";
import CodeCopyButton from "@/components/blogs/CodeCopyButton";
import EnquiryForm from "../common/EnquiryForm";

const CourseComponents = {
  img: ({ src, alt, ...props }) => (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={400}
      className="rounded-lg"
      {...props}
    />
  ),

  h1: ({ children, ...props }) => (
    <h1 className="mb-6 text-4xl font-bold" {...props}>
      {children}
    </h1>
  ),

  h2: ({ children, ...props }) => (
    <h2 className="mb-4 mt-8 text-3xl font-semibold" {...props}>
      {children}
    </h2>
  ),

  h3: ({ children, ...props }) => (
    <h3 className="mb-3 mt-6 text-2xl font-medium" {...props}>
      {children}
    </h3>
  ),

  p: ({ children, ...props }) => (
    <p className="mb-4 leading-7 text-muted-foreground" {...props}>
      {children}
    </p>
  ),

  ul: ({ children, ...props }) => (
    <ul className="mb-4 ml-6 list-disc space-y-2" {...props}>
      {children}
    </ul>
  ),

  ol: ({ children, ...props }) => (
    <ol className="mb-4 ml-6 list-decimal space-y-2" {...props}>
      {children}
    </ol>
  ),

  li: ({ children, ...props }) => (
    <li className="leading-7 text-muted-foreground" {...props}>
      {children}
    </li>
  ),

  pre: ({ children, ...props }) => {
    const getTextContent = (node) => {
      if (typeof node === "string" || typeof node === "number") {
        return String(node);
      }
      if (
        React.isValidElement(node) &&
        node.props &&
        typeof node.props === "object"
      ) {
        return getTextContent(node.props.children);
      }
      if (Array.isArray(node)) {
        return node.map(getTextContent).join("");
      }
      return "";
    };

    const codeText = getTextContent(children);

    return (
      <div className="group relative mb-4">
        <pre
          className="overflow-x-auto rounded-lg border bg-muted/30 p-4 text-sm [&>code]:bg-transparent [&>code]:p-0"
          {...props}
        >
          {children}
        </pre>
        <CodeCopyButton code={codeText} />
      </div>
    );
  },

  blockquote: ({ children, ...props }) => (
    <blockquote
      className="mb-4 border-l-4 border-primary pl-4 italic text-muted-foreground"
      {...props}
    >
      {children}
    </blockquote>
  ),

  Card: ({ title, desc }) => (
    <div className="px-5 bg-muted rounded-lg flex flex-col gap-3 py-2.5">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm">{desc}</p>
    </div>
  ),
  EnquiryForm
};

export default CourseComponents;
