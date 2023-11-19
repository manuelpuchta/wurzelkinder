import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <h2>Entfalte deine Wurzeln, entdecke die Welt!</h2>
        <p>
          Wir bieten eine behütete Umgebung, in der sich Ihre Kleinen frei
          entfalten können. Unser engagiertes Team legt großen Wert darauf, dass
          sich jedes Kind bei uns wohl und geborgen fühlt. Bei uns stehen die
          Bedürfnisse der Kinder an erster Stelle.
        </p>
        <div className="py-2">
          <Image
            src="/image-1.jpg"
            alt="Spielende Kinder"
            width={850}
            height={567}
          />
        </div>
        <p>
          Unsere pädagogische Ausrichtung basiert auf der Montessori-Pädagogik,
          die es den Kindern ermöglicht, in ihrem eigenen Tempo zu lernen und
          ihre individuellen Fähigkeiten zu entdecken. Wir schaffen eine
          anregende Umgebung, in der die Kinder spielerisch ihre Neugierde und
          Kreativität entfalten können.{" "}
        </p>
      </main>
    </>
  );
}
