var HelloWorld = React.createClass({
  render: function(){
    return <h1 id="Hello">Hello World</h1>
  }
})
React.render(<HelloWorld />, document.body);
