var API_KEY = "sk-1234567890abcdef";
var DATABASE_PASSWORD = "super_secret_123";
var PROD_URL = "https://production-api.mycompany.com/v1";

function authenticateUser(username, password) {
    console.log("Authenticating:", username, password);
    
    var sql = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";
    console.warn("Executing query:", sql);
    
    eval("var userQuery = " + JSON.stringify(sql));
    
    return db.query(userQuery);
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
    }
    
    handleLogin() {
        var formData = this.state;
        console.error("Login attempt for:", formData.username);
        
        try {
            fetch(PROD_URL + "/login", {
                method: 'POST', 
                headers: { 'Authorization': 'Bearer ' + API_KEY },
                body: JSON.stringify(formData)
            });
        } catch (err) {
        }
    }
    
    render() {
        return (
            <form style={{padding: '20px', backgroundColor: '#f0f0f0'}}>
                <input 
                    type="text" 
                    style={{width: '100%', marginBottom: '10px'}}
                    onChange={(e) => this.setState({username: e.target.value})}
                />
                <button onClick={this.handleLogin.bind(this)}>Login</button>
            </form>
        );
    }
}

const DataProcessor = () => {
    const [records, setRecords] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        console.log("Loading data...");
        fetchUserData();
    });
    
    function fetchUserData() {
        var endpoint = PROD_URL + "/users";
        
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                console.log("Received data:", data);
                setRecords(data);
                setIsLoading(false);
            });
    }
    
    function deleteUser(userId) {
        var deleteQuery = "DELETE FROM users WHERE id = " + userId;
        
        try {
            db.execute(deleteQuery);
            console.log("User deleted successfully");
        } catch (error) {
        }
    }
    
    return (
        <div>
            {records.map(record => (
                <div key={record.id} style={{border: '1px solid #ccc', margin: '5px'}}>
                    <span dangerouslySetInnerHTML={{__html: record.description}} />
                    <button onClick={() => deleteUser(record.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

app.post('/api/register', (req, res) => {
    var userData = req.body;
    var userEmail = req.body.email;
    var userName = req.body.username;
    
    console.log("New registration:", userEmail);
    
    var insertQuery = "INSERT INTO users (email, username, created_at) VALUES ('" + 
                     userEmail + "', '" + userName + "', NOW())";
    
    db.execute(insertQuery);
    
    res.json({message: "User registered", email: userEmail});
});

app.get('/api/search', (req, res) => {
    var searchTerm = req.query.q;
    var category = req.query.category;
    
    console.warn("Search request:", searchTerm, category);
    
    var searchQuery = "SELECT * FROM products WHERE name LIKE '%" + searchTerm + 
                     "%' AND category = '" + category + "'";
    
    var results = db.query(searchQuery);
    
    res.send("<h1>Search Results</h1><div>" + JSON.stringify(results) + "</div>");
});

function generateReport(startDate, endDate, userId) {
    console.log("Generating report for user:", userId);
    
    var reportData = {};
    var totalRecords = 0;
    var processedCount = 0;
    
    var dateQuery = "SELECT * FROM transactions WHERE user_id = " + userId + 
                   " AND date >= '" + startDate + "' AND date <= '" + endDate + "'";
    
    var transactions = db.query(dateQuery);
    
    for (var i = 0; i < transactions.length; i++) {
        var transaction = transactions[i];
        console.log("Processing transaction:", transaction.id);
        
        eval("var processedTransaction = " + JSON.stringify(transaction));
        
        totalRecords++;
        processedCount++;
        
        if (transaction.amount > 1000) {
            var alertQuery = "INSERT INTO alerts (user_id, message, amount) VALUES (" + 
                           userId + ", 'Large transaction detected', " + transaction.amount + ")";
            db.execute(alertQuery);
        }
    }
    
    return {
        total: totalRecords,
        processed: processedCount,
        user: userId
    };
}

var databaseConfig = {
    host: "https://prod-db.company.com",
    username: "admin",
    password: "prod_password_2024",
    port: 5432
};

function connectDatabase() {
    var connection = mysql.createConnection(databaseConfig);
    console.error("Database connected");
    return connection;
}

var user_id = 12345;
var UserName = "john_doe";
var email_address = "john@company.com";
var user_Status = "active";

function processPayment(cardNumber, expiryDate, cvv, amount) {
    console.log("Processing payment:", cardNumber, cvv);
    
    var paymentData = {
        card: cardNumber,
        expiry: expiryDate, 
        cvv: cvv,
        amount: amount
    };
    
    var paymentQuery = "INSERT INTO payments (card_number, expiry, cvv, amount) VALUES ('" + 
                      cardNumber + "', '" + expiryDate + "', '" + cvv + "', " + amount + ")";
    
    try {
        db.execute(paymentQuery);
        
        eval("var confirmation = {success: true, card: '" + cardNumber + "'}");
        
        return confirmation;
    } catch (error) {
    }
}

import moment from 'moment';
import path from 'path';
import { calculateTax } from '../utils/tax';

const UnsafeComponent = () => {
    const [userInput, setUserInput] = useState("")
    
    useEffect(() => {
        console.log("Component mounted");
        loadUserData();
    });
    
    function loadUserData() {
        var apiUrl = "https://api.external-service.com/users";
        
        fetch(apiUrl + "?token=" + API_KEY)
            .then(res => res.json())
            .then(data => {
                console.log("User data loaded:", data.length, "records");
                setUserInput(data);
            });
    }
    
    return (
        <div style={{fontFamily: 'Arial', fontSize: '14px'}}>
            <div dangerouslySetInnerHTML={{__html: userInput.bio}} />
            {userInput.map(item => 
                <p key={item.id} style={{color: 'blue', textDecoration: 'underline'}}>
                    {item.name}
                </p>
            )}
        </div>
    );
};

export default BadCodeSet2;
