$(function (global) {
  /**
   * This GraphiQL example illustrates how to use some of GraphiQL's props
   * in order to enable reading and updating the URL parameters, making
   * link sharing of queries a little bit easier.
   *
   * This is only one example of this kind of feature, GraphiQL exposes
   * various React params to enable interesting integrations.
   */

  // Parse the search string to get url parameters.
  var search = window.location.search;
  var parameters = {};
  search.substr(1).split('&').forEach(function (entry) {
    var eq = entry.indexOf('=');
    if (eq >= 0) {
      parameters[decodeURIComponent(entry.slice(0, eq))] =
          decodeURIComponent(entry.slice(eq + 1));
    }
  });

  // if variables was provided, try to format it.
  if (parameters.variables) {
    try {
      parameters.variables =
          JSON.stringify(JSON.parse(query.variables), null, 2);
    } catch (e) {
      // Do nothing
    }
  }

  // When the query and variables string is edited, update the URL bar so
  // that it can be easily shared
  function onEditQuery(newQuery) {
    parameters.query = newQuery;
    updateURL();
  }

  function onEditVariables(newVariables) {
    parameters.variables = newVariables;
    updateURL();
  }

  function updateURL() {
    var newSearch = '?' + Object.keys(parameters).map(function (key) {
          return encodeURIComponent(key) + '=' +
              encodeURIComponent(parameters[key]);
        }).join('&');
    history.replaceState(null, null, newSearch);
  }

  // Defines a GraphQL fetcher using the fetch API.
  function graphQLFetcher(graphQLParams) {
    return fetch(window.location.origin + '/graphql', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(graphQLParams)
    }).then(function (response) {
      return response.json()
    });
  }

  global.renderGraphiql = function (elem) {
    // Render <GraphiQL /> into the body.
    var toolbar = React.createElement(GraphiQL.Toolbar, {}, [
      "Source available at ",
      React.createElement("a", {
        href: "https://github.com/sogko/golang-graphql-playground",
      }, "github")
    ]);
    React.render(
        React.createElement(GraphiQL, {
          fetcher: graphQLFetcher,
          query: parameters.query,
          variables: parameters.variables,
          onEditQuery: onEditQuery,
          onEditVariables: onEditVariables,
          defaultQuery:
            "# Welcome to GraphiQL\n" +
            "#\n" +
            "# GraphiQL is an in-browser IDE for writing, validating, and\n" +
            "# testing GraphQL queries.\n" +
            "#\n" +
            "# Type queries into this side of the screen, and you will\n" +
            "# see intelligent typeaheads aware of the current GraphQL type schema and\n" +
            "# live syntax and validation errors highlighted within the text.\n" +
            "#\n" +
            "# To bring up the auto-complete at any point, just press Ctrl-Space.\n" +
            "#\n" +
            "# Press the run button above, or Cmd-Enter to execute the query, and the result\n" +
            "# will appear in the pane to the right.\n\n" +
            "query RebelsShipsQuery {\n  rebels {\n    name\n    ships(first: 1) {\n      edges {\n" +
            "        node {\n          name \n        }\n      }\n    }\n  }\n}"
        }, toolbar),
        elem
    );
  }
}(window))
