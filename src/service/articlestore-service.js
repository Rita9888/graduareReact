export default class ArticlestoreService {
  baseURL = "https://conduit.productionready.io/api";

  _getToken = () => {
    try {
      const token = JSON.stringify(
        JSON.parse(localStorage.getItem("conduitToken")).user.token
      );
      console.warn(token);
      return `Token ${token}`;
    } catch (e) {
      return "";
    }
  };

  _getResourse = async (url) => {
    const res = await fetch(`${this.baseURL}${url}`, {
      headers: {},
      authorization: this._getToken(),
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, receive ${res.status}`);
    }
    return await res.json();
  };

  getArticle = async (slug) => {
    const res = await this._getResourse(`/articles/${slug}`);
    return this._transformArticles(res.article);
  };

  getAllArticles = async (articlePerPage, indexOfLastArticle) => {
    const res = await this._getResourse(
      `/articles?limit=${articlePerPage}&amp;offset=${indexOfLastArticle}.`
    );
    const newArrayArticle = res.articles;
    return newArrayArticle.map(this._transformArticles);
  };

  getArticlesByTag = async (tag, articlePerPage, indexOfLastArticle) => {
    const res = await this._getResourse(
      `/articles?tag=${tag}&amp;limit=${articlePerPage}&amp;offset=${indexOfLastArticle}`
    );
    const newArrayArticle = res.articles;
    return newArrayArticle.map(this._transformArticles);
  };

  getAllTags = async () => {
    const res = await this._getResourse(`/tags`);
    return res.tags;
  };

  getArticlesCount = async (param, articlePerPage, indexOfLastArticle) => {
    const res = await this._getResourse(
      `/articles?tag=${param}&amp;limit=${articlePerPage}&amp;offset=${indexOfLastArticle}`
    );
    return res.articlesCount;
  };

  getProfile = async (username) => {
    const res = await this._getResourse(`/profiles/${username}`);
    return res.profile;
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
    return res.articles.map(this._transformArticles);
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

  postNewArticle = async (article) => {
    return await this._postResourse("/articles", { article });
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
