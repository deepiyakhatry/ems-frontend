import { ListGroup, ListGroupItem } from "reactstrap";

function Navbar() {
    return (
        <ListGroup>
            <ListGroupItem tag="a" href="#" action >従業員</ListGroupItem>
            <ListGroupItem tag="a" href="#" action >経費</ListGroupItem>
            <ListGroupItem tag="a" href="#" action >部署</ListGroupItem>
            <ListGroupItem tag="a" href="#" action >課</ListGroupItem>
            <ListGroupItem tag="a" href="#" action >ログアウト</ListGroupItem>
        </ListGroup>
    )
}

export default Navbar;