import React, { useState, Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
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
