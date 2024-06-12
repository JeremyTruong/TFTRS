import React from "react";
import { Grid, TextField, MenuItem, Typography, Button } from "@mui/material";

class ComparisonPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            summonerOne: "",
            summonerTwo: ""
        }
    }

    handleSummonerOneChange = (e) => {
        this.setState({
            summonerOne: e.target.value
        })
    }

    handleSummonerTwoChange = (e) => {
        this.setState({
            summonerTwo: e.target.value
        })
        console.log(this.state.summonerTwo);
    }

    handleCompareButtonClick = (e) => {
        this.setState({
        })
    }

    render() {
        return (<div>
            <Grid container justifyContent="center">
                <Typography variant="h6" my={3} gutterBottom>
                    Enter two summoner IDs to compare statistics!
                </Typography>
            </Grid>

            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            >
                <Grid item>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={this.handleSummonerOneChange}/>
                </Grid>
                <Grid item>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={this.handleSummonerTwoChange}/>
                </Grid>
            </Grid>

            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            marginY={4}
            >
                    <Button variant="contained" onClick={this.handleCompareButtonClick}>Compare</Button>
            </Grid>
            
            
            </div>);
    }
}

export default ComparisonPage;