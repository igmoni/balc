import Image from "next/image";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

const BlogContent = ({ frontmatter, content }) => {
  const { title, desc, image, tags, date } = frontmatter;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="mx-auto max-w-6xl">
      <header className="mb-8 sapce-y-6">
        <div className="realtive aspect-video overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground">{desc}</p>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            {/* <Calendar className="size-6" /> */}
            <time dateTime={date}>{formattedDate}</time>
          </div>
        </div>
        <Separator />
      </header>

      <div className="prose prose-neutral max-w-none ">
        {content}
      </div>
    </article>
  );
};

export { BlogContent }