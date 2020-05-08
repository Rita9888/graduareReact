import axios from "axios";

export default class ArticlestoreService {
  baseURL = "https://conduit.productionready.io/api/";

  getResourse = async (url) => {
    const res = await fetch(`${this.baseURL}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, receive ${res.status}`);
    }
    return await res.json();
  };

  getAllArticles = async () => {
    const res = await this.getResourse("/articles?limit=10&amp;offset=0.");
    const newArrayArticle = res.articles;
    const result = newArrayArticle.map(this._transformArticles);
    console.log(result);
    return result;
  };

  _transformArticles = (article, key) => {
    return {
      id: key,
      title: article.title,
      slug: article.slug,
      body: article.body,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      description: article.description,
      author: article.author,
    };
  };
}
//articles?limit=10&amp;offset=0.
