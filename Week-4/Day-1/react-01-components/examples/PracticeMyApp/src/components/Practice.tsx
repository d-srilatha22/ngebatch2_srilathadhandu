export default function GreetMe() {
  return <p>Hello.. welcome to my website</p>;

}

export const Hello = () => {
    const message:string = "How r u";
    const skills:string[] = ["TS", "Java", "React"];
    const emp :any= { name: "Srilatha", id: 36, skills: ["TS", "Java", "React", "Python"]};
    const HelloUser = (user ?: string) : JSX.Element=>{
        if(user) return <p>Hello.. {user}</p>
        return <p>Hello Stranger</p>
    }
    return (
      <>
        <h6>{message}</h6>
        <p>{HelloUser()}</p>
        <p>{HelloUser("Srilatha")}</p>
        <p>{skills}</p>
        <p>{emp.id}</p>
      </>
    );

}
