import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function PostCard({ post }) {
  return (
    <Fragment>
      <Grid container direction="column"  justify="center">
        <Grid item xs={12}>
          <Card elevation={1}>
            <CardHeader title={post.title}></CardHeader>
            <CardContent>
              <Typography>{post.body}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
