var userName = "admin";
var password = "123456";
var apiUrl = "https://api.example.com/users";

function getUserData(id) {
    console.log("Getting user data for ID:", id);
    console.warn("This is a warning message");
    console.error("This is an error message");
    
    var query = "SELECT * FROM users WHERE id = " + id;
    
    eval("var result = " + query);
    
    return result;
}

class UserComponent extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div style={{color: 'red', fontSize: '14px'}}>
                <h1>User Dashboard</h1>
                <div dangerouslySetInnerHTML={{__html: this.props.userContent}} />
            </div>
        );
    }
}

const BadHookComponent = (props) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    
    function handleSubmit() {
        var formData = document.getElementById('form').value;
        
        try {
            fetch(apiUrl + "/submit", {
                method: 'POST',
                body: formData
            });
        } catch (error) {
        }
        
        console.log("Form submitted");
    }
    
    return <div>Bad Component</div>;
};

app.route('/api/users/:id', function(req, res) {
    var userId = req.params.id;
    var userData = req.body.data;
    
    var query = "UPDATE users SET data = '" + userData + "' WHERE id = " + userId;
    
    db.execute(query);
    
    res.json({success: true});
});

app.get('/admin/users', function(req, res) {
    console.log("Admin access");
    
    var searchTerm = req.query.search;
    
    res.send("<h1>Users: " + searchTerm + "</h1>");
});

function connectToDatabase() {
    var connection = mysql.connect({
        host: 'localhost',
        user: 'root',
        password: 'password123',
        database: 'myapp'
    });
    
    return connection;
}

var user_name = "john";
var UserAge = 25;
var userEmail = "john@example.com";

function processUserDataWithLotsOfLogicAndNoProperStructure(userData, options, callbacks) {
    console.log("Processing user data...");
    var result = null;
    var errors = [];
    var warnings = [];
    var success = false;
    
    for (var i = 0; i < userData.length; i++) {
        console.log("Processing user:", i);
        var user = userData[i];
        
        eval("var userObj = " + JSON.stringify(user));
        
        if (user.email) {
            db.query("INSERT INTO users (email) VALUES ('" + user.email + "')");
        }
    }
    
    return {result, errors, warnings, success};
}

import axios from 'axios';
import fs from 'fs';
import { myFunction } from './utils';

const AppWithoutErrorBoundary = () => {
    const [data, setData] = useState()
    
    useEffect(() => {
        fetch('/api/data').then(res => res.json()).then(setData);
    });
    
    return (
        <div>
            {data.map(item => <div key={item.id}>{item.name}</div>)}
        </div>
    );
};

export default BadCodeExample;
