package main

import (
	"net/http"

	"github.com/graphql-go/handler"
	"github.com/graphql-go/relay/examples/starwars"
)

func main() {

	// simplest relay-compliant graphql server HTTP handler
	// using Starwars schema from `graphql-relay-go` examples
	h := handler.New(&handler.Config{
		Schema: &starwars.Schema,
		Pretty: true,
	})

	// static file server to serve Graphiql in-browser editor
	fs := http.FileServer(http.Dir("static"))

	http.Handle("/graphql", h)
	http.Handle("/", fs)
	http.ListenAndServe(":8080", nil)
}
