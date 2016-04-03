var React = require('react');
var ReactDOM = require('react-dom');
var DatePicker = require('react-datepicker');
var moment = require('moment');

// require('react-datepicker/dist/react-datepicker.css');

var HelloWorld = React.createClass({
    displayName: 'Example',

    getInitialState: function() {
        return {
            startDate: moment()
        };
    },

    handleChange: function(date) {
        this.setState({
            startDate: date
        });
    },

    render: function() {
        return <DatePicker
                   selected={this.state.startDate}
                   onChange={this.handleChange} />;
    }
});

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('content')
);
