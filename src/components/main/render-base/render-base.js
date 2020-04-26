import React,{Component} from 'react'
import './render-base.scss';
import Renderer from "../../../services/renderer-API";





export default class RenderBase extends Component {

        renderer = new Renderer();

        toJSX = () => {
            const { type , base } = this.props;


            const {
                usersToHTML,todosToHTML,postsToHTML,albumsToHTML,photosToHTML,commentsToHTML
            } = this.renderer;



            switch (type) {
                case "users":
                    return base.map(usersToHTML);
                case "todos":
                    return base.map(todosToHTML);
                case "posts":
                    return base.map(postsToHTML);
                case "albums":
                    return base.map(albumsToHTML);
                case "photos/?albumId=1":
                    return base.map(photosToHTML);
                case "comments":
                    return base.map(commentsToHTML);
                default:
                    return base.map(postsToHTML);
            }
        }





        render() {
            const { base } = this.props;

            const Loading = !base ? <h2>Loading...</h2> : null;

            const JSXarray = base ? this.toJSX() : null;

            return (
                <div className="main-app__render-base render-base">
                    <div className="container">
                        <div className="render-base__inner">
                            {Loading}
                            {JSXarray}
                        </div>
                    </div>
                </div>
            )
        }

    }








