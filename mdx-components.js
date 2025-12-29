import Image from "next/image";

export function useMDXComponents(components) {
  return {
    h1: ({ children }) => (
      <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-10 mb-4">
        {children}
      </h2>
    ),
    img: (props) => (
      <Image
        {...props}
        sizes="100vw"
        className="w-full h-auto rounded-lg"
      />
    ),
    ...components,
  };
}
