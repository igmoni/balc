import Image from "next/image";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

const CourseContent = ({ frontmatter, content }) => {
  const { title, description, pageImage, level, duration, mode, date } =
    frontmatter;

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <article className="mx-auto max-w-6xl">
      <header className="mb-8 space-y-6">
        {pageImage && (
          <div className="relative aspect-video overflow-hidden rounded-lg mb-6">
            <Image
              src={pageImage}
              alt={title}
              width={1400}
              height={600}
              className="object-contain w-full h-full"
              priority
            />
          </div>
        )}

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {level && <Badge variant="outline">{level}</Badge>}
            {mode && <Badge variant="outline">{mode}</Badge>}
            {duration && <Badge variant="outline">{duration}</Badge>}
          </div>
          <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground">{description}</p>
          {formattedDate && (
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <time dateTime={date}>{formattedDate}</time>
            </div>
          )}
        </div>
        <Separator className="my-6" />
      </header>

      <div className="prose prose-neutral max-w-none ">{content}</div>
    </article>
  );
};

export { CourseContent };
