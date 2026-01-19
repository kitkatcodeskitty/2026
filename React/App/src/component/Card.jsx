function Card(props){
    return (
        <> 
        <div className=" bg-amber-100 p-4 w-82">
          <div className="h-80 w-72 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop')]"></div>
          <h2 className="font-sans text-xl font-bold">{props.name}</h2>
          <p></p>
          <button className="px-4 py-1 bg-white border">
            add friend
          </button>
        </div>
        </>
    )
}



export default Card;