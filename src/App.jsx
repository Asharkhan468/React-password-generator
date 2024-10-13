import { useState , useCallback , useEffect , useRef } from "react"


function App(){

  let [password , setPassword] = useState(null)

  let [lenght , setLenght] = useState(8)

  let [numAllowed , setNumAllowed] = useState(false)

  let [charAllowed , setCharAllowed] = useState(false)

  let passwordRef = useRef('');

  //Copy password to the clipboard function

  const copyToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select(password)
  } , [password])



  const passwordGenerator = useCallback(()=>{

    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()-_=+[]{}|;:,.<>?/~"

    for(let i=0 ; i<=lenght ; i++){
      let char = Math.round(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }

    


    
    
    
    
    setPassword(pass)
    
    
    
    
    
    
    
    
  } , [lenght , numAllowed ,  charAllowed , setPassword])



  useEffect(() =>{
    passwordGenerator()
  } , [lenght , charAllowed , numAllowed , passwordGenerator])


  
  
  return(
    <>

    <h1 className="text-3xl font-bold text-center mt-3 text-white">Password Generator</h1>

    <div className="w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-white text-center my-3">Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">

        <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="Password" ref={passwordRef} readOnly />

        <button onClick={copyToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>

        

      </div>

      <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={40} value={lenght} className="cursor-pointer" onChange={(e)=>setLenght(e.target.value)} />

            <label>length:{lenght}</label>


            

          </div>


            <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={numAllowed} id="numberInput" onChange={()=>setNumAllowed((prev)=> !prev)} />



          

          </div>
          <label htmlFor="numberInput">Numbers</label>


           <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={charAllowed} id="characterInput" onChange={()=>setCharAllowed((prev)=> !prev)} />



          

          </div>
          <label htmlFor="characterInput">Character</label>



 

        </div>



      

        

    </div>



    </>
  )
}


export default App