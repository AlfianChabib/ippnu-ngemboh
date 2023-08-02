import { Post } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/app/lib/sanityImageUrl";
import Image from "next/image";

async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

async function getDate() {
  const queryDate = `*[_type == "post"] {
    date,
  }`;
  const date = await client.fetch(queryDate);
  return date;
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Post;
  const date = (await getDate()) as Post[];

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <div className="flex items-center justify-center gap-3">
          <div className="relative md:h-[500px] sm:h-[350px] h-[200px] w-full">
            <div className="relative h-full w-full py-4">
              <Image
                src={urlFor(value).url()}
                fill
                alt="Image"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
      <header className="pt-6 xl:pb-6 pb-6">
        <div className="space-y-1 text-center">
          <div className="space-y-10 ">
            <div>
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                {data.title}
              </h1>
              <p className="sm:text-base text-sm font-medium leading-6 text-teal-500">
                {date.map((date) => (
                  <span key={date._id}>{date.date}</span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pb-8 dark:prose-invert prose-lg">
            <PortableText
              value={data.content}
              components={PortableTextComponent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
