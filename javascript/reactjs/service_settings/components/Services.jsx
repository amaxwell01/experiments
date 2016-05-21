var Services = React.createClass({
    getInitialState: function() {
        var services = [
            {
                name: 'Google Drive',
                selected: false
            },
            {
                name: 'Github',
                selected: false
            },
            {
                name: 'Bitbucket',
                selected: false
            },
            {
                name: 'Google Code',
                selected: false
            }
        ];

        return {services};
    },
    handleServiceChange: function(services) {
        this.setState(services.options);
    },
    save: function() {
        console.log(this.state.services);
    },
    render: function() {
        return (
            <div>
                <section>
                    <ul>
                        <ServiceOption options={this.state.services} onServiceChange={this.handleServiceChange}/>
                    </ul>

                    <button type="button" onClick={this.save}>Save</button>
                </section>
                <section>
                    <h2>Selected Services</h2>
                    <ServiceList services={this.state.services} ref="list"/>
                </section>
            </div>
        );
    }
});
