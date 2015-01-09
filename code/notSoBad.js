return BaseView.extend( {
  initialize: function ( options ) {
    new Collection().fetch().then(function(data){
      this.collection = data;
    })
  },
  render: function () {
    var template = _.template( myViewTemplate, {collection: this.collection} );
    this.$el.html( template );
  }
} );
