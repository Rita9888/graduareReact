class UserstoreService {
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

  _postDataToResourse = async (data = {}, url) => {
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
      throw new Error(res.status);
    }
    return await res.json();
  };

  _deleteDataFromResourse = async (url) => {
    const res = await fetch(`${this.baseURL}${url}`, {
      method: "DELETE",
      authorization: this._getToken(),
    });
    if (!res.ok) {
      throw new Error(res.status);
    }
    return await res.json();
  };

  _putDataResourse = async (url, data) => {
    const res = await fetch(`${this.baseURL}${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: this._getToken(),
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      if (Object.keys(data).length) {
        throw await res.json();
      }
      throw new Error(res.status);
    }
    return await res.json();
  };

  postUserToLogin = async (user = {}) => {
    const res = await this._postDataToResourse({ user }, "/users/login");
    return await res;
  };

  postUserToRegister = async (user = {}) => {
    const res = await this._postDataToResourse({ user }, "/users");
    return await res;
  };

  postLike = async (slug) => {
    const res = await this._postDataToResourse(`/articles/${slug}/favorite`);
    return this._transformArticles(res.article);
  };

  deleteLike = async (slug) => {
    const res = await this._deleteDataFromResourse(
      `/articles/${slug}/ favorite`
    );
    return this._transformArticles(res.article);
  };

  postFollow = async (username) => {
    const res = await this._postDataToResourse(`/profiles/${username}/follow`);
    console.log(res);
    return res;
  };

  deleteFollow = async (username) => {
    return await this._deleteDataFromResourse(`/profiles/${username}/follow`);
  };

  putUser = async (user) => {
    const res = await this._putDataResourse("/user", user);
    return res;
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

export default new UserstoreService();
