import React from 'react'

class Teams extends React.Component {


    state = {
        nbaTeams: []
    }


    // fetch call to api - sets the 
    async componentDidMount() {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA`
        let response = await fetch(url)
        let data = await response.json()
        this.setState({ nbaTeams: data.teams })
    }




    render() {
        console.log(this.state.nbaTeams)
        return (
            <div>
                <h1>Teams Component</h1>
            </div>
        )
    }
}


export default Teams