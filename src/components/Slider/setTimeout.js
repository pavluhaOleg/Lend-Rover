export function Timer(elem, setElem) {

  return setInterval(() => {
    if (elem >= -300) {
      setElem(elem += -100)
    }
    if (elem === -300) {
      setElem(0);
    }
  }, 3000)

}