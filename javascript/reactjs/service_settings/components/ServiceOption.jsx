var ServiceOption = React.createClass({
    handleChange: function(event) {
        var self = this;
        var name = event.target.name;
        var options = this.props.options;

        // Loop through the options to find and set the state for the
        // selected option
        options.forEach(function(value, key) {
            if (value.name === name) {
                value.selected = event.target.checked;
                return;
            }
        });

        // Update the options in the Services.jsx parent
        this.props.onServiceChange({options});
    },
    render: function() {
        var self = this;
        return (
            <div>
                {this.props.options.map(function(option) {
                    return (
                        <li key={option.name}>
                            <label>
                                <input type="checkbox" onChange={self.handleChange} name={option.name} value={option.selected}/>
                                {option.name}
                            </label>
                        </li>
                    );
                })}
            </div>
        );
    } 
});
