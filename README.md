# user auth system
### Register User
```ruby
app.post("/register", (req, res) => {
```

### Get All Information

```ruby
 const {firstname, lastname, email, password} =  req.body;
``` 
 
### Check mandaotry fields
```ruby
if (!(email && password && firstname && lastname)) {
        res.status(400).send('All fields are required')
    } 
```    
### check already registered

```ruby
 const existingUser = User.findOne({email});

    if(existingUser) {
        res.status(401).send('User Already exists')
    }
    
 ```   
### Take care of password
### Generate token or send success message
