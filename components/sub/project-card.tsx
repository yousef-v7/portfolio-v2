import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  github?: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  github,
}: ProjectCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#150a2b]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>

        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/20 transition"
          >
            Live Demo
          </Link>

          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/20 transition"
            >
              GitHub Repo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
