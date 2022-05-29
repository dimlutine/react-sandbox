import { useRef } from 'react'

function useRefExample1() {
    const inputRef = useRef()
    const paraRef = useRef()

    const onSubmit = e => {
        e.preventDefault()
        console.log(inputRef)
        inputRef.current.value = 'Howdy partner'
        inputRef.current.style.backgroundColor = 'purple'
        paraRef.current.innerText = 'bloobity blah blah'
    }

  return (
    <div>
        <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" ref={inputRef} id='name' className="form-control mb-2" />
        <button className="btn btn-primary" type='submit'>Clicky Clicky</button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>Sup</p>
        </form>
    </div>
  )
}
export default useRefExample1