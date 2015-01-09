return BaseView.extend( {
  events: {
    'click .filterModel': 'aHandler'
  },
  aHandler: function( e ){
    e.preventDefault();
    renderAgain( _.extend( this.collection, {
      model: $( e.currentTarget ).data( 'modelNumber' )
    } ) );
  },
  render: function () {...}
  renderAgain: function ( newState ) {...}
} );
