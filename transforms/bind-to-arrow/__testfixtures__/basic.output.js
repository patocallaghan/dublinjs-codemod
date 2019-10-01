const obj = {
  id: 42,
  counter: function counter() {
    setTimeout(
      () => {
        console.log(this.id);
      },
      1000
    );
  },
};
