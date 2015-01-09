var test = React.addons.TestUtils;
describe('Component', function() {
  it('should have a val of 1', function() {
    var c = test.renderIntoDocument(Component());
    test.Simulate.click(c.refs.buttonA.getDOMNode());
    c.state.val.should.equal(1);
  });
});
