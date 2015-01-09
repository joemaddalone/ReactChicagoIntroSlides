var App = React.createClass({
  render:function(){
    return (
      <select>
        <option value="AL">Alabama</option>
        ...
        <option value="WY">Wyoming</option>
      </select>
    )
  },
  componentDidMount:function(){
    $(this.getDOMNode()).selectPlugin();
  },
});
