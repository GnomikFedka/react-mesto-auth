class Api {
    constructor({headers, myUrl}) {
        this._headers = headers;
        this._myUrl = myUrl;
    }

    _getResponseData(res) {
      if (res.ok) {
          return res.json();
      }
      else return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUser() {
      return fetch(`${this._myUrl}/users/me`, {
        headers: this._headers
      })
      .then(res => {
        return this._getResponseData(res);
      })
    }

    getCards() {
      return fetch(`${this._myUrl}/cards`, {
        headers: this._headers
      })
      .then(res => {
        return this._getResponseData(res);
      })
    }

    setUser({name, about}) {
      return fetch(`${this._myUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name,
          about,
        }),
      })
      .then(res => {
        return this._getResponseData(res);
      })
    }

    setAvatar(avatar) {
      return fetch(`${this._myUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(avatar)
      })
      .then(res => {
        return this._getResponseData(res);
      })
    }

    addCard(card) {
      return fetch(`${this._myUrl}/cards`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify(card)
        })
        .then(res => {
          return this._getResponseData(res);
        })  
    }

    deleteCard(cardData) {
      return fetch(`${this._myUrl}/cards/${cardData}`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then(res => {
        return this._getResponseData(res);
      })
    }

    changeLikeCardStatus(cardId, isLiked) {
      return fetch(`${this._myUrl}/cards/${cardId}/likes`, {
        method: isLiked ? "DELETE" : "PUT",
        headers: this._headers,
      })
      .then(res => {
        return this._getResponseData(res);
      })
    }
}
const api = new Api({
  headers: {
    authorization: '9747cacb-cd33-472a-8f54-1926cc52a8f6',
    'Content-Type': 'application/json',
  },
  myUrl: 'https://mesto.nomoreparties.co/v1/cohort-63',
});

export default api;