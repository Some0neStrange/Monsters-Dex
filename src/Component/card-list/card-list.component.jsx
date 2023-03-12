import { Component } from "react";
import CardContainer from "../card-container/card-container.component";
import './card-list.css'

class CardList extends Component
{
    render()
    {
        const {monster} = this.props;
        return (
            <div className="card-list">
                {
                    monster.map((monster) =>
                    {
                        return (
                            <CardContainer monster={monster} />
                        );
                    })
                }
            </div>
        );
    }
}

export default CardList;