import SocialMediaCard from "../components/aisehi";
import image3 from '../assets/pexels-michael-block-1691617-3225517.jpg'
function Searchall (){
    return (<><div className="bg-neutral-900 h-screen"> <div className="flex justify-center gap-6 mt-30">
        <SocialMediaCard
          platform="Instagram"
          image1={image3}
        
          icon="fab fa-instagram"
        />
        <SocialMediaCard
          platform="Twitter - X"
          image1={image3}
       
          icon="fab fa-twitter"
        />
        <SocialMediaCard
          platform="LinkedIn"
          image1={image3}
          
          icon="fab fa-linkedin"
        />
      </div></div></>)
}
export default Searchall;