import Link from "next/link";
import { Post } from "../lib/interface";
import { client } from "../lib/sanity";
import Image from "next/image";

async function getData() {
  const query = `*[_type == "post"] {
    title,
    _id,
    date,
    slug {
      current
    },
    overview,
    content,
    "imageUrl": image.asset->url,
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Gellery() {
  const data = (await getData()) as Post[];

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2  pt-6 pb-8 md:space-y-5">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          Gallery IPPNU
        </h1>
      </div>

      <div className="grid gap-y-8 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
        {data.map((post) => (
          <article
            key={post._id}
            className="relative overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-md dark:bg-black dark:shadow-gray-900 shadow-teal-200"
          >
            <div className="relative inset-0 dark:bg-gray-900 bg-gray-100 py-2 flex items-center pl-6 overflow-hidden">
              <span className="flex gap-2 text-sm text-gray-700 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                {post.date}
              </span>
            </div>
            <div className="h-56 w-full relative">
              <Image
                fill
                priority
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <Link href={`/gallery/post/${post.slug.current}`} prefetch>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {post.title}
                </h3>
              </Link>

              <p className="line-clamp-2 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {post.overview}
              </p>
              <Link
                href={`/gallery/post/${post.slug.current}`}
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500"
              >
                Read More!
                <span className="block transition-all group-hover:ms-0.5">
                  &rarr;
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
