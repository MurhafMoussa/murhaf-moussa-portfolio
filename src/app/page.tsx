import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import SwipeCards from "@/components/SwipeCards";
import { Button } from "@/components/ui/Button";
import { getPosts } from "@/lib/posts";
import {
  ArrowRightIcon,
  FileDown
} from "lucide-react";
import Link from "next/link";
import path from "path";

const blogDirectory = path.join(process.cwd(), "content");
const LIMIT = 2; // max show 2

export default async function Home() {
  const posts = await getPosts(blogDirectory, LIMIT);

  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <SwipeCards className="md:mr-8" />

   <div className="flex max-w-[320px] flex-col sm:max-w-full">
          <h1 className="title text-balance text-4xl sm:text-5xl">
           Hey! Murhaf here. 👋
          </h1>

          <p className="mt-2 text-sm font-medium sm:text-lg text-primary">
            Senior Software Engineer | Mobile Application Specialist 
          </p>

          <p className="mt-4 max-w-xl text-balance text-sm sm:text-base text-muted-foreground">
            Specializing in high-performance Flutter systems and Clean Architecture. 
            Proven track record of launching 9+ production apps and optimizing data pipelines to reduce manual processing by 90%.
          </p>


          <section className="mt-6 flex flex-wrap items-center gap-4">
            <Link href="/resume.pdf" target="_blank">
              <Button variant="default">
                <span className="font-semibold">Download CV</span>
                <FileDown className="ml-2 size-5" />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>



      <Experience />
      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">Featured Projects</h2>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Projects limit={LIMIT} /> 
      </section>

      {/* <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-3xl">Recent Posts</h2>
          <LinkWithIcon
            href="/blog"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Posts posts={posts} />
      </section> */}
    </article>
  );
}
