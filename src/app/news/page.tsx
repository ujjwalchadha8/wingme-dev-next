import { NewsEntity } from "../model/NewsEntity";

export default async () => {
  console.log("HELOOOOO")

  const data = await fetch('https://bk20kst7ed.execute-api.us-east-1.amazonaws.com/', {
    method: 'GET',
    cache: "no-cache",
    headers: {
      page: ''
    }
  });

  const newsRaw = await data.json();
  console.log(newsRaw);

  const news: NewsEntity[] = newsRaw.news.map((n: any) => ({
    id: n.uuid,
    title: n.newsTitle, 
    content: n.newsContent,
    imageUrl: n.newsPicturePathS3,
    sourceUrl: n.newsSource,
    timestamp: new Date(n.entryCreatedAt),
  } as NewsEntity));
  
  return (
      <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
          <div className="text-center">
              <h1 className="text-3xl text-gray-800 font-semibold">
                  Unscurry News
              </h1>
              <p className="mt-3 text-gray-500">
                  Latest news in Tech.
              </p>
          </div>
          <div className="mt-12 grid gap-2 sm:grid-cols-1 lg:grid-cols-1">
              {
                news.map((item) => (
                  <article className="max-w-2xl mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm p-4" key={item.id}>
                      <a href={item.sourceUrl} className="flex flex-row">
                        <div>
                          <img height={100} width={100} src={item.imageUrl} loading="lazy" alt={item.title} style={{width: '12rem', maxWidth: '12rem'}} className="h-full rounded-t-md object-cover" />
                        </div>
                        <div>
                          <div className="pt-4 ml-4 mr-2 mb-3">
                              <h3 className="text-xl text-gray-900">
                                  {item.title}
                              </h3>
                              <p className="text-gray-400 text-sm mt-1">{item.content}</p>
                          </div>
                          <div className="flex items-center mt-2 pt-3 mr-2">
                              <div className="ml-3">
                                  <span className="block text-gray-900">{item.author}</span>
                                  <span className="block text-gray-400 text-sm">{item.timestamp + ""}</span>
                              </div>
                          </div>
                        </div>
                      </a>
                  </article>
                ))
              }
          </div>
      </section>
  )
}
