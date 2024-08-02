'use client';

import { useEffect, useState } from "react";
import { NewsEntity } from "../model/NewsEntity";
import { useTimeout } from "usehooks-ts";
import Image from "next/image";

export type NewsData = {
  animate: 'up' | 'down' | 'none',
  newsEntity: NewsEntity,
}

type Props = {
  news?: NewsData,
  onNextNews: () => void;
}

export const NewsCard = ({news, onNextNews}: Props) => {

  const [currentNewsShown, setCurrentNewsShown] = useState<NewsEntity>();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!news) {
      setIsAnimating(false);
      setCurrentNewsShown(undefined);
      return;
    }
    if (news.animate === 'none') {
      setCurrentNewsShown(news.newsEntity);
    }
    else if (news.animate === 'up') {
      setCurrentNewsShown({
        ...currentNewsShown!,
        id: news.newsEntity.id,
      });
      setIsAnimating(true);
    }
  }, [news?.newsEntity?.id]);

  useEffect(() => {
    if (isAnimating && currentNewsShown === news?.newsEntity) {
      setIsAnimating(false);    
    }
  }, [currentNewsShown]);

  const handleAnimationEnd = () => {
    console.log('Animation end');
    setCurrentNewsShown(news?.newsEntity);
  }

  if (!news || !currentNewsShown) {
    return <div>Loading</div>
  }

  return (
    <div key={currentNewsShown.id}
      onAnimationEndCapture={handleAnimationEnd}
      className={"flex flex-col px-5 py-5 shadow-md rounded-md bg-white absolute top-0 " + (isAnimating && news.animate === 'up' ? 'animate-swipe-up opacity-0' : '')}>
      <Image
        width={200}
        height={200}
        src={currentNewsShown.imageUrl}
        loading="lazy" alt={"Graphic 1"} className="w-full mt-4" />
      <div className="mt-3 space-y-2">
        {/* <span className="block text-indigo-600 text-sm text-center">{"Shailesh Gupta"}</span> */}
        <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
          {currentNewsShown.title}
        </h3>
        <p className="text-gray-600 text-lg duration-150 group-hover:text-gray-800">{currentNewsShown.content}</p>
        <div className="flex flex-row-reverse">
          <button 
            className="flex items-center gap-2 px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700" 
            type="button" 
            title="Up"
            onClick={() => onNextNews()}> next </button>
          {/* <a href={currentNewsShown.sourceUrl} className="self-center">View Source</a> */}
        </div>
      </div>
    </div>
  );
}