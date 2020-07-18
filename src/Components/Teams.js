import React from 'react'

class Teams extends React.Component {

    state = {
        nbaTeams: []
    }


    // fetch call to api - sets the team data to state
    async componentDidMount() {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA`
        let response = await fetch(url)
        let data = await response.json()
        this.setState({ nbaTeams: data.teams })
    }

    renderTeams = () => {
        return (
            <div class="row">
                <ul>
                    {this.state.nbaTeams.map(element => (
                        <div className="col s2">
                            <div className="team-badge">
                                <li>
                                    <img src={element.strTeamBadge} className="logo" />
                                </li>
                            </div>

                            <div className="team-name">
                                <li>{element.strTeam}</li>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }



    render() {

        return (
            <div className="teams-container">
                {this.renderTeams()}
            </div>
        )
    }
}


export default Teams