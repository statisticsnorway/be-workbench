require('dotenv').config()

const test = {
  api: {
    notebookService: 'mock/api/',
  }
};

const development = {
  api: {
    notebookService: 'http://localhost:8080/api/',
  }
};

const staging = {
  api: {
    notebookService: 'http://bt3zzivqj5dptfsrkhyd2hjcdm-dot-europe-north1.dataproc.googleusercontent.com/zeppelin/api/',
  }
};

module.exports = {
  test: test,
  development: development,
  staging: staging,
};