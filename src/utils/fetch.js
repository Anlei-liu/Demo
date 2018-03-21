import fetch from 'isomorphic-fetch';

const getText = () => {
  fetch('http://127.0.0.1:8080/api/text')
    .then((res) => {

    })
    .then((err) => {
      console.log(err);
    });
};

export { getText };
