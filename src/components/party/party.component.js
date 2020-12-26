import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

export default function Party() {
    const user = useContext(UserContext);
    const [redirectTo, setRedirectTo] = useState("");
    const [party, setParty] = useState({});
    const [players, setPlayers] = useState([]);
    const [gameMode, setGameMode] = useState("Classic");
    const [error, setError] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get("/api/party", { withCredentials: true })
                .then(res => {
                    if (res.status === 200) {
                        console.log(res.data);
                        setParty(res.data);
                        if (res.data && res.data.players) {
                            setPlayers(res.data.players.map((player) =>
                                <div key={player.username} className="p-2 justify-content-between">
                                    <button type="button" className="btn btn-light">
                                        <span>{player.username} </span>
                                        {
                                            player.isAlive ?
                                                <span className="badge badge-success">Alive</span> :
                                                <span className="badge badge-danger">Dead</span>
                                        }
                                        <span> </span>
                                        {
                                            player.isAdmin &&
                                            <span className="badge badge-primary">Admin</span>
                                        }
                                    </button>
                                </div>
                            ));
                        }
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    function onStartParty(e) {
        e.preventDefault();

        axios.post("/api/start", { gameMode: gameMode }, { withCredentials: true })
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                }
            })
            .catch(err => {
                console.log(err);
                setError(err.response.data);
            });
    }

    function onLeaveParty(e) {
        e.preventDefault();

        axios.get("/api/leave", { withCredentials: true })
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    user.setPartyCode("");
                    user.setIsAdmin(false);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    if (redirectTo) return <Redirect to={{ pathname: redirectTo }} />;
    return (
        <div className="text-center">
            {
                error &&
                <div className="alert alert-danger" role="alert">{error}</div>
            }
            <h4>Party Code: <b>{user.partyCode}</b></h4>
            <br />
            {
                party.isStarted &&
                <div>
                    <h6>Target: </h6>
                    <button type="button" className="btn btn-light">{party.target}</button>
                </div>
            }
            <br />
            <div>
                <h6>Players: </h6>
                <div className="d-flex flex-wrap justify-content-center align-items-top">
                    {players}
                </div>
            </div>
            <br />
            {
                !party.isStarted &&
                user.isAdmin &&
                <form onSubmit={onStartParty}>
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column sm={4}>Game Mode:</Form.Label>
                            <Col sm={8}>
                                <Form.Control as="select" defaultValue={gameMode} onChange={e => setGameMode(e.target.value)}>
                                    <option>Classic</option>
                                    <option>Shuffle</option>
                                </Form.Control>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <div className="form-group">
                        <input type="submit" value="Start Party" className="btn btn-primary" />
                    </div>
                </form>
            }
            <form onSubmit={onLeaveParty}>
                <div className="form-group">
                    <input type="submit" value="Leave Party" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}