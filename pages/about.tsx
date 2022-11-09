import Menu from "../components/Menu";
import Image from "next/image";

export default function About() {
	return (
		<>
			<Menu />
			<Image 
				alt="Shovit"
				src="/shovit_animated.jpg"
				width={500}
				height={500}/>
			<Image 
				alt="Shashowt"
				src="/shashowt_animated.jpg"
				width={500}
				height={500}/>
			<Image 
				alt="Swikar"
				src="/swikar_animated.jpg"
				width={500}
				height={500}/>
			
		</>
	)
}