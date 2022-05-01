let a = 0;
const scroll = () => {
  a += window.innerHeight - 100;
  console.log(a);
  // window.scroll({
  //     top: a,
  //     behavior:"smooth",
  // })
  window.scrollBy({
    top: document.body.clientHeight,
    behavior: 'smooth',
  });
};

export default scroll;
