var testName = 'Whitney';
var names = ['Andrew', 'Whitney', 'Banks', 'Penny'];
var count = 0;

var hello = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function() {
        return {name: testName};
    },
    render: function() {
        var valueLink = this.linkState('name');

        window.setInterval(function() {
            if (count > 3) {
                count = 0;
            }

            testName = names[count];
            valueLink.requestChange(testName);
            count += 1;
        }, 2000);
        return React.createElement('h1', null, 'Hello, ', valueLink.value);
    }
});

React.render(
    React.createElement(hello, {name: testName}),
    document.getElementById('container')
);
