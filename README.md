# The GitHub Codespaces version of my cheat sheets
## &#169; Hans de Rooij

### A Node.js Express server on my local PC

#### _Create a directory_

```sh
cd ~/Documents/dev
mkdir cheatSheets
cd cheatSheets
```

#### _Initialize Node Package Manager_

```sh
npm -v
npm init
```

#### _package.json parameters_

```sh
{
  "name": "cheatsheets",
  "version": "1.0.0",
  "description": "The GitHub Codespaces version of my cheat sheets",
  "main": "index.mjs",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "GitHub",
    "Codespaces",
    "cheat",
    "sheets"
  ],
  "author": "Hans de Rooij",
  "license": "Apache-2.0",
  "dependencies": {
    "express": "^4.18.1"
  }
}
```

#### _Edit server code_

```sh
vim index.mjs
```

#### _Server code_

```sh
import express from 'express';

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('My cheat cheets hosted on GitHub Codespaces')
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`)
});
```

#### _Install the Express module_

```sh
npm install express
```

#### _Node already was (globally) installed_

```sh
node -v
node index.mjs
```

Ça marche on http://localhost:3000

### Local version control

#### _Git basics_

```sh
git --version
touch .gitignore
echo 'node_modules' >> .gitignore
git init -b main
git add --all
git commit -m "First commit of my cheat sheets"
```

### Remote repository on GitHub

#### _Create a GitHub repository_

![image](https://user-images.githubusercontent.com/941489/174446103-510b2e46-3fe0-4cf5-82a7-3adfda5611c6.png)

#### _Connect the local repo to the one in the cloud_

```sh
git remote add origin https://github.com/hdr1001/ghcs-cheat-sheets.git
git branch -M main
git push -u origin main
```

#### _Application migration to Docker container_

Code developed for the Docker migration can be found in [this commit](https://github.com/hdr1001/ghcs-cheat-sheets/commit/4763b7fa99740185f818e1f8291559aa5e0dceae).

The following command build, run &amp; verify the Docker image/container:

```sh
cd ~/Documents/dev/ghcs-cheat-sheets
docker build -t $USER/cheat-sheets .
docker run -p 3003:3003 -d $USER/cheat-sheets
docker ps
docker logs <CONTAINER ID>
Open [http://localhost:3003](http://localhost:3003)
docker stop <CONTAINER ID>
docker system prune -a
```
