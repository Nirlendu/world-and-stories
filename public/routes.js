var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Index = require('./index')
var CommentBox = require('./commentbox')
var Feed = require('./feed')

var AnotherPage = React.createClass({
  render: function() {
    return (<div>This is Another Page</div>)
  }
})

var routes = (
    <Route path="/" component={Index}>
      <IndexRoute component={Feed}/>
      <Route path="another-page" component={AnotherPage} />
    </Route>
)

module.exports = {
  routes: routes
}
