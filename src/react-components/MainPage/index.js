import React from "react";
import { Grid, TextField, MenuItem, Typography, Button } from "@mui/material";
import Header from "../Header";

// currently updated for set 11
// the number of unique champs in the game at each cost
let numUniqueChamps = [13, 13, 13, 12, 9]

// the amount of champions in the pool at each cost (bag sizes)
let numChampsInPool = [22, 20, 17, 10, 9]

// shop odds at each level
let rollingChances = [
    [100,0,0,0,0],
    [100,0,0,0,0],
    [75,25,0,0,0],
    [55,30,15,0,0],
    [45,33,20,2,0],
    [30,40,25,5,0],
    [20,33,36,10,1],
    [18,27,32,20,4],
    [15,20,25,30,10],
    [5,10,20,40,25],
    [1,2,12,50,35],
]

// possible levels to roll at
let levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// possible champions costs
let championCosts = [1, 2, 3, 4, 5]

// emulate Python's range function
let range = n => [...Array(n).keys()]

// emulate Python's randInt function
let randInt = (min, max) => {
    // max + 1 to include the maximum
    let ret = Math.floor(Math.random() * ((max + 1) - min)) + min
    return ret
}

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // the level of the player during the simulated roll down
            level: 7,
            // the cost of the champion we are rolling down for
            champCost: 4,
            // the number of the target champion currently owned by the player
            numOwned: 0,
            // the number of the target champion wanted
            numWanted: 1,
            // the number of the target champion currently owned by other players
            numOwnedByOthers: 0,
            // the number of champions of the same champCost, other than the target champion, that are removed from the pool
            numSameCostRemoved: 10,
            // the amount of gold we are rolling down with
            gold: 20,
            // the percentage of hitting calculated when rolldown is simulated
            percentage: 0
        }
    }

    // perform the rolldown with given state variables
    rolldown = () => {
        // deep copies of the current state
        let level = JSON.parse(JSON.stringify(this.state.level))
        let champCost = JSON.parse(JSON.stringify(this.state.champCost))
        let numOwned = JSON.parse(JSON.stringify(this.state.numOwned))
        let numWanted = JSON.parse(JSON.stringify(this.state.numWanted))
        let numOwnedByOthers = JSON.parse(JSON.stringify(this.state.numOwnedByOthers))
        let numSameCostRemoved = JSON.parse(JSON.stringify(this.state.numSameCostRemoved))
        let gold = JSON.parse(JSON.stringify(this.state.gold))

        // number of same cost champions left in the pool
        let numChampsLeft = numUniqueChamps[champCost - 1] * numChampsInPool[champCost - 1] - numOwned - numOwnedByOthers - numSameCostRemoved

        // number of target champions left in the pool
        let numTargetLeft = numChampsInPool[champCost - 1] - numOwned - numOwnedByOthers

        // chance of rolling a champion of champCost cost in one slot of the shop
        let chance = rollingChances[level - 1][champCost - 1]

        // refresh shop while we have enough gold to refresh and buy 1 copy
        while (gold >= champCost + 2 && numOwned < numWanted){
            // pay for refresh
            gold -= 2
            // generate 5 champs
            for (let i = 0; i < 5; i++){
                // roll unit cost 
                if (randInt(1, 100) <= chance){
                    // roll unit if the rolled unit cost matches
                    if (randInt(1, numChampsLeft) <= numTargetLeft && gold >= champCost && numOwned < numWanted){
                        numTargetLeft -= 1
                        numOwned += 1
                        gold -= champCost
                    }
                }
            }
        }

        return numOwned >= numWanted
    }

    // handlers for text field components
    handleLevelChange = (e) => {
        this.setState({
            level: e.target.value
        })
    }

    handleChampCostChange = (e) => {
        this.setState({
            champCost: e.target.value
        })
    }

    handleNumOwnedChange = (e) => {
        this.setState({
            numOwned: e.target.value
        })
    }

    handleNumWantedChange = (e) => {
        this.setState({
            numWanted: e.target.value
        })
    }

    handleNumOwnedByOthersChange = (e) => {
        this.setState({
            numOwnedByOthers: e.target.value
        })
    }

    handleNumSameCostRemovedChange = (e) => {
        this.setState({
            numSameCostRemoved: e.target.value
        })
    }
    
    handleGoldChange = (e) => {
        this.setState({
            gold: e.target.value
        })
    }

    handleRollButtonPress = (e) => {
        // deep copies of the current state
        let level = JSON.parse(JSON.stringify(this.state.level))
        let champCost = JSON.parse(JSON.stringify(this.state.champCost))
        let numOwned = JSON.parse(JSON.stringify(this.state.numOwned))
        let numWanted = JSON.parse(JSON.stringify(this.state.numWanted))
        let numOwnedByOthers = JSON.parse(JSON.stringify(this.state.numOwnedByOthers))
        let numSameCostRemoved = JSON.parse(JSON.stringify(this.state.numSameCostRemoved))
        let gold = JSON.parse(JSON.stringify(this.state.gold))

        // number of same cost champions left in the pool
        let numChampsLeft = numUniqueChamps[champCost - 1] * numChampsInPool[champCost - 1] - numOwned - numOwnedByOthers - numSameCostRemoved

        // number of target champions left in the pool
        let numTargetLeft = numChampsInPool[champCost - 1] - numOwned - numOwnedByOthers

        // chance of rolling a champion of champCost cost in one slot of the shop
        let chance = rollingChances[level - 1][champCost - 1]
        
        let numTrials = 50000
        let numHits = 0

        for (let i = 0; i < numTrials; i++){
            if (this.rolldown()){
                numHits += 1
            }
        }
        // console.log(numHits)

        this.setState({
            percentage: ((numHits / numTrials) * 100).toFixed(2)
        })
    }

    render() {
        return (<div>
            <Header></Header>

            <Grid container justifyContent="center">
                <Typography variant="h1" my={3} gutterBottom>
                    TFT Roll Down Simulator
                </Typography>
            </Grid>

            <Grid container justifyContent="center">
                <Typography variant="h6" my={3} gutterBottom>
                    Enter the variables below and press roll to calculate the chance of you hitting!
                </Typography>
            </Grid>

            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            my={3}
            >
                <Grid container item xs={12} justifyContent="center" alignItems="center">
                    <Grid container item xs={1} direction="column" alignItems="center">
                        <Typography variant="button" display="block" gutterBottom>
                            Level
                        </Typography>
                        <TextField id="level" size="small" variant="outlined" select defaultValue={this.state.level} onChange={this.handleLevelChange}>
                            {levels.map((level) => (
                                <MenuItem key={level} value={level}>
                                    {level}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    <Grid container item xs={1} direction="column" alignItems="center">
                        <Typography variant="button" display="block" gutterBottom>
                            Cost
                        </Typography>
                        <TextField id="champCost" size="small" variant="outlined" select defaultValue={this.state.champCost} onChange={this.handleChampCostChange}>
                            {championCosts.map((cost) => (
                                <MenuItem key={cost} value={cost}>
                                    {cost}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    <Grid container item xs={1} direction="column" alignItems="center">
                        <Typography variant="button" display="block" gutterBottom>
                            Owned
                        </Typography>                
                        <TextField id="numOwned" size="small" variant="outlined" select defaultValue={this.state.numOwned} onChange={this.handleNumOwnedChange}>
                            {range(numChampsInPool[this.state.champCost - 1] + 1).map((amount) => (
                                <MenuItem key={amount} value={amount}>
                                    {amount}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    <Grid container item xs={1} direction="column" alignItems="center">
                        <Typography variant="button" display="block" gutterBottom>
                            Wanted
                        </Typography>                
                        <TextField id="numOwned" size="small" variant="outlined" select defaultValue={this.state.numWanted} onChange={this.handleNumWantedChange}>
                            {range(numChampsInPool[this.state.champCost - 1] + 1).map((amount) => (
                                <MenuItem key={amount} value={amount}>
                                    {amount}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    <Grid container item xs={1} direction="column" alignItems="center">
                        <Typography variant="button" display="block" gutterBottom>
                            Owned By Others
                        </Typography>   
                        <TextField id="numOwnedByOthers" size="small" variant="outlined" select defaultValue={this.state.numOwnedByOthers} onChange={this.handleNumOwnedByOthersChange}>
                            {range(numChampsInPool[this.state.champCost - 1] + 1).map((amount) => (
                                <MenuItem key={amount} value={amount}>
                                    {amount}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    
                    <Grid container item xs={1} direction="column" alignItems="center">
                        <Typography variant="button" display="block" gutterBottom>
                            Same Cost Removed
                        </Typography>  
                        <TextField id="numSameCostRemoved" size="small" variant="outlined" select defaultValue={this.state.numSameCostRemoved} onChange={this.handleNumSameCostRemovedChange}>
                            {range(numChampsInPool[this.state.champCost - 1] * numUniqueChamps[this.state.champCost - 1] + 1).map((amount) => (
                                <MenuItem key={amount} value={amount}>
                                    {amount}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    
                    <Grid container item xs={1} direction="column" alignItems="center">
                        <Typography variant="button" display="block" gutterBottom>
                            Gold
                        </Typography>  
                        <TextField id="gold" size="small" fullWidth variant="outlined" defaultValue={this.state.gold} type="number" onChange={this.handleGoldChange} style={{maxWidth: '70px'}}>
                        </TextField>
                    </Grid>
                </Grid>
            </Grid>

            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            >
                <Grid item my={3}>
                    <Button variant="contained" color="success" onClick={this.handleRollButtonPress} style={{minWidth: '100px'}}>
                        Roll
                    </Button>
                </Grid>
            </Grid>

            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            >
                <Grid item my={5}>
                    <Typography variant="h3" gutterBottom>
                        Chance of hitting: {this.state.percentage}%
                    </Typography>
                </Grid>
            </Grid>

        </div>);
    }
}

export default MainPage;