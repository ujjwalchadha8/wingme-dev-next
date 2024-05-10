import "server-only";

import React, { ReactNode } from 'react'
import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import GuideDataFetcher from "../../data/GuideDataFetcher";
import HttpError from "../../utils/HttpError";
import Icon, { IconName } from "../../utils/Icon";
import { GuideMetadata } from "../../model/GuideMetadata";
import GuideContent from "./GuideContent";

export default async function SampleGuide({params}: {params: any}) {

  let md = "INTERNAL ERROR OCURRED";
  let guide: GuideMetadata;
  try {
    md = await GuideDataFetcher.fetchGuideMarkdown(params.guidename);
    guide = await GuideDataFetcher.fetchGuideMetadata(params.guidename);
  } catch (e) {
    if (e instanceof HttpError) {
      return <p>Server responded with {e.status} {e.message}</p>
    }
    throw e;
  }

  function renderAuthorNameplate() {
    const authorName = guide.author[0];
    const authorLinks = guide.author.slice(1,).filter(data => data.startsWith('https://'));

    const authorNameElement = <span key={authorName}>by {authorName}</span>
    const authorLinkElements = authorLinks.map(link => {
      let iconName: IconName;
      if (link.includes("twitter.com")) {
        iconName = "twitter";
      } else if (link.includes("linkedin.com")) {
        iconName = "linkedin";
      } else {
        iconName = "globe";
      }
      return <a className="ml-3" key={link} href={link} target="about:blank"><Icon name={iconName}/></a>
    });
    return [authorNameElement, ...authorLinkElements];
  }

  return (
    <main className="w-full flex flex-row justify-center px-12 pt-8 mb-12">
      <div className="w-full max-w-full md:max-w-screen-md ">
        <section className="mb-8">
          <h1 className="text-4xl font-extrabold mb-4">{guide!.name}</h1>
          <p className="text-lg mb-6">{guide!.description}</p>
          <div className="w-full aspect-video rounded-lg bg-contain mb-6" style={{backgroundImage: `url(${guide!.imageUrl})`}}></div>
          <p className="py-2 border-t-2 border-b-2 border-gray-400">
            {
              renderAuthorNameplate()
            }
          </p>
        </section>
        <GuideContent fileName={guide.fileName} />
      </div>
    </main>
  )
}


