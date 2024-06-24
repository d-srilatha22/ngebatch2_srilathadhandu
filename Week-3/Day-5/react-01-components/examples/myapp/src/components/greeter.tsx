export default function Greeter(){
    return <h1>Welcome to React training....</h1>
}


export const Cart=(a:string[])=>{
    return (a.length==0 ? <div>"Cart is empty, continue shopping"</div>
    : <div>a</div>
    )

}

export const ShowCart = (a: string[]) => {
  return a.length == 0 ? (
    <div>"Cart is empty, continue shopping"</div>
  ) : (
    <div>{a}</div>
  );
};

export const Hello = ():JSX.Element => {
    //emp = {name:}
    const name:string = "Srilatha";
    function getGreeting(user ?: string): JSX.Element{
        if(user)
            return <h6>{"Hello"+ user}</h6>
        return <h6>"Hello Stranger"</h6>
    
    }
    return (
        <>
        <p>{"Hello.."+name}</p>
        <h6>{getGreeting("Priya")}</h6>
        <p>{Cart(['app','banana'])}</p>
        </>
        )

}