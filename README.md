# Deploy Nodejs project to Amazon EC2 with Github Actions

## After successfully connecting github to remote server follow this commands


## Choose a workflow
![2024-04-03_08-54](https://github.com/fch-bsp/aws-nodejs-deploy/assets/102867453/c9594f06-215e-4506-8254-4eefe6eb877f)

## Runners

![2024-04-03_08-56](https://github.com/fch-bsp/aws-nodejs-deploy/assets/102867453/f19b743c-c2eb-457f-8c05-0d06bd62d133)
![2024-04-03_08-56_1](https://github.com/fch-bsp/aws-nodejs-deploy/assets/102867453/b54d7eb0-5afe-40f8-90d0-f87a7f73a9a3)
![2024-04-03_08-f59](https://github.com/fch-bsp/aws-nodejs-deploy/assets/102867453/2e6cea0b-cf90-4605-9263-b845a2a145d6)

### Step 1: Update Package Repositories

![Diagrama em branco (17)](https://github.com/fch-bsp/aws-nodejs-deploy/assets/102867453/71123d2b-63c3-426b-bbf2-48adb77d75d0)



Run the following command to update your package repositories:

```bash
sudo apt update
```

### Step 2: Install Node.js

Install Node.js using the following command:

```bash
sudo apt-get install -y nodejs npm
```

### Step 3: Install Nginx

Install Nginx to act as a reverse proxy for your Node.js application:

```bash
sudo apt-get install -y nginx
```

### Step 4: Install PM2

Install PM2 globally to manage your Node.js application:

```bash
sudo npm i -g pm2
```


### Step 5: Configure Nginx

Navigate to the Nginx sites-available directory and open the default configuration file for editing:

```bash
cd /etc/nginx/sites-available
sudo vi default
```

Inside the Nginx configuration file, add the following block to configure the reverse proxy for your API:

```nginx
location /api {
    rewrite ^\/api\/(.*)$ /api/$1 break;
    proxy_pass http://localhost:8000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```
```bash
cd /etc/nginx/sites-available

```
### Step 6: Restart Nginx

After making changes to the Nginx configuration, restart Nginx to apply the changes:

```bash
sudo systemctl restart nginx
```
```bash
sudo systemctl status nginx
```
```bash
sudo systemctl start nginx
```

### Step 7: Start Your Node.js Application with PM2

Navigate to your project directory and start your Node.js application using PM2. Replace `server.js` with the actual filename of your Node.js application:

```bash
cd /path/to/your/app
pm2 start server.js --name=Backend
```
![2024-04-03_08-52](https://github.com/fch-bsp/aws-nodejs-deploy/assets/102867453/2c48d3af-7eaf-444d-9916-89253b763f0f)


### Step 8: Restart Your Node.js Application with PM2 (Optional)

If you need to restart your Node.js application managed by PM2, you can use the following command:

```bash
pm2 restart Backend
```

These steps should help you set up a Node.js backend API with Nginx and PM2 on your Debian-based Linux system. Make sure to customize the paths and filenames according to your specific project.

# Application running

## http://3.18.20.84/api/get_user_details
![2024-04-03_09-07](https://github.com/fch-bsp/aws-nodejs-deploy/assets/102867453/e35fc0e1-5fc2-4bd3-b20e-635e4945fd3e)

## http://3.18.20.84/api
![f2024-04-03_09-08](https://github.com/fch-bsp/aws-nodejs-deploy/assets/102867453/cc181a75-dd01-4639-b85c-8e8030be792d)

