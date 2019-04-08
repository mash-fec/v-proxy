# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions
1. Install MySql DB locally
2. Create database & tables by using :
    mysql -u root -p < schema.sql
2. Run the seed script with :
    npm seed
3. Run the node server with:
    npm server
   It will be hosted at port 3003
4. Build the images component with:
    npm build

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

#### API Requests

REQUEST (GET) : /house_images


RESPONSE :
{"results":[{"id":1,"house_id":1,"description":"house 1 image 1","image_url":"https://s3.us-east-2.amazonaws.com/mash-bnb-fec/aaron-huber-401200-unsplash.jpg"},{"id":2,"house_id":1,"description":"house 1 image 2","image_url":"https://s3.us-east-2.amazonaws.com/mash-bnb-fec/andre-benz-283764-unsplash.jpg"},{"id":3,"house_id":1,"description":"house 1 image 3","image_url":"https://s3.us-east-2.amazonaws.com/mash-bnb-fec/annie-spratt-536921-unsplash.jpg"},{"id":4,"house_id":1,"description":"house 1 image 4","image_url":"https://s3.us-east-2.amazonaws.com/mash-bnb-fec/aaron-huber-401200-unsplash.jpg"},{"id":5,"house_id":1,"description":"house 1 image 5","image_url":"https://s3.us-east-2.amazonaws.com/mash-bnb-fec/mash-bnb-fec/andre-benz-283764-unsplash.jpg"}]}

