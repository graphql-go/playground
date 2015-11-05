# golang-graphql-playground
An example Golang GraphQL server written with [graphql-go](https://github.com/graphql-go/graphql) and [graphql-relay-go](https://github.com/graphql-go/relay)

Try the live demo: http://bit.ly/try-graphql-go 

### Features
- [graphql-go](https://github.com/graphql-go/graphql): Golang GraphQL library
- [graphql-relay-go](https://github.com/graphql-go/relay): Golang GraphQL library helper to construct Relay-compliant server
- [graphiql](https://github.com/graphql/graphiql): In-browser IDE to explore GraphQL queries
- [Starwars GraphQL Schema](https://github.com/graphql-go/relay/tree/master/examples/starwars): GraphQL example schema defined with Relay capabilities with the help of `graphql-relay-go`.

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
