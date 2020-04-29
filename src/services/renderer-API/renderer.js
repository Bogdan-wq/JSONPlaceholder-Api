import React from "react";
import './renderer.scss';



export default class Renderer {
    constructor() {

        this.firstToUpper = (stringValue) => {
            return stringValue[0].toUpperCase() + stringValue.slice(1);
        }



        this.commentsToHTML = (itemComments) => {
            const {postId, id, name, email, body} = itemComments;
            return (
                <div className="border border-dark p-3 card" key={id}>
                    <div className="font-weight-normal flex-grow-1">
                        <span>Name: </span>
                        <strong>{this.firstToUpper(name)}</strong>
                    </div>
                    <div className="d-flex mt-1">
                        <span>ID: <strong>{id}</strong></span>
                        <span className="ml-3">PostID: <strong>{postId}</strong></span>
                        <span className="ml-3">Email : <strong>{email}</strong></span>
                    </div>
                    <p className="mt-1">Body: <strong>{this.firstToUpper(body)}</strong></p>
                </div>
            )
        }



        this.postsToHTML = (itemPosts) => {
            const {userId , id , title, body} = itemPosts;

            return (
                <div className="border border-dark p-3 card" key={id}>
                    <div className="font-weight-normal flex-grow-1">
                        <span>Title: </span>
                        <strong>{this.firstToUpper(title)}</strong>
                    </div>
                    <div className="d-flex mt-1">
                        <span>ID: <strong>{id}</strong></span>
                        <span className="ml-3">UserID: <strong>{userId}</strong></span>
                    </div>
                    <p className="mt-1">Body: <strong>{this.firstToUpper(body)}</strong></p>
                </div>
            )
        }


        this.albumsToHTML = (itemAlbums) => {
            const {userId,id,title} = itemAlbums;
            return (
                <div className="border border-dark p-3 card" key={id}>
                    <div className="font-weight-normal flex-grow-1">
                        <span>Title: </span>
                        <strong>{this.firstToUpper(title)}</strong>
                    </div>
                    <span>ID: <strong>{id}</strong></span>
                    <span>UserID: <strong>{userId}</strong></span>
                </div>
            )
        }






        this.photosToHTML = (itemPhotos) => {
            const {albumId,id,title,url} = itemPhotos;
            return (
                <div className="card" key={id}>
                    <div className="w-100 image-container position-relative">
                        <img src={url} className="position-absolute w-100 h-100"/>
                    </div>
                    <div className="card-body d-flex flex-column">
                        <div className="card-title flex-grow-1">{this.firstToUpper(title)}</div>
                        <div>ID: <strong>{id}</strong></div>
                        <div>AlbumID: <strong>{albumId}</strong></div>
                    </div>
                </div>
            )
        }







        this.todosToHTML = (itemTodos) => {
            const {userId,id,title,completed} = itemTodos;
            return (
                <div className="border border-dark card p-3" key={id}>
                    <div className="font-weight-normal flex-grow-1">
                        <span>Task: </span>
                        <strong>{this.firstToUpper(title)}</strong>
                    </div>
                    <span className="mt-1">ID: <strong>{id}</strong></span>
                    <span className="mt-1">UserID: <strong>{userId}</strong></span>
                    <span className="mt-1">Completed: <strong>{this.firstToUpper(completed.toString())}</strong></span>
                </div>
            )
        }




        this.usersToHTML = (itemUsers) => {
            const {name, id, username, email,
                address : {street, suite, city, zipcode, geo : {lat,lng} } } = itemUsers;


            return (
                <div className="card border border-dark p-3" key={id}>
                    <h1 className="card-title font-weight-light">{name}</h1>
                    <div className="d-flex">
                        <span>Username: <strong>{username}</strong></span>
                        <span className="ml-3">ID: <strong>{id}</strong></span>
                    </div>
                    <span className="mt-1">Email: <strong>{email}</strong></span>
                    <span className="mt-1">Address:</span>
                    <div className="d-flex mt-1">
                        <div className="col-6 d-flex flex-column">
                            <span className="pl-4 ">Street: <strong>{street}</strong></span>
                            <span className="pl-4">Suite: <strong>{suite}</strong></span>
                            <span className="pl-4">City: <strong>{city}</strong></span>
                        </div>
                        <div className="col-6 d-flex flex-column">
                            <span className="pl-4">Zipcode: <strong>{zipcode}</strong></span>
                            <span className="pl-4">Lat:<strong>{lat}</strong></span>
                            <span className="pl-4">Lng: <strong>{lng}</strong></span>
                        </div>
                    </div>
                </div>
            )
        }
    }
}