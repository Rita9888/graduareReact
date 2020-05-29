export default class ArticlestoreService {
  baseURL = "https://conduit.productionready.io/api";

  _getToken = () => {
    const token = localStorage.getItem("conduitToken");
    return token ? `Token ${token}` : "";
  };

  _getResourse = async (url) => {
    const res = await fetch(`${this.baseURL}${url}`, {
      headers: {},
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, receive ${res.status}`);
    }
    return await res.json();
  };

  getArticle = async (slug) => {
    const res = await this._getResourse(`/articles/${slug}`);
    const result = this._transformArticles(res.article);
    return result;
  };

  getAllArticles = async (articlePerPage, indexOfLastArticle) => {
    const res = await this._getResourse(
      `/articles?limit=${articlePerPage}&amp;offset=${indexOfLastArticle}.`
    );
    const newArrayArticle = res.articles;
    const result = newArrayArticle.map(this._transformArticles);
    return result;
  };

  getArticlesByTag = async (tag, articlePerPage, indexOfLastArticle) => {
    const res = await this._getResourse(
      `/articles?tag=${tag}&amp;limit=${articlePerPage}&amp;offset=${indexOfLastArticle}`
    );
    const newArrayArticle = res.articles;
    const result = newArrayArticle.map(this._transformArticles);
    return result;
  };

  getAllTags = async () => {
    const res = await this._getResourse(`/tags`);
    const tags = res.tags;
    return tags;
  };

  getArticlesCount = async (param, articlePerPage, indexOfLastArticle) => {
    const res = await this._getResourse(
      `/articles?tag=${param}&amp;limit=${articlePerPage}&amp;offset=${indexOfLastArticle}`
    );
    const articlesCount = res.articlesCount;
    return articlesCount;
  };

  getProfile = async (username) => {
    const res = await this._getResourse(`/profiles/${username}`);
    const profileData = res.profile;
    return profileData;
  };

  getArticlesByFollow = async (articlePerPage, indexOfLastArticle) => {
    return this._getResourse(
      `/articles/feed?limit=${articlePerPage}&offset=${indexOfLastArticle}`
    );
  };

  getUserArticles = async (articlePerPage, user, indexOfLastArticle) => {
    const res = await this._getResourse(
      `/articles?author=${user}&amp;limit=10&amp;offset=0`
    );
    const result = res.articles.map(this._transformArticles);
    return result;
  };

  //получение статей лайкнутых пользователям
  getArticlesByFavorited = async (pageIndex = 0, user) => {
    return this._getArticles(pageIndex, `?favorited=${user}&`);
  };

  _postResourse = async (url, data = {}) => {
    const res = await fetch(`${this.baseURL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: this._getToken(),
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      if (Object.keys(data).length) {
        throw await res.json();
      }
      throw new Error(`Could not fetch ${url}, receive ${res.status}`);
    }
    return await res.json();
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
      favorited: article.favorited,
      favoritesCount: article.favoritesCount,
      tagList: article.tagList,
    };
  };
}
