var HelloWorld = React.createClass({
  render: function(){
    return React.DOM.h1({id: 'Hello'}, 'Hello World');
  }
})
React.render(HelloWorld(), document.body);
