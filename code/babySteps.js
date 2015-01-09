$(document).on('click', '.show', function(){
  React.render(Component(), someElement);
});

$(document).on('click', '.remove', function(){
  React.unmountComponentAtNode(someElement);
})
