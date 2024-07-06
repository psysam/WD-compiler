import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home-grid w-full h-[calc(100dvh-60px)] text-white flex justify-center text-center flex-col gap-5">
      <h1 className=" head text-6xl  font-bold text-center">
        Web Dev Compiler
      </h1>
      <p className="text-gray-500 text-center">
        Compile HTML, CSS and JavaScript Code on the go and share it with your
        friends{" "}
      </p>
      <h1 className="text-3xl">Made By Prince All © are Reserved</h1>
      <div className="flex flex-row justify-center gap-8 p-3  ">
        <Link to="https://github.com/psysam">
          <Button variant={"link"}>
            <Github size={16} />
            Github
          </Button>
        </Link>
        <Link to="https://www.linkedin.com/in/prince-singh-yadav-622033212/">
          <Button variant={"link"}>
            <Linkedin size={16} />
            LinkedIn
          </Button>
        </Link>
      </div>
    </div>
  );
}
