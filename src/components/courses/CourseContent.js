import Image from "next/image";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

const CourseContent = ({ frontmatter, content }) => {
    const { title, description, coverImage, level, duration, mode, date } = frontmatter;

    const formattedDate = date ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }) : null;

    return (
        <article className="mx-auto max-w-6xl">
            <header className="mb-8 sapce-y-6">
                {coverImage && (
                    <div className="realtive aspect-video overflow-hidden rounded-lg mb-6">
                        <Image
                            src={coverImage}
                            alt={title}
                            width={1200}
                            height={600}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                )}

                <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {level && <Badge variant="secondary">{level}</Badge>}
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

            <div className="prose prose-neutral max-w-none ">
                {content}
            </div>
        </article>
    );
};

export { CourseContent }
