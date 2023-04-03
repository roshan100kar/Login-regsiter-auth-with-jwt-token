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

### Middleware

1. Some kind of check or functionality injected in between
2. It can happend in routes
3. Or It can happend process between 
4. for e.g if you want to doing someting in database 
5. Just before save do something or just after save do something 
6. Some times it also called as lifecycle event or life cycle hooks


### Proctecting The Route

Markup : * Used Middleware

