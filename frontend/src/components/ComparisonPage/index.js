import React from "react";
import { Grid, TextField, MenuItem, Typography, Button } from "@mui/material";

class ComparisonPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
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
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Grid>
            </Grid>
            
            
            </div>);
    }
}

export default ComparisonPage;