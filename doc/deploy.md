# Deploy

## Test Local

```
  cd ng2
  ng build
  cd ..
  cd static
  live-server .
```  

## Deploy to server

```
  mkdir public
  cd public
  cp -R ../static/* .
  cp -R ../ng2/dist angular2
  edit index.html to set base => /angular2/
```  
