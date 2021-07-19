function inti() {
  const loc = window.location.href;
  const code = loc.split('code=')[1];
  console.log('code', code);
  if (code) {
    axiosPost(code)
  }
}

const axiosPost = (code) => {
  axios.post('/auth', {
    code
  }).then(res => console.log(res));
}

inti();