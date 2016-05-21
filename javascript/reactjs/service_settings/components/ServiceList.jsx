var ServiceList = React.createClass({
    render: function() {
        var selectedOptions = [];

        this.props.services.forEach(function(value, key) {
            if (value.selected) {
                selectedOptions.push(value);
            }
        });

        return (
            <ul>
                {selectedOptions.map(function(service) {
                    return (
                        <li key={service.name}>{service.name}</li>
                    );
                })}
            </ul>
        );
    }
});
