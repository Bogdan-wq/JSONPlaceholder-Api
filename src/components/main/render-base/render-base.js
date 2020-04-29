import React, {Component} from 'react'
import Renderer from "../../../services/renderer-API";
import './render-base.scss';
import Spinner from "../../spinner";
import ErrorIndicator from "../../errorindicator";



export default class RenderBase extends Component {

        renderer = new Renderer();

        toJSX = () => {
            const { state : {type , base}  } = this.props;
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
            const { state : {base,loading,error} } = this.props;


            const Loading = loading && !error ? <Spinner />: null;

            const ErrorMessage = !loading && error ? <ErrorIndicator /> : null;

            const JSXarray = !loading && !error && base.length !== 0 ? this.toJSX() : null;

            const NothingMatched = base && base.length === 0  ? <div className="note">No items matched</div> : null;




            return (
                <div className="pt-4 flex-grow-1 overflow-auto">
                    <div className="container-lg h-100">
                        {Loading}
                        {JSXarray}
                        {ErrorMessage}
                        {NothingMatched}
                    </div>
                </div>
            )
        }
    }








