const express = require("express");
const morgan = require("morgan");
const path = require("path");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PROXY_PORT || 3000;

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public/dist")));

/////  CONFIG ROUTES FROM ENV  ///////////////
const [commentsRoute, projectsRoute, pledgesRoute, relatedRoute] = [
  "http://" +
    (process.env.COMMENTS_HOST || "localhost") +
    ":" +
    (process.env.COMMENTS_PORT || 3001),
  "http://" +
    (process.env.PROJECTS_HOST || "localhost") +
    ":" +
    (process.env.PROJECTS_PORT || 3002),
  "http://" +
    (process.env.PLEDGES_HOST || "ec2-18-234-245-254.compute-1.amazonaws.com") +
    ":" +
    (process.env.PLEDGES_PORT || 3003),
  "http://" +
    (process.env.RELATED_HOST ||
      "ec2-18-216-54-110.us-east-2.compute.amazonaws.com") +
    ":" +
    (process.env.RELATED_PORT || 3004)
];

app.get("/projects/:id", (req, res) => {
  axios
    .get(projectsRoute + "/projects/" + req.params.id)
    .then(project => {
      res.status(200);
      res.json(project.data);
    })
    .catch(err => {
      console.log("Error with GET request to Projects Services from Proxy");
      res.sendStatus(500);
    });
});

app.get("/related", (req, res) => {
  axios
    .get(relatedRoute + "/related")
    .then(list => {
      res.status(200);
      res.json(list.data);
    })
    .catch(err => {
      console.log("Error with GET request to Projects Services from Proxy");
      res.sendStatus(500);
    });
});

app.get("/related/:id", (req, res) => {
  axios
    .get(relatedRoute + "/related" + req.params.id)
    .then(list => {
      res.status(200);
      res.json(list.data);
    })
    .catch(err => {
      console.log("Error with GET request to Projects Services from Proxy");
      res.sendStatus(500);
    });
});

app.get("/pledges/:id", (req, res) => {
  axios
    .get(pledgesRoute + "/pledges/" + req.params.id)
    .then(list => {
      res.status(200);
      res.json(list.data);
    })
    .catch(err => {
      console.log(
        "Error with GET request to Projects Services from Proxy",
        err
      );
      res.sendStatus(500);
    });
});

app.post("/pledges", (req, res) => {
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", req.body);
  axios
    .post(pledgesRoute + "/pledges", req.body)
    .then(responseObj => {
      res.sendStatus(201);
      // res.send(responseObj);
    })
    .catch(err => {
      console.log("Error posting to pledges service");
      res.sendStatus(500);
    });
});

app.listen(port, () => {
  console.log(`Eric Proxy Server running at:${port}`);
});

////////////////////////////////////////////////
//////////////// Comments Routes ////////////////
////////////////////////////////////////////////

app.get("/comments/:id", (req, res) => {
  axios
    .get(commentsRoute + "/comments/" + req.params.id)
    .then(result => {
      res.status(200);
      res.json(result.data);
    })
    .catch(err => {
      console.log(
        "There was an error with GET request to comments server: ",
        err
      );
      res.sendStatus(500);
    });
});

app.post("/comments", (req, res) => {
  axios
    .post(commentsRoute + "/comments", req.body)
    .then(result => {
      res.status(201);
      res.json(result.data);
    })
    .catch(err => {
      console.log(
        "There was an error with POST request to comments server: ",
        err
      );
      res.sendStatus(500);
    });
});
