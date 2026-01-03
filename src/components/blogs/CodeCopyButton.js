"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CodeCopyButton({ code }) {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (error) {
            console.error("Failed to copy:", error);
        }
    };

    return (
        <button
            onClick={copyToClipboard}
            className={cn(
                "absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-md border bg-background/50 p-1 text-muted-foreground backdrop-blur-sm transition-all hover:bg-background hover:text-foreground",
                isCopied && "border-green-500 text-green-500"
            )}
            aria-label="Copy code"
        >
            {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
    );
}
