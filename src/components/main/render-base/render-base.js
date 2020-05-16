import React, {Component} from 'react'
import Renderer from "../../../services/renderer-API";
import './render-base.scss';




export default class RenderBase extends Component {

        renderer = new Renderer();

        toJSX = () => {
            const { type, base } = this.props;
            const {
                usersToHTML,todosToHTML,postsToHTML,albumsToHTML,photosToHTML,commentsToHTML
            } = this.renderer;

            switch (type) {
                case "users":
                    return <div className="grid grid_twocol">{base.map(usersToHTML)}</div>;
                case "todos":
                    return <div className="grid grid_fourcol">{base.map(todosToHTML)}</div>;
                case "posts":
                    return <div className="grid grid_thrcol">{base.map(postsToHTML)}</div>;
                case "albums":
                    return <div className="grid grid_thrcol">{base.map(albumsToHTML)}</div>;
                case "photos/?albumId=1":
                    return <div className="grid grid_thrcol">{base.map(photosToHTML)}</div>;
                case "comments":
                    return <div className="grid grid_twocol">{base.map(commentsToHTML)}</div>
            }
        }




        render() {
            const { base }  = this.props;

            const nothingMatchedOrContent = base.length === 0 ? <div className="note">No items matched</div> : this.toJSX()

            return (
                <div className="pt-4 flex-grow-1 overflow-auto">
                    <div className="container-lg h-100">
                        {nothingMatchedOrContent}
                    </div>
                </div>
            )
        }
    }








