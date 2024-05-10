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
import { remark } from "remark";
import {visit} from 'unist-util-visit'
import { Root } from "mdast";
import { uriTransformer } from "react-markdown";

export default async function GuideContent({fileName}: {fileName: string}) {

  let md: string;
    try {
      md = await GuideDataFetcher.fetchGuideMarkdown(fileName);
    } catch(e) {
      md = "*Content unavailable*";
    }

    remark()
      .use(() => {
        return (tree: Root, file: any) => {
          const replacements = new Map<[any, number], string>();
          visit(tree, 'link', (node, index, parent) => {
            node.url = node.url.replace("guide://", "");
            // console.log(parent, index);
            replacements.set([parent!, index!], node.url.replace("guide://", ""));
          });
          return tree;
        }
      })
      .use(() => {
        return async (tree: Root, file: any) => {
          visit(tree, 'link', (node, index, parent) => {
            // console.log(node);
          });
        }
      })
      .process(md)
      .then();

    return (
      <ReactMarkdown
        className="w-full max-w-full overflow-clip hyphens-auto prose" 
        transformLinkUri={(href, children, title) => {
          if (href.startsWith("guide://")) {
            return href;
          }
          return uriTransformer(href);
        }}
        components={{
          h3({node, className, children, ...props}) {
            let id = "";
            if (children.length === 1 && typeof(children[0]) === "string") {
              id = children[0].split(" ").join("-");
            }
            return (
              <h3 id={id} className={className} {...props}>
                <a href={`#${id}`} style={{color: 'inherit', textDecoration: 'none'}}>{children}</a>
              </h3>
            );
          },
          p({children, ...props}) {
            return <div {...props}>{children}</div>
          },
          a({node, className, children, href}) {
            if (href && href.startsWith("guide://")) {
              const guidePath = href.replace(href, href.replace("guide://", ""));
              return <GuideContent fileName={guidePath} />
            }
            return <a href={href} className={className}>{children}</a>
          }
        }}> 
        { md }
      </ReactMarkdown>
    )
  }

