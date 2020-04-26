import React from "react";

export default class Renderer {
    constructor() {
        this.commentsToHTML = (itemComments) => {
            const {postId, id, name, email, body} = itemComments;
            return (
                <div className="render-base__item render-base-item" key={id}>
                    <h3 className="render-base-item__name">{name}</h3>
                    <span className="render-base-item__value-label">ID: <strong>{id}</strong></span>
                    <span className="render-base-item__value-label">PostID: <strong>{postId}</strong></span>
                    <span className="render-base-item__value-label">Email : <strong>{email}</strong></span>
                    <p className="render-base-item__value-label">Body: <strong>{body}</strong></p>
                </div>
            )
        }



        this.postsToHTML = (itemPosts) => {
            const {userId , id , title, body} = itemPosts;

            return (
                <div className="render-base__item render-base-item" key={id}>
                    <h3 className="render-base-item__name">{title}</h3>
                    <span className="render-base-item__value-label">ID: <strong>{id}</strong></span>
                    <span className="render-base-item__value-label">UserID: <strong>{userId}</strong></span>
                    <p className="render-base-item__value-label">Body: <strong>{body}</strong></p>
                </div>
            )
        }


        this.albumsToHTML = (itemAlbums) => {
            const {userId,id,title} = itemAlbums;
            return (
                <div className="render-base__item render-base-item" key={id}>
                    <span className="render-base-item__value-label">ID: <strong>{id}</strong></span>
                    <span className="render-base-item__value-label">UserID: <strong>{userId}</strong></span>
                    <p className="render-base-item__value-label">Title: <strong>{title}</strong></p>
                </div>
            )
        }



        this.photosToHTML = (itemPhotos) => {
            const {albumId,id,title,url,thumbnailUrl} = itemPhotos;
            return (
                <div className="render-base__item render-base-item" key={id}>
                    <h3 className="render-base-item__name">{title}</h3>
                    <span className="render-base-item__value-label">ID: <strong>{id}</strong></span>
                    <span className="render-base-item__value-label">AlbumID: <strong>{albumId}</strong></span>
                    <img src={url} />
                    <img src={thumbnailUrl} />
                </div>
            )
        }





        this.todosToHTML = (itemTodos) => {
            const {userId,id,title,completed} = itemTodos;
            return (
                <div className="render-base__item render-base-item" key={id}>
                    <h3 className="render-base-item__name">{title}</h3>
                    <span className="render-base-item__value-label">ID: <strong>{id}</strong></span>
                    <span className="render-base-item__value-label">UserID: <strong>{userId}</strong></span>
                    <span className="render-base-item__value-label">Completed: <strong>{completed.toString()}</strong></span>
                </div>
            )
        }




        this.usersToHTML = (itemUsers) => {
            const {name, id, username, email,
                address : {street, suite, city, zipcode, geo : {lat,lng} } } = itemUsers;
            return (
                <div className="render-base__item render-base-item" key={id}>
                    <h3 className="render-base-item__name">{name}</h3>
                    <span className="render-base-item__value-label">Username: <strong>{username}</strong></span>
                    <span className="render-base-item__value-label">ID: <strong>{id}</strong></span>
                    <span className="render-base-item__value-label">Email: <strong>{email}</strong></span>
                    <span className="render-base-item__value-label">Street: <strong>{street}</strong></span>
                    <span className="render-base-item__value-label">Suite: <strong>{suite}</strong></span>
                    <span className="render-base-item__value-label">City: <strong>{city}</strong></span>
                    <span className="render-base-item__value-label">Zipcode: <strong>{zipcode}</strong></span>
                    <span className="render-base-item__value-label">Lat:<strong>{lat}</strong></span>
                    <span className="render-base-item__value-label">Lng: <strong>{lng}</strong></span>
                </div>
            )
        }
    }
}