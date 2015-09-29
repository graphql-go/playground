# golang-graphql-playground
An example Golang GraphQL server written with [graphql-go](https://github.com/chris-ramon/graphql-go) and [graphql-relay-go](https://github.com/sogko/graphql-relay-go)

Try the live demo [here](http://golang-graphql.rhcloud.com/)

## Note
(2015-Sept-30) Currently this uses an experimental branch of [graphql-go](https://github.com/chris-ramon/graphql-go), pending PR merge.

### Features
- [graphql-go](https://github.com/chris-ramon/graphql-go): Golang GraphQL library
- [graphql-relay-go](https://github.com/sogko/graphql-relay-go): Golang GraphQL library helper to construct Relay-compliant server
- [graphiql](https://github.com/graphql/graphiql): In-browser IDE to explore GraphQL queries
- [Starwars GraphQL Schema](https://github.com/sogko/graphql-relay-go/tree/master/examples/starwars): GraphQL example schema defined with Relay capabilities with the help of `graphql-relay-go`.

### To run locally
```bash
# `cd` to project directory
$ cd <project_dir>

# get all dependencies
$ go get ./...

# launch server
$ go run main.go

# Go to http://localhost:8080 on your browser
```
