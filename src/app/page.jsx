import Link from "next/link";
import styles from "./homepage.module.css";

export default function Home() {
  return (
    <div>
      <Link href={"/"}>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque
          pulvinar vehicula, mus tempus proin montes venenatis dui praesent
          vulputate class, cubilia fames condimentum vivamus facilisi quisque
          sem litora aptent
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque
          pulvinar vehicula, mus tempus proin montes venenatis dui praesent
          vulputate class, cubilia fames condimentum vivamus facilisi quisque
          sem litora aptent. Conubia justo tempus purus aliquam fermentum
          vulputate inceptos egestas torquent fusce montes litora eget, leo
          fringilla viverra malesuada id vitae porttitor rutrum morbi feugiat
          laoreet. Integer id interdum arcu tortor diam erat venenatis nisi
          blandit scelerisque pharetra, purus aliquam orci euismod cubilia
          sollicitudin facilisis mi varius pulvinar, tempus nibh laoreet iaculis
          curae eleifend eros non enim fusce. Libero etiam quam senectus eros
          phasellus vehicula dapibus ornare vestibulum cras, ridiculus congue
          lectus sem natoque commodo ultricies dui. Velit torquent pharetra
          ullamcorper mi mollis odio nullam facilisi, euismod in aliquet commodo
          aenean pulvinar cursus class fusce, ligula primis suscipit tortor nec
          dapibus habitasse. Sollicitudin duis vestibulum porttitor cum litora
          libero tellus dis velit, fringilla fermentum habitant fusce nullam
          placerat quisque tristique.
        </p>
      </Link>
    </div>
  );
}
