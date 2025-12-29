import Image from "next/image";
import Link from "next/link";
import Head from "./Head";

/* ======================================================
   TYPOGRAPHY
====================================================== */

// const H1 = (props) => (
//   <h1
//     className="mt-12 mb-6 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
//     {...props}
//   />
// );

const H1 = ({children}) => (
    <h1
      style={{ color: "red", border: "5px solid red" }}
      {...props}
    >MDX h1 props -{children}</h1>
  );
  

const H2 = (props) => (
  <h2
    className="mt-10 mb-4 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
    {...props}
  />
);

const H3 = (props) => (
  <h3
    className="mt-8 mb-3 text-2xl font-semibold text-gray-900 dark:text-gray-100"
    {...props}
  />
);

const H4 = (props) => (
  <h4
    className="mt-6 mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100"
    {...props}
  />
);

const P = (props) => (
  <p
    className="my-5 text-lg leading-8 text-gray-700 dark:text-gray-300"
    {...props}
  />
);

/* ======================================================
   LISTS
====================================================== */

const Ul = (props) => (
  <ul className="my-6 list-disc pl-6 space-y-3 text-lg" {...props} />
);

const Ol = (props) => (
  <ol className="my-6 list-decimal pl-6 space-y-3 text-lg" {...props} />
);

const Li = (props) => (
  <li className="leading-8 text-gray-700 dark:text-gray-300" {...props} />
);

/* ======================================================
   LINKS
====================================================== */

const A = ({ href = "", children, ...props }) => {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      {...props}
    >
      {children}
    </Link>
  );
};

/* ======================================================
   IMAGES (Markdown ![]() → Next/Image)
====================================================== */

const Img = (props) => (
    <div className="my-8">
      <Image 
        src={props.src} 
        alt={props.alt} 
        width={800} 
        height={500} 
        className="rounded-lg"
      />
    </div>
)
/* ======================================================
   CODE
====================================================== */

const Pre = (props) => (
  <pre
    className="my-8 overflow-x-auto rounded-xl bg-neutral-900 p-5 text-sm text-gray-100"
    {...props}
  />
);

const Code = (props) => (
  <code
    className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm text-red-600 dark:bg-neutral-800 dark:text-red-400"
    {...props}
  />
);

/* ======================================================
   BLOCKQUOTE
====================================================== */

const Blockquote = (props) => (
  <blockquote
    className="my-8 border-l-4 border-gray-300 pl-6 italic text-gray-600 dark:border-gray-700 dark:text-gray-400"
    {...props}
  />
);

/* ======================================================
   TABLES
====================================================== */

const Table = (props) => (
  <div className="my-10 overflow-x-auto">
    <table className="w-full border-collapse text-left text-sm" {...props} />
  </div>
);

const Th = (props) => (
  <th
    className="border-b px-4 py-3 font-semibold text-gray-900 dark:text-gray-100"
    {...props}
  />
);

const Td = (props) => (
  <td
    className="border-b px-4 py-3 text-gray-700 dark:text-gray-300"
    {...props}
  />
);

/* ======================================================
   HR
====================================================== */

const Hr = () => <hr className="my-12 border-gray-200 dark:border-gray-800" />;

/* ======================================================
   EXPORT MAP
====================================================== */

export const mdxComponents = {

  // Typography
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,

  // Lists
  ul: Ul,
  ol: Ol,
  li: Li,

  // Links & Media
  a: A,
  img: Img,

  // Code
  pre: Pre,
  code: Code,

  // Other
  blockquote: Blockquote,
  table: Table,
  th: Th,
  td: Td,
  hr: Hr,
};
