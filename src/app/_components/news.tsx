'use client';

import { title } from "process";
import { NewsCard, NewsData } from "./newscard";
import { useEffect, useState } from "react";
import { NewsEntity } from "../model/NewsEntity";

let fakeNews = [
  {
    id: "1",
    title: "Google to hire 1000 employees in India. Time to learn Golang!",
    content: "Here is some description on this. This is more more description. The news content is awesome. Here is another few words. I think this is not enough so here are some more to keep you happy. Few more words to make it 60. It needs a lot of words. Still not enough it seems man too much.",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/resourcifyme.appspot.com/o/public%2Fnodejs.jpg?alt=media&token=2a533c2c-9c24-4f32-937f-3dfbd1589176",
    author: "Gupta Ji",
    sourceUrl: "sdkjhfsd",
    timestamp: new Date(),
  },
  {
    id: "2",
    title: "Microsoft is firing in Azure.",
    content: "Here is some description on this. This is more more description. The news content is awesome. Here is another few words. I think this is not enough so here are some more to keep you happy. Few more words to make it 60. It needs a lot of words. Still not enough it seems man too much.",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/resourcifyme.appspot.com/o/public%2Freact-js.jpg?alt=media&token=565b148f-c184-4931-80e0-22ecf89deb12",
    author: "Gupta Ji",
    sourceUrl: "sdkjhfsd",
    timestamp: new Date(),
  },
  // {
  //   id: "3",
  //   title: "AI to boost employment in india by 30%",
  //   content: "Here is some description on this. This is more more description. The news content is awesome. Here is another few words. I think this is not enough so here are some more to keep you happy. Few more words to make it 60. It needs a lot of words. Still not enough it seems man too much.",
  //   imageUrl: "https://firebasestorage.googleapis.com/v0/b/resourcifyme.appspot.com/o/public%2FAI1.jpg?alt=media&token=b96eaa0b-d51a-4086-82e5-b5c180140c07",
  //   author: "Gupta Ji",
  //   sourceUrl: "sdkjhfsd",
  // },
  // {
  //   id: "4",
  //   title: "SDE in India make an average of 20LPA",
  //   content: "Here is some description on this. This is more more description. The news content is awesome. Here is another few words. I think this is not enough so here are some more to keep you happy. Few more words to make it 60. It needs a lot of words. Still not enough it seems man too much.",
  //   imageUrl: "https://firebasestorage.googleapis.com/v0/b/resourcifyme.appspot.com/o/public%2Ffrontend-web-development.webp?alt=media&token=c5f46740-391c-4d9f-bcb7-8c54bbad3fe7",
  //   author: "Gupta Ji",
  //   sourceUrl: "sdkjhfsd",
  // },
  // {
  //   id: "5",
  //   title: "New Web Dev frameworks are here. Start learning.",
  //   content: "Here is some description on this. This is more more description. The news content is awesome. Here is another few words. I think this is not enough so here are some more to keep you happy. Few more words to make it 60. It needs a lot of words. Still not enough it seems man too much.",
  //   imageUrl: "https://firebasestorage.googleapis.com/v0/b/resourcifyme.appspot.com/o/public%2Finterview.jpg?alt=media&token=a07255dc-006c-4a9c-9ff6-376eab5fb3a1",
  //   author: "Gupta Ji",
  //   sourceUrl: "sdkjhfsd",
  // },
  // {
  //   id: "6",
  //   title: "Many new companies to start hiring in August. Here is the list",
  //   content: "Here is some description on this. This is more more description. The news content is awesome. Here is another few words. I think this is not enough so here are some more to keep you happy. Few more words to make it 60. It needs a lot of words. Still not enough it seems man too much.",
  //   imageUrl: "https://firebasestorage.googleapis.com/v0/b/resourcifyme.appspot.com/o/public%2Finterview.jpg?alt=media&token=a07255dc-006c-4a9c-9ff6-376eab5fb3a1",
  //   author: "Gupta Ji",
  //   sourceUrl: "sdkjhfsd",
  // },
];

const lr = (x: any) => {
  console.log(x);
  return x;
}

export const News = () => {

  const [newsList, setNewsList] = useState(fakeNews);
  const [newsIndex, setNewsIndex] = useState(0);
  const [frontNewsData, setFrontNewsdata] = useState<NewsData>();
  const [backNewsdata, setBackNewsData] = useState<NewsData>();

  useEffect(() => {
    setFrontNewsdata({
      newsEntity: fakeNews[0],
      animate: 'none',
    });
    fakeNews.forEach(image => {
      // pre load images
      (new Image()).src = image.imageUrl;
    });

    fetch('https://7bxz913pw6.execute-api.ap-south-1.amazonaws.com/News', lr({
      method: 'GET',
      // mode: 'no-cors',
    })).then(response => response.json())
    .then(news => {
      console.log(news);
      const list = fakeNews.concat(news.map((n: any) => ({
        id: n.uuid,
        title: n.newsTitle,
        content: n.newsContent,
        imageUrl: n.newsPicturePathS3,
        sourceUrl: n.newsSource,
      } as NewsEntity)));
      list.push(fakeNews[1]);
      setNewsList(list);
      console.log(list);
    })
    .catch(console.error);
  }, []);

  const handleNextNews = () => {
    const currentNewsIndex = newsIndex;
    const nextNewsIndex = (newsIndex + 1) % (newsList.length - 1);
    setNewsIndex(nextNewsIndex);
    setBackNewsData({
      newsEntity: newsList[nextNewsIndex],
      animate: 'none',
    })
    setFrontNewsdata({
      newsEntity: newsList[nextNewsIndex],
      animate: 'up',
    });
  }

  return <>
    <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl mt-32 text-center">Hiring News</h1>
    <p className="text-gray-600 text-left mt-4 mb-4">Always be up to date on who is hiring by subscribing to latest news from the tech job market.</p>
    <div className="relative">
      <NewsCard
        news={backNewsdata} 
        onNextNews={handleNextNews} />
      <NewsCard
        news={frontNewsData} 
        onNextNews={handleNextNews} />
    </div>
    {/* <div className="flex flex-row">
      <button className="text-blue-600 absolute top-full" type="button" title="Up" onClick={handleNextNews} > next </button>
    </div> */}
  </>
}