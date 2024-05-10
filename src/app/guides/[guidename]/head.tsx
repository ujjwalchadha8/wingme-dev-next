import GuideDataFetcher from "../../data/GuideDataFetcher"

export default async function Head({params}: {params: any}) {

  const guide = await GuideDataFetcher.fetchGuideMetadata(params.guidename);

  return (
    <>
      <meta charSet="UTF-8"/>
      <title>{guide.name}</title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="description" content={guide.description}/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0"/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="og:title" content={guide.name}/>
      <meta property="twitter:title" content={guide.name}/>
      <meta property="og:type" content="website"/>
      <meta property="og:site" content="Resourcify.ME"/>
      <meta property="og:url" content={`https://resourcify.me/guides/${guide.fileName}`}/>
      <meta property="og:description" content={guide.description}/>
      <meta property="twitter:description" content={guide.description}/>
      <meta property="og:image" content={guide.imageUrl} />
      <meta name="twitter:image" content={guide.imageUrl} />

      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
      <link rel="icon" href="/favicon/favicon.ico" />
    </>
  );
}
