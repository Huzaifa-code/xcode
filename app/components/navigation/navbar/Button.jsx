import Link from "next/link";

const Button = () => {
    return (
      <Link href="/signin" className="h-12 rounded-lg bg-black text-white hover:bg-zinc-700 font-bold py-3 px-5">Sign In</Link>
    );
};
  
export default Button;