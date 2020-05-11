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

  getAllArticles = async (articlePerPage, indexOfLastArticle) => {
    const res = await this.getResourse(
      `/articles?limit=${articlePerPage}&amp;offset=${indexOfLastArticle}.`
    );
    const newArrayArticle = res.articles;
    const result = newArrayArticle.map(this._transformArticles);
    return result;
  };

  getAllTags = async () => {
    const res = await this.getResourse(`tags`);
    const tags = res.tags;
    return tags;
  };

  getArticlesCount = async () => {
    const res = await this.getResourse(`/articles?`);
    const articlesCount = res.articlesCount;
    return articlesCount;
  };

  _transformArticles = (article, index) => {
    return {
      id: index,
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
