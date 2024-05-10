import { GuideMetadata } from "../model/GuideMetadata";
import HttpError from "../utils/HttpError";


export default class GuideDataFetcher {

  private static async fetchFileContent(filePath: string): Promise<string> {
    const fileRoot = //process.env.resourcify_is_local_build == "true" ? "http://localhost:5000" : 
      // `https://resourcifyme.web.app`;
      "";

    const res = await fetch(`/${filePath}`);
    if (res.status !== 200) {
      throw new HttpError(res.status, res.statusText)
    }
    return await res.text();
  }

  static async fetchAllGuidesMetadata(): Promise<GuideMetadata[]> {
    const metadataJson = JSON.parse(await this.fetchFileContent('guides-md/__meta.json'));
    return metadataJson.guides as GuideMetadata[];
  }

  static async fetchGuideMetadata(fileName: string): Promise<GuideMetadata> {
    const filteredGuides = (await this.fetchAllGuidesMetadata()).filter(guide => guide.fileName == fileName);
    if (filteredGuides.length === 0) {
      throw new HttpError(404, "Not Found");
    }

    return filteredGuides[0];
  }

  static async fetchGuideMarkdown(query: string): Promise<string> {
    return await this.fetchFileContent(`guides-md/${query}.md`);
  }
}